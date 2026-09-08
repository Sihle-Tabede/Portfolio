import {
  Braces,
  Database,
  GitBranch,
  LayoutTemplate,
  ServerCog,
  Sparkles,
} from 'lucide-react'

export const profile = {
  name: 'Siboniso Tabede',
  initials: 'ST',
  role: 'Software Development Student',
  tagline: 'I turn real workflows into practical web applications.',
  location: 'Gauteng, South Africa',
  availability: 'Open to graduate and junior developer opportunities',

  email: 'sibonisotabede@gmail.com',
  phone: '+27-81-020-7110',
  github: 'https://github.com/Sihle-Tabede',
  linkedin: '',

  cvPath: `${import.meta.env.BASE_URL}Siboniso-Tabede-CV.pdf`,
  cvFilename: 'Siboniso-Tabede-CV.pdf',
}

export const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
]

export const portfolioStats = [
  { value: '3', label: 'selected projects' },
  { value: 'WIL', label: 'completed in 2026' },
  { value: 'Full-stack', label: 'development foundation' },
]

export const skillGroups = [
  {
    icon: LayoutTemplate,
    title: 'Front-end',
    copy: 'Interfaces that are responsive, clear, and easy to navigate.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive UI'],
  },
  {
    icon: ServerCog,
    title: 'Back-end',
    copy: 'APIs and application logic that connect the interface to data.',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'PHP'],
  },
  {
    icon: Database,
    title: 'Data',
    copy: 'Relational data modelling, queries, and practical administration.',
    skills: ['PostgreSQL', 'MySQL', 'SQL', 'JSON'],
  },
  {
    icon: GitBranch,
    title: 'Workflow',
    copy: 'Version control and team habits used during real project work.',
    skills: ['Git', 'GitHub', 'Agile', 'Debugging'],
  },
  {
    icon: Braces,
    title: 'Engineering habits',
    copy: 'Breaking a problem into smaller, testable, maintainable parts.',
    skills: ['Reusable components', 'Validation', 'API integration', 'Documentation'],
  },
  {
    icon: Sparkles,
    title: 'Growing next',
    copy: 'The areas I am actively strengthening as I move into industry.',
    skills: ['Automated testing', 'Accessibility', 'API security', 'Deployment'],
  },
]

export const learningNow = [
  {
    step: '01',
    title: 'Testing with purpose',
    copy: 'Adding repeatable checks before features reach users.',
  },
  {
    step: '02',
    title: 'Secure API design',
    copy: 'Improving authentication, access control, and safe data handling.',
  },
  {
    step: '03',
    title: 'Accessible interfaces',
    copy: 'Building keyboard-friendly, readable experiences for more people.',
  },
]

export const experience = {
  period: 'April 2026 — September 2026',
  status: 'WIL completed',
  role: 'Front-End Developer Intern',
  organisation: 'Informatics Community Engagement Programme (ICEP)',
  summary:
    'Worked in a student development team on responsive web interfaces, database-backed workflows, integration tasks, and day-to-day application debugging.',
  responsibilities: [
    'Built and maintained React interfaces from project requirements.',
    'Integrated front-end workflows with Node.js and Express APIs.',
    'Used Git and GitHub to collaborate, review changes, and resolve conflicts.',
    'Investigated application and PostgreSQL issues across the full stack.',
  ],
}

export const projects = [
  {
    number: '01',
    type: 'WIL team project',
    title: 'TITTE Connect',
    subtitle: 'Digital Trader Registration & Permit System',
    description:
      'A role-based municipal workflow for trader registration, supporting documents, departmental review, inspections, payments, and permit tracking.',
    contribution:
      'Applicant and staff interfaces, validation flows, API integration, document workflows, and database troubleshooting.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    accent: 'blue',
    repoUrl: '',
    liveUrl: '',
  },
  {
    number: '02',
    type: 'Completed project',
    title: 'Furniture World Private Training College Website',
    subtitle: 'Student Application System',
    description:
      'A responsive website and application platform for a skills training institution, with course discovery, online applications, and contact workflows.',
    contribution:
      'Responsive layouts, application screens, form behaviour, and database-backed features.',
    tech: ['React', 'JavaScript', 'PHP', 'MySQL'],
    accent: 'cyan',
    repoUrl: '',
    liveUrl: 'https://furniture-world-frontend-dev.onrender.com',
  },
  
 {
  number: '03',
  type: 'Personal project',
  title: 'Gallery Noir',
  subtitle: 'Artist Portfolio & Digital Gallery',
  description:
    'A curated online space to showcase original artworks, creative process, and artist narrative. Combines a visual gallery with a personal portfolio for exhibitions, commissions, and connections.',
  contribution:
    'Concept development, responsive UI design, interactive gallery components, and integration with a content API for artwork management.',
  tech: ['React', 'Node.js', 'Express', 'JSON'],
  accent: 'terracotta',
  repoUrl: '',
  liveUrl: 'https://gallerynoir.netlify.app/',
},
]

export const courses = [
  'Software Development',
  'Database Systems',
  'Web Development',
  'Systems Analysis',
  'Programming',
  'Software Engineering',
]

export const achievements = [
  'Work Integrated Learning completed',
  'Full-stack project exposure',
  'Team-based Git workflow',
  'Database administration experience',
]
