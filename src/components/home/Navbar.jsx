import { useEffect, useState } from 'react'
import { Download, Menu, MessageCircle, X } from 'lucide-react'

import { navItems, profile } from '../../data/portfolioData.js'

function Navbar({ activeSection }) {
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

          {profile.cvPath ? (
            <a className="nav-cv" href={profile.cvPath} download>
              <Download size={15} aria-hidden="true" />
              Download CV
            </a>
          ) : (
            <a className="nav-cv" href="#contact" onClick={closeMenu}>
              <MessageCircle size={15} aria-hidden="true" />
              Contact me
            </a>
          )}
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
