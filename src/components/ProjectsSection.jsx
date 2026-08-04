import { useState } from 'react'
import Section from './Section.jsx'
import ProjectEntry from './ProjectEntry.jsx'
import { projects } from '../content/projects.js'

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'software', label: 'Software' },
  { id: 'hardware', label: 'Hardware' },
]

function ProjectsSection() {
  // Software first: it's the bulk of the recent work, and the hardware
  // projects are the older ones.
  const [filter, setFilter] = useState('software')

  const visible =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter)

  return (
    <Section id="projects" label="Projects">
      {/*
        A filter, not tabs — there are no panels to switch between, so
        aria-pressed buttons are the honest semantics here.
      */}
      <div className="filter-group" role="group" aria-label="Filter projects">
        {FILTERS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className={filter === id ? 'filter-button is-active' : 'filter-button'}
            aria-pressed={filter === id}
            onClick={() => setFilter(id)}
          >
            {label}
          </button>
        ))}
      </div>

      {visible.map((project) => (
        <ProjectEntry key={project.title} {...project} />
      ))}
    </Section>
  )
}

export default ProjectsSection
