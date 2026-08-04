import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'
const DARK_QUERY = '(prefers-color-scheme: dark)'

function readStored() {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

/**
 * Light/dark theme, defaulting to the OS preference.
 *
 * The initial value is already on <html> — an inline script in index.html
 * stamps it before first paint to avoid a flash — so this hook reads from the
 * DOM rather than recomputing it.
 */
export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme ?? 'light'
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  // Follow the OS only until the user makes an explicit choice.
  useEffect(() => {
    const media = matchMedia(DARK_QUERY)

    const onChange = (event) => {
      if (readStored()) return
      setTheme(event.matches ? 'dark' : 'light')
    }

    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // Private browsing / storage disabled — the theme still applies for
        // this page view, it just won't persist.
      }
      return next
    })
  }, [])

  return [theme, toggle]
}
