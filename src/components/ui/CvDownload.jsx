import { Download } from 'lucide-react'
import { profile } from '../../data/portfolioData.js'

function CvDownload({ className = '', onClick }) {
  return (
    <a
      className={className}
      href={profile.cvPath}
      download={profile.cvFilename}
      onClick={onClick}
      type="application/pdf"
    >
      <Download size={17} aria-hidden="true" />
      Download CV
    </a>
  )
}

export default CvDownload
