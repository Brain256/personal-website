const LINK_LABELS = {
  github: 'GitHub',
  live: 'Live',
  youtube: 'Video',
}

const CATEGORY_LABELS = {
  software: 'Software',
  hardware: 'Hardware',
}

function ProjectEntry({ title, year, category, blurb, highlights, tech, links }) {
  const linkEntries = Object.entries(links ?? {}).filter(([, href]) => href)

  return (
    <article className="entry">
      <div className="entry-head">
        <div className="entry-head-main">
          <h3 className="entry-title">{title}</h3>
          {CATEGORY_LABELS[category] && (
            <span className={`entry-tag is-${category}`}>
              {CATEGORY_LABELS[category]}
            </span>
          )}
        </div>
        <span className="meta">{year}</span>
      </div>

      <p className="entry-blurb">{blurb}</p>

      {highlights?.length > 0 && (
        <ul className="entry-list">
          {highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}

      <div className="entry-tech meta">{tech.join(' · ')}</div>

      {linkEntries.length > 0 && (
        <div className="entry-links">
          {linkEntries.map(([key, href]) => (
            <a key={key} href={href} target="_blank" rel="noreferrer noopener">
              {LINK_LABELS[key] ?? key}
            </a>
          ))}
        </div>
      )}
    </article>
  )
}

export default ProjectEntry
