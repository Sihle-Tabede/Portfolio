import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

import CvDownload from '../ui/CvDownload.jsx'

import { navItems, profile } from '../../data/portfolioData.js'

function Navbar({ activeSection, scrollProgress = 0 }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="navbar">
      <div className="nav-progress" aria-hidden="true">
        <span style={{ width: `${scrollProgress}%` }} />
      </div>

      <div className="nav-inner">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            ST<span>/dev</span>
          </span>
          <span className="brand-name">{profile.name}</span>
        </a>

        <nav
          id="main-navigation"
          className={isOpen ? 'nav-menu is-open' : 'nav-menu'}
          aria-label="Main navigation"
        >
          {navItems.map(({ label, id }) => (
            <a
              key={id}
              className={activeSection === id ? 'active' : ''}
              href={`#${id}`}
              aria-current={activeSection === id ? 'page' : undefined}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}

          <CvDownload className="nav-cv" onClick={closeMenu} />
        </nav>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setIsOpen((currentValue) => !currentValue)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-controls="main-navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  )
}

export default Navbar
