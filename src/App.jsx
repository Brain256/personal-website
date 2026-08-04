import SiteHeader from './components/SiteHeader.jsx'
import Hero from './components/Hero.jsx'
import Section from './components/Section.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import ExperienceEntry from './components/ExperienceEntry.jsx'
import SkillList from './components/SkillList.jsx'

import { experiences } from './content/experience.js'
import { skills } from './content/skills.js'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />

      <main id="main">
        <Hero id="about" />

        <div className="page">
          <Section id="experience" label="Experience">
            {experiences.map((exp) => (
              <ExperienceEntry key={exp.company} {...exp} />
            ))}
          </Section>

          <ProjectsSection />

          <Section label="Skills">
            <SkillList groups={skills} />
          </Section>
        </div>
      </main>
    </>
  )
}

export default App
