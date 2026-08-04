import './DotGrid.css'
import { useEffect, useRef } from 'react'

const SPACING = 28
const REST_RADIUS = 1.4
const PEAK_RADIUS = 4
const INFLUENCE = 140
/* How far a dot slides toward the cursor at full influence. */
const PULL = 5
/* Per-frame easing of the pointer position — smooths jumpy mouse input. */
const EASE = 0.14

/*
 * A slow diagonal wave crossing the lattice at rest. Its real job is
 * discoverability: without it the grid is static and nobody learns it reacts
 * to the cursor. Kept small enough to read as breathing rather than motion.
 */
const WAVE_SPATIAL = 0.011
const WAVE_SPEED = 0.0011
/* Extra radius, in px, at the crest. */
const WAVE_RADIUS = 0.9
/* How far the crest leans toward the accent, 0-1. */
const WAVE_TINT = 0.22

/* Clear space held around the hero text, in px, before the fade begins. */
const HOLE_PAD = 14
/* Distance over which dots ramp back to full past that padding. */
const HOLE_FEATHER = 52

/** Smoothstep on 0-1. Shared by the pointer falloff and the text hole. */
function smoothstep(n) {
  return n * n * (3 - 2 * n)
}

/** Reads a CSS custom property off <html> as [r, g, b]. */
function readColor(name) {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim()

  // Both --rule and --accent are authored as #rrggbb in index.css.
  return [
    parseInt(value.slice(1, 3), 16),
    parseInt(value.slice(3, 5), 16),
    parseInt(value.slice(5, 7), 16),
  ]
}

/**
 * Faint dot lattice behind the hero. Dots near the pointer swell and warm
 * toward the accent; everything else sits at rest.
 *
 * Deliberately does not use useTheme — that hook owns per-component state and
 * writes data-theme back to <html>, so a second instance would fight the
 * toggle in the header. This observes the attribute instead, which is
 * read-only and therefore safe to have many of.
 */
