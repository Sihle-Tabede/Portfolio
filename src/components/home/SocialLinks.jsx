import { GitBranch, Link2, Mail } from 'lucide-react'

import { profile } from '../../data/portfolioData.js'

const isConfigured = (value) =>
  Boolean(value) && !/your[.-]|00 000|example\.com/i.test(value)

function SocialLinks({ showFallback = false }) {
  const links = [
    {
      label: 'Send Siboniso an email',
      href: `mailto:${profile.email}`,
      value: profile.email,
      icon: Mail,
    },
    {
      label: 'Visit Siboniso’s GitHub profile',
      href: profile.github,
      value: profile.github,
      icon: GitBranch,
    },
    {
      label: 'Visit Siboniso’s LinkedIn profile',
      href: profile.linkedin,
      value: profile.linkedin,
      icon: Link2,
    },
  ].filter(({ value }) => isConfigured(value))

  if (links.length === 0) {
    return showFallback ? (
      <span className="social-fallback">Links ready to configure</span>
    ) : null
  }

  return (
    <div className="social-links" aria-label="Social links">
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
          aria-label={label}
        >
          <Icon size={17} aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
