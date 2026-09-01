import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Download,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Send,
  Terminal,
} from 'lucide-react'

import Navbar from './components/home/Navbar.jsx'
import SectionHeading from './components/home/SectionHeading.jsx'
import SocialLinks from './components/home/SocialLinks.jsx'
import Button from './components/ui/Button.jsx'
import ProjectCard from './components/ui/ProjectCard.jsx'
import {
  achievements,
  courses,
  experience,
  learningNow,
  navItems,
  portfolioStats,
  profile,
  projects,
  skillGroups,
} from './data/portfolioData.js'

const isConfigured = (value) =>
  Boolean(value) && !/your[.-]|00 000|example\.com/i.test(value)

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [formStatus, setFormStatus] = useState('')

  const emailReady = isConfigured(profile.email)
  const phoneReady = isConfigured(profile.phone)

  useEffect(() => {
    const sectionIds = ['home', ...navItems.map(({ id }) => id)]
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.2, 0.5] },
    )

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    sections.forEach((section) => sectionObserver.observe(section))
    document
      .querySelectorAll('.reveal')
      .forEach((element) => revealObserver.observe(element))

    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight

      setShowScrollToTop(window.scrollY > 650)
      setScrollProgress(
        scrollableHeight > 0
          ? Math.min((window.scrollY / scrollableHeight) * 100, 100)
          : 0,
      )
    }

    const handlePointerMove = (event) => {
      document.documentElement.style.setProperty(
        '--pointer-x',
        `${event.clientX}px`,
      )
      document.documentElement.style.setProperty(
        '--pointer-y',
        `${event.clientY}px`,
      )
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    handleScroll()

    return () => {
      sectionObserver.disconnect()
      revealObserver.disconnect()
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])

  const handleContactSubmit = (event) => {
    event.preventDefault()

    if (!emailReady) {
      setFormStatus(
        'Add your email address in src/data/portfolioData.js to activate this form.',
      )
      return
    }

    const formData = new FormData(event.currentTarget)
    const subject = encodeURIComponent(formData.get('subject'))
    const body = encodeURIComponent(
      `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\n${formData.get('message')}`,
    )

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setFormStatus('Opening your email application…')
  }

  return (
    <>
      <div className="page-atmosphere" aria-hidden="true" />

      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Navbar
        activeSection={activeSection}
        scrollProgress={scrollProgress}
      />

      <main id="main-content">
        <section id="home" className="hero section-shell">
          <div className="hero-copy reveal">
            <div className="student-label">
              <span className="student-label-dot" />
              TUT software development student
            </div>

            <span className="eyebrow">HELLO, I&apos;M</span>
            <h1>{profile.name}</h1>

            <p className="hero-title">
              {profile.role}
              <span aria-hidden="true">/</span>
              aspiring full-stack developer
            </p>

            <p className="hero-text">
              {profile.tagline} My experience includes React interfaces,
              Node.js APIs, relational databases, and the teamwork needed to
              move a student project from a requirement to a working feature.
            </p>

            <div className="status-pill">
              <span aria-hidden="true" />
              {profile.availability}
            </div>

            <div className="button-row">
              <Button as="a" variant="primary" href="#projects">
                Explore my work
                <ArrowUpRight size={17} aria-hidden="true" />
              </Button>

              {profile.cvPath ? (
                <Button as="a" variant="secondary" href={profile.cvPath} download>
                  <Download size={17} aria-hidden="true" />
                  Download CV
                </Button>
              ) : (
                <Button as="a" variant="secondary" href="#experience">
                  View experience
                </Button>
              )}
            </div>

            <div className="connect-row">
              <span>Connect with me</span>
              <SocialLinks showFallback />
            </div>
          </div>

          <div className="code-card reveal" aria-label="Developer profile card">
            <div className="window-bar">
              <span />
              <span />
              <span />
              <small>siboniso.profile.js</small>
            </div>

            <div className="code-body">
              <p>
                <i>const</i> studentDeveloper = {'{'}
              </p>
              <p className="indent">
                <b>focus:</b> <em>&apos;useful software&apos;</em>,
              </p>
              <p className="indent">
                <b>stack:</b> [<em>&apos;React&apos;, &apos;Node&apos;, &apos;SQL&apos;</em>],
              </p>
              <p className="indent">
                <b>mindset:</b> <em>&apos;learn, build, improve&apos;</em>,
              </p>
              <p className="indent">
                <b>available:</b> <strong>true</strong>,
              </p>
              <p>{'}'}</p>

              <div className="terminal-line">
                <span>➜</span> npm run career:start
                <span className="cursor" aria-hidden="true" />
              </div>
              <div className="terminal-result">✓ ready for the next challenge</div>

              <div className="developer-palette">
                <div>
                  <span>DESIGN DIRECTION</span>
                  <strong>Aspiring Software Development</strong>
                </div>
                <div className="palette-swatches" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio-stats reveal">
            {portfolioStats.map(({ value, label }) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="content-section section-shell">
          <SectionHeading
            eyebrow="01 / ABOUT ME"
            title="A student developer who learns by building."
            copy="My best learning happens when a real problem has to become a clear, reliable workflow."
          />

          <div className="about-grid">
            <div className="about-copy reveal">
              <p>
                I am completing a Diploma in Software Development at Tshwane
                University of Technology. Through coursework and Work
                Integrated Learning, I have worked across interface design,
                application logic, data, and debugging.
              </p>
              <p>
                I enjoy understanding how a system should work for each user,
                then turning that flow into reusable components and practical
                features. I am comfortable asking questions, investigating
                errors, and improving a solution one iteration at a time.
              </p>
              <p>
                My goal is to grow into a dependable developer who writes
                maintainable code and contributes well in a team.
              </p>
            </div>

            <div className="info-card reveal">
              <div>
                <span>Programme</span>
                <strong>Diploma in Software Development</strong>
              </div>
              <div>
                <span>Institution</span>
                <strong>Tshwane University of Technology</strong>
              </div>
              <div>
                <span>Current status</span>
                <strong>WIL completed — awaiting evaluation</strong>
              </div>
              <div>
                <span>Expected completion</span>
                <strong>2026 / Q1 2027</strong>
              </div>
              <div>
                <span>Career level</span>
                <strong>Graduate / junior developer</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-band">
          <div className="content-section section-shell">
            <SectionHeading
              eyebrow="02 / MY TOOLKIT"
              title="Practical foundations, with room to grow."
              copy="A focused toolkit developed through academic projects, WIL, and hands-on problem solving."
            />

            <div className="skills-grid">
              {skillGroups.map(({ icon: Icon, title, copy, skills }) => (
                <article className="skill-card reveal" key={title}>
                  <div className="skill-icon">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <div className="tag-list">
                    {skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="learning-panel reveal">
              <div className="learning-intro">
                <span className="eyebrow">LEARNING LOG</span>
                <h3>What I am strengthening now</h3>
                <p>
                  I treat the gaps in my knowledge as the next items in the
                  build queue.
                </p>
              </div>
              <div className="learning-list">
                {learningNow.map(({ step, title, copy }) => (
                  <div key={step}>
                    <span>{step}</span>
                    <p>
                      <strong>{title}</strong>
                      {copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="content-section section-shell">
          <SectionHeading
            eyebrow="03 / EXPERIENCE"
            title="Learning the work behind the code."
            copy="My WIL placement gave me practical exposure to team delivery, changing requirements, and real application problems."
          />

          <article className="timeline reveal">
            <div className="timeline-marker">
              <span />
            </div>
            <div className="timeline-content">
              <div className="timeline-meta">
                <span>{experience.period}</span>
                <b>{experience.status}</b>
              </div>
              <h3>{experience.role}</h3>
              <h4>{experience.organisation}</h4>
              <p>{experience.summary}</p>
              <ul>
                {experience.responsibilities.map((responsibility) => (
                  <li key={responsibility}>
                    <Check size={15} aria-hidden="true" />
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </section>

        <section id="projects" className="section-band">
          <div className="content-section section-shell">
            <SectionHeading
              eyebrow="04 / SELECTED BUILDS"
              title="Projects where the learning became visible."
              copy="Each project taught me something different about users, data, teamwork, or making a feature reliable."
            />

            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="content-section section-shell">
          <SectionHeading
            eyebrow="05 / EDUCATION"
            title="The foundation behind my work."
          />

          <article className="education-card reveal">
            <div className="education-icon">
              <GraduationCap size={27} aria-hidden="true" />
            </div>
            <div>
              <span className="eyebrow">DIPLOMA</span>
              <h3>Diploma in Software Development</h3>
              <h4>Tshwane University of Technology (TUT)</h4>
              <p>
                Final-stage student with Work Integrated Learning completed.
                Currently awaiting final evaluation and academic completion.
              </p>
              <div className="course-list" aria-label="Relevant coursework">
                {courses.map((course) => (
                  <span key={course}>{course}</span>
                ))}
              </div>
            </div>
            <div className="education-date">
              Expected completion
              <strong>2026 / Q1 2027</strong>
            </div>
          </article>

          <div className="achievements reveal">
            <span className="eyebrow">PRACTICAL MILESTONES</span>
            <div>
              {achievements.map((achievement) => (
                <span key={achievement}>
                  <Check size={15} aria-hidden="true" />
                  {achievement}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="cv-section section-shell reveal" aria-labelledby="cv-title">
          <div className="cv-icon" aria-hidden="true">
            <FileText size={28} />
          </div>

          <div className="cv-copy">
            <span className="eyebrow">CURRICULUM VITAE</span>
            <h2 id="cv-title">A closer look at my developer journey.</h2>
            <p>
              Download a concise overview of my education, technical skills,
              Work Integrated Learning experience, and project exposure.
            </p>
          </div>

          <div className="cv-actions">
            {profile.cvPath ? (
              <Button as="a" variant="primary" href={profile.cvPath} download>
                <Download size={17} aria-hidden="true" />
                Download CV
              </Button>
            ) : (
              <Button type="button" variant="primary" disabled>
                <Download size={17} aria-hidden="true" />
                Download CV
              </Button>
            )}

            {!profile.cvPath && (
              <small>
                Add the CV PDF and its path in portfolioData.js to activate the
                download.
              </small>
            )}
          </div>
        </section>

        <section className="opportunity-section">
          <div className="looking section-shell reveal">
            <div>
              <span className="eyebrow">CURRENTLY LOOKING FOR</span>
              <h2>My next place to learn and contribute.</h2>
              <p>
                Graduate programmes, internships, learnerships, and junior
                development roles where I can support a team and keep building
                real software.
              </p>
            </div>
            <Button as="a" variant="light" href="#contact">
              Start a conversation
              <ArrowUpRight size={17} aria-hidden="true" />
            </Button>
          </div>
        </section>

        <section id="contact" className="content-section section-shell">
          <SectionHeading
            eyebrow="06 / CONTACT"
            title="Let’s talk about the next build."
            copy="If you have a graduate opportunity, junior role, internship, or project in mind, I would be glad to hear from you."
          />

          <div className="contact-grid">
            <div className="contact-details reveal">
              <div className="contact-intro">
                <span className="contact-avatar">{profile.initials}</span>
                <div>
                  <strong>{profile.name}</strong>
                  <span>{profile.role}</span>
                </div>
              </div>

              {emailReady && (
                <a href={`mailto:${profile.email}`}>
                  <Mail size={19} aria-hidden="true" />
                  <span>
                    Email
                    <strong>{profile.email}</strong>
                  </span>
                </a>
              )}

              {phoneReady && (
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>
                  <Phone size={19} aria-hidden="true" />
                  <span>
                    Phone
                    <strong>{profile.phone}</strong>
                  </span>
                </a>
              )}

              <div className="location">
                <MapPin size={19} aria-hidden="true" />
                <span>
                  Location
                  <strong>{profile.location}</strong>
                </span>
              </div>

              <SocialLinks showFallback />

              {!emailReady && (
                <div className="configuration-note">
                  <Terminal size={18} aria-hidden="true" />
                  <p>
                    <strong>One-minute setup</strong>
                    Add your real contact links in{' '}
                    <code>src/data/portfolioData.js</code> before publishing.
                  </p>
                </div>
              )}
            </div>

            <form className="contact-form reveal" onSubmit={handleContactSubmit}>
              <label>
                Name
                <input
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="Your name"
                />
              </label>
              <label>
                Email
                <input
                  name="email"
                  autoComplete="email"
                  required
                  type="email"
                  placeholder="you@example.com"
                />
              </label>
              <label>
                Subject
                <input
                  name="subject"
                  required
                  placeholder="Opportunity or project"
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me a little about what you have in mind…"
                />
              </label>

              <Button type="submit" variant="primary">
                Send message
                <Send size={16} aria-hidden="true" />
              </Button>
              <p className="form-help">
                This opens your default email application—no form data is stored.
              </p>
              <p className="form-status" aria-live="polite">
                {formStatus}
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-shell footer-inner">
          <div>
            <a className="brand" href="#home">
              <span>{profile.name}</span>
            </a>
            <p>Designed and built while learning, one iteration at a time.</p>
          </div>

          <SocialLinks />

          <small>© {new Date().getFullYear()} {profile.name}</small>
        </div>
      </footer>

      {showScrollToTop && (
        <a className="to-top" href="#home" aria-label="Scroll to top">
          <ChevronDown size={19} aria-hidden="true" />
        </a>
      )}
    </>
  )
}

export default App