function DotGrid({ avoidSelector = '[data-dot-avoid]' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const host = canvas.parentElement
    const ctx = canvas.getContext('2d')

    const still =
      matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !matchMedia('(pointer: fine)').matches

    let width = 0
    let height = 0
    let rest = readColor('--dot')
    let peak = readColor('--accent')

    // Target is where the pointer actually is; current is the eased position
    // that drawing reads. strength fades the whole effect in and out so the
    // grid settles smoothly instead of snapping when the pointer leaves.
    const pointer = { x: 0, y: 0, cx: 0, cy: 0, strength: 0, target: 0 }
    let frame = 0
    let onScreen = true
    let holes = []

    /*
     * Rects the lattice keeps clear of, in canvas-local px.
     *
     * Uses Range rather than getBoundingClientRect because the marked elements
     * are block-level: an <h1> box spans the full --col measure however short
     * the name is, so element boxes would erase most of the grid and leave a
     * frame. Range yields one rect per rendered line, hugging the glyphs and
     * following the ragged edge of the wrapped intro sentence.
     */
    const measureHoles = () => {
      const origin = host.getBoundingClientRect()
      const range = document.createRange()
      const next = []

      for (const el of host.querySelectorAll(avoidSelector)) {
        range.selectNodeContents(el)

        for (const rect of range.getClientRects()) {
          if (rect.width === 0 || rect.height === 0) continue

          next.push({
            left: rect.left - origin.left - HOLE_PAD,
            top: rect.top - origin.top - HOLE_PAD,
            right: rect.right - origin.left + HOLE_PAD,
            bottom: rect.bottom - origin.top + HOLE_PAD,
          })
        }
      }

      range.detach()
      holes = next
    }

    /** 0 inside a hole, 1 clear of every hole, smooth in between. */
    const holeAlpha = (x, y) => {
      let nearest = Infinity

      for (const hole of holes) {
        const dx = Math.max(hole.left - x, 0, x - hole.right)
        const dy = Math.max(hole.top - y, 0, y - hole.bottom)

        // Inside any hole is a hard zero, no need to check the rest.
        if (dx === 0 && dy === 0) return 0

        const dist = Math.hypot(dx, dy)
        if (dist < nearest) nearest = dist
      }

      if (nearest >= HOLE_FEATHER) return 1
      return smoothstep(nearest / HOLE_FEATHER)
    }

    const draw = (time = 0) => {
      ctx.clearRect(0, 0, width, height)

      for (let x = SPACING / 2; x < width; x += SPACING) {
        for (let y = SPACING / 2; y < height; y += SPACING) {
          // Cheapest test and it discards every dot behind the text, so run it
          // before any of the pointer or wave maths.
          const alpha = holeAlpha(x, y)
          if (alpha < 0.01) continue

          let t = 0
          let dx = 0
          let dy = 0

          if (pointer.strength > 0.001) {
            dx = pointer.cx - x
            dy = pointer.cy - y
            const dist = Math.hypot(dx, dy)

            if (dist < INFLUENCE) {
              // Smoothstep on the falloff, so there is no visible edge where
              // the influence circle ends.
              t = smoothstep(1 - dist / INFLUENCE) * pointer.strength
            }
          }

          // 0-1 crest position for this dot. Static when the wave is off, so
          // the reduced-motion grid is simply the wave's trough.
          const wave = still
            ? 0
            : 0.5 +
              0.5 * Math.sin((x + y) * WAVE_SPATIAL - time * WAVE_SPEED)

          // The cursor always wins over the wave rather than adding to it,
          // so the highlight peaks at the same size wherever it lands.
          const tint = Math.max(t, wave * WAVE_TINT)

          const radius =
            REST_RADIUS +
            wave * WAVE_RADIUS +
            (PEAK_RADIUS - REST_RADIUS) * t
          const r = Math.round(rest[0] + (peak[0] - rest[0]) * tint)
          const g = Math.round(rest[1] + (peak[1] - rest[1]) * tint)
          const b = Math.round(rest[2] + (peak[2] - rest[2]) * tint)

          // Normalising by dist would divide by zero when the pointer sits
          // exactly on a dot; INFLUENCE is a fine scale since t already
          // encodes proximity.
          const px = x + (dx / INFLUENCE) * PULL * t
          const py = y + (dy / INFLUENCE) * PULL * t

          ctx.beginPath()
          ctx.arc(px, py, radius, 0, Math.PI * 2)
          // Fading alpha rather than radius: a shrinking dot bottoms out as a
          // visible speck, alpha actually reaches nothing.
          ctx.fillStyle = `rgb(${r} ${g} ${b} / ${alpha})`
          ctx.fill()
        }
      }
    }

    const tick = (time) => {
      pointer.cx += (pointer.x - pointer.cx) * EASE
      pointer.cy += (pointer.y - pointer.cy) * EASE
      pointer.strength += (pointer.target - pointer.strength) * EASE

      draw(time)

      // The ambient wave never settles, so unlike the pointer highlight there
      // is no resting state to stop at. The loop is bounded by visibility
      // instead: the IntersectionObserver cancels it once the hero scrolls off.
      frame = requestAnimationFrame(tick)
    }

    const start = () => {
      if (!frame && !still && onScreen) frame = requestAnimationFrame(tick)
    }

    const stop = () => {
      if (frame) {
        cancelAnimationFrame(frame)
        frame = 0
      }
    }

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      width = host.clientWidth
      height = host.clientHeight

      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      measureHoles()
      draw()
    }

    const onMove = (event) => {
      const rect = host.getBoundingClientRect()
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top

      // First entry: place the eased position under the cursor so the swell
      // grows in place instead of flying across the grid.
      if (pointer.target === 0) {
        pointer.cx = pointer.x
        pointer.cy = pointer.y
      }

      pointer.target = 1
      start()
    }

    const onLeave = () => {
      pointer.target = 0
    }

    const sizeObserver = new ResizeObserver(resize)
    sizeObserver.observe(host)

    const themeObserver = new MutationObserver(() => {
      rest = readColor('--dot')
      peak = readColor('--accent')
      draw()
    })
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    let viewObserver = null

    if (!still) {
      host.addEventListener('pointermove', onMove)
      host.addEventListener('pointerleave', onLeave)

      viewObserver = new IntersectionObserver(([entry]) => {
        onScreen = entry.isIntersecting
        if (onScreen) start()
        else stop()
      })
      viewObserver.observe(host)
    }

    resize()
    start()

    // Inter arrives from Google Fonts after first paint, and the name is set in
    // clamp(3rem, 9vw, 5.5rem) — the swap moves the text enough that holes
    // measured against the fallback font would sit visibly off.
    let stale = false
    document.fonts?.ready.then(() => {
      if (stale) return
      measureHoles()
      draw()
    })

    return () => {
      stale = true
      stop()
      sizeObserver.disconnect()
      themeObserver.disconnect()
      viewObserver?.disconnect()
      host.removeEventListener('pointermove', onMove)
      host.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="dot-grid" aria-hidden="true" />
}

export default DotGrid
