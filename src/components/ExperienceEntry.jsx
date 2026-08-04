function ExperienceEntry({ company, position, period, location, description }) {
  return (
    <article className="entry">
      <div className="entry-head">
        <h3 className="entry-title">{company}</h3>
        <span className="meta">{period}</span>
      </div>

      <div className="entry-sub">
        {position}
        {location && <span className="meta"> · {location}</span>}
      </div>

      <ul className="entry-list">
        {description.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  )
}

export default ExperienceEntry
