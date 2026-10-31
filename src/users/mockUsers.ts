import type { User } from './types'

export const mockUsers: User[] = [
  { id: 'u1', username: 'santiago', displayName: 'Santiago Arenas', bio: 'Software engineering student', following: ['u2', 'u3', 'u5', 'u7','u8','u9','u10','u11','u12','u14','u15','u17'] },
  // Los siguientes 11 usuarios siguen a 'u1'
  { id: 'u2', username: 'ana', displayName: 'Ana Gómez', bio: 'Frontend dev', following: ['u1', 'u4', 'u8'] },
  { id: 'u3', username: 'carlos', displayName: 'Carlos Ruiz', bio: 'Coffee and code', following: ['u1', 'u6'] },
  { id: 'u4', username: 'laura_dev', displayName: 'Laura Martínez', bio: 'UI/UX Designer & Dev', following: ['u1', 'u2', 'u5', 'u12'] },
  { id: 'u5', username: 'mateo_codes', displayName: 'Mateo Restrepo', bio: 'Fullstack Engineer | TypeScript enthusiast', following: ['u1', 'u7', 'u9'] },
  { id: 'u6', username: 'elena_b', displayName: 'Elena Bermúdez', bio: 'Data Scientist & AI researcher', following: ['u1', 'u3', 'u15'] },
  { id: 'u10', username: 'camila_codes', displayName: 'Camila Toro', bio: 'Mobile Developer (Flutter & Swift)', following: ['u1', 'u12'] },
  { id: 'u13', username: 'tomas_m', displayName: 'Tomás Mendoza', bio: 'Linux and Open Source lover', following: ['u1', 'u9', 'u25'] },
  { id: 'u16', username: 'mariana_f', displayName: 'Mariana Franco', bio: 'QA Automation Engineer', following: ['u1', 'u2', 'u17'] },
  { id: 'u18', username: 'pablo_web', displayName: 'Pablo Duarte', bio: 'Web3 and Blockchain developer', following: ['u1', 'u5', 'u9'] },
  { id: 'u21', username: 'gabriela_c', displayName: 'Gabriela Correa', bio: 'Engineering Manager', following: ['u1', 'u19', 'u24'] },
  { id: 'u23', username: 'caro_css', displayName: 'Carolina Ossa', bio: 'CSS architect & Creative Developer', following: ['u1', 'u12'] },
  // Los demás usuarios (no siguen a 'u1')
  { id: 'u7', username: 'javi_ops', displayName: 'Javier DevOps', bio: 'Docker, K8s and Cloud Infrastructure', following: ['u5', 'u11'] },
  { id: 'u8', username: 'valen_g', displayName: 'Valentina Gutiérrez', bio: 'Product Manager | Tech speaker', following: ['u2', 'u4', 'u14'] },
  { id: 'u9', username: 'david_tech', displayName: 'David Espinal', bio: 'Backend Engineer (Go / Rust)', following: ['u5', 'u13'] },
  { id: 'u11', username: 'andres_sys', displayName: 'Andrés Castro', bio: 'Cybersecurity specialist', following: ['u7', 'u20'] },
  { id: 'u12', username: 'sofia_ui', displayName: 'Sofía Vargas', bio: 'Creating pixel perfect interfaces', following: ['u4', 'u10'] },
  { id: 'u14', username: 'isabela_r', displayName: 'Isabela Ríos', bio: 'Tech Recruiter | Hiring developers!', following: ['u8', 'u19'] },
  { id: 'u15', username: 'nico_data', displayName: 'Nicolás Silva', bio: 'Python dev & Big Data analyst', following: ['u6', 'u22'] },
  { id: 'u17', username: 'lucas_test', displayName: 'Lucas Tejada', bio: 'Testing everything since 2018', following: ['u16'] },
  { id: 'u19', username: 'daniela_j', displayName: 'Daniela Jaramillo', bio: 'Scrum Master & Agile enthusiast', following: ['u14', 'u21'] },
  { id: 'u20', username: 'samuel_net', displayName: 'Samuel Medina', bio: 'Network engineer and sysadmin', following: ['u11'] },
  { id: 'u22', username: 'felipe_ai', displayName: 'Felipe Henao', bio: 'Machine Learning practitioner', following: ['u15'] },
  { id: 'u24', username: 'simon_arch', displayName: 'Simón Palacio', bio: 'Solutions Architect', following: ['u21', 'u7'] },
  { id: 'u25', username: 'esteban_v', displayName: 'Esteban Villa', bio: 'Junior Developer documenting my journey', following: ['u5', 'u13'] }
]
