/**
 * Mirrors the resume's four groups, trimmed to what's worth reading on a page
 * people skim. Labels stay one word so they fit the 110px column in
 * .skill-row (components/entries.css).
 *
 * @type {import('./types').SkillGroup[]}
 */
export const skills = [
  {
    label: 'Languages',
    items: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'TypeScript', 'Golang', 'SQL'],
  },
  {
    label: 'Frameworks',
    items: ['React', 'Node.js', 'Express', 'FastAPI', 'Tailwind', 'OpenCV', 'MediaPipe'],
  },
  {
    label: 'Tools',
    items: ['Git', 'Linux', 'Supabase', 'Vercel', 'Vite', 'Raspberry Pi', 'Arduino'],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'SQLite'],
  },
]
