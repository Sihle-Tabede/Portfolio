import {
  ArrowUpRight,
  GitBranch,
  LockKeyhole,
  MessageSquareText,
} from 'lucide-react'

function ProjectCard({ project }) {
  const hasProjectLink = Boolean(project.liveUrl || project.repoUrl)
  const projectSlug = project.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

  return (
    <article className={`project-card project-${project.accent} reveal`}>
      <div className="project-visual" aria-hidden="true">
        <div className="project-window">
          <div className="project-window-bar">
            <span />
            <span />
            <span />
            <small>
              <LockKeyhole size={7} />
              dev.local/{projectSlug}
            </small>
          </div>
          <div className="project-window-body">
            <span className="window-sidebar" />
            <div>
              <span className="window-line long" />
              <span className="window-line" />
              <span className="window-card" />
            </div>
          </div>
        </div>
        <span className="project-number">{project.number}</span>
      </div>

      <div className="project-content">
        <span className="project-type">{project.type}</span>
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p>{project.description}</p>

        <div className="project-contribution">
          <strong>My contribution</strong>
          <span>{project.contribution}</span>
        </div>

        <div className="tag-list" aria-label={`${project.title} technologies`}>
          {project.tech.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-links">
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer">
              <GitBranch size={15} aria-hidden="true" />
              Repository
            </a>
          )}

          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              <ArrowUpRight size={15} aria-hidden="true" />
              Live project
            </a>
          )}

          {!hasProjectLink && (
            <a href="#contact">
              <MessageSquareText size={15} aria-hidden="true" />
              Ask about this build
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
