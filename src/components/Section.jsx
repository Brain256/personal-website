import './entries.css'

/**
 * Layout primitive: a section label hanging in the left margin beside its
 * content. Below 900px the label stacks above. Every section uses this so the
 * page stays aligned by construction.
 */
function Section({ id, label, children }) {
  return (
    <section id={id} className="section">
      <h2 className="section-label">{label}</h2>
      <div className="section-body">{children}</div>
    </section>
  )
}

export default Section
