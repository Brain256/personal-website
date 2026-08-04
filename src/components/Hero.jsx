import './Hero.css'
import CopyField from './CopyField.jsx'
import DotGrid from './DotGrid.jsx'
import { site, socials } from '../content/site.js'

/*
 * One flat list of meta items — links, copy fields, and the location — so the
 * hero reads as four blocks (eyebrow, name, intro, meta row) rather than a
 * stack of near-identical lines.
 */
const metaItems = [
  ...socials.map(({ label, href }) => ({
    key: label,
    node: (
      <a href={href} target="_blank" rel="noreferrer noopener">
        {label}
      </a>
    ),
  })),
  {
    key: 'email',
    node: <CopyField value={site.email} label="email address" />,
  },
  {
    key: 'phone',
    node: <CopyField value={site.phone} label="phone number" />,
  },
  {
    key: 'location',
    node: <span className="hero-location">{site.location}</span>,
  },
]

function Hero({ id }) {
  return (
    <div className="hero" id={id}>
      <DotGrid />

      {/*
        data-dot-avoid marks the text DotGrid fades its lattice around, so the
        canvas never has to know Hero's class names.
      */}
      <div className="hero-inner">
        <h1 className="hero-name" data-dot-avoid>
          {site.name}
        </h1>
        <p className="hero-edu" data-dot-avoid>
          {site.tagline}
        </p>
        <p className="hero-intro" data-dot-avoid>
          {site.intro}
        </p>

        <div className="hero-meta">
          {metaItems.map(({ key, node }) => (
            <span className="hero-meta-item" key={key} data-dot-avoid>
              {node}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
