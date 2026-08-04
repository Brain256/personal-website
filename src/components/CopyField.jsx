import './CopyField.css'
import { useEffect, useRef, useState } from 'react'

/**
 * Click-to-copy value. Used for the email and phone in the hero — mailto: and
 * tel: only work when the visitor has a handler configured, whereas copying
 * works everywhere.
 */
function CopyField({ value, label }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      // Non-secure context or permission denied — the text stays selectable,
      // so fall back to doing nothing rather than showing a false confirmation.
      return
    }

    setCopied(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 1500)
  }

  return (
    <button
      type="button"
      className="copy-field"
      onClick={handleCopy}
      aria-label={`Copy ${label}`}
      title="Copy to clipboard"
    >
      <span aria-live="polite">{copied ? 'Copied ✓' : value}</span>
    </button>
  )
}

export default CopyField
