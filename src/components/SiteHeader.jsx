import './SiteHeader.css'
import ThemeToggle from './ThemeToggle.jsx'
import { navItems, site } from '../content/site.js'
import { useActiveSection } from '../hooks/useActiveSection.js'

const sectionIds = navItems.map((item) => item.id)

function SiteHeader() {
  const active = useActiveSection(sectionIds)

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="wordmark" href="#about">
          {site.name}
        </a>
        <div className="site-header-right">
          <nav aria-label="Sections">
            <ul className="nav-links">
              {navItems.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={active === id ? 'nav-link is-active' : 'nav-link'}
                    aria-current={active === id ? 'true' : undefined}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
