function SkillList({ groups }) {
  return (
    <dl className="skill-list">
      {groups.map(({ label, items }) => (
        <div key={label} className="skill-row">
          <dt>{label}</dt>
          <dd>{items.join(', ')}</dd>
        </div>
      ))}
    </dl>
  )
}

export default SkillList
