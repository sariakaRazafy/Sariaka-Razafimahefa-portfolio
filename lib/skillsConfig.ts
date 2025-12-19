export interface Skill {
  name: string;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
  category: 'frontend' | 'backend' | 'tools';
}

export const skillsData: Skill[] = [
  // Frontend
  {
    name: 'React.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    color: '#61DAFB',
    bgColor: '#61DAFB/20',
    borderColor: '#61DAFB/50',
    category: 'frontend'
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    color: '#F7DF1E',
    bgColor: '#F7DF1E/20',
    borderColor: '#F7DF1E/50',
    category: 'frontend'
  },
  {
    name: 'Bootstrap',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
    color: '#7952B3',
    bgColor: '#7952B3/20',
    borderColor: '#7952B3/50',
    category: 'frontend'
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    color: '#06B6D4',
    bgColor: '#06B6D4/20',
    borderColor: '#06B6D4/50',
    category: 'frontend'
  },
  // Backend
  {
    name: 'Symfony',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original.svg',
    color: '#000000',
    bgColor: '#000000/20',
    borderColor: '#ffffff/50',
    category: 'backend'
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    color: '#68A063',
    bgColor: '#68A063/20',
    borderColor: '#68A063/50',
    category: 'backend'
  },
  {
    name: 'PHP',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
    color: '#777BB4',
    bgColor: '#777BB4/20',
    borderColor: '#777BB4/50',
    category: 'backend'
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    color: '#00758F',
    bgColor: '#00758F/20',
    borderColor: '#00758F/50',
    category: 'backend'
  },
  // Tools
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    color: '#F1502F',
    bgColor: '#F1502F/20',
    borderColor: '#F1502F/50',
    category: 'tools'
  },
  {
    name: 'Postman',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
    color: '#FF6C37',
    bgColor: '#FF6C37/20',
    borderColor: '#FF6C37/50',
    category: 'tools'
  },
  {
    name: 'REST API',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg',
    color: '#009688',
    bgColor: '#009688/20',
    borderColor: '#009688/50',
    category: 'tools'
  },
  {
    name: 'DevTools',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg',
    color: '#9C27B0',
    bgColor: '#9C27B0/20',
    borderColor: '#9C27B0/50',
    category: 'tools'
  }
];

export const skillsGroups = {
  frontend: skillsData.filter(s => s.category === 'frontend'),
  backend: skillsData.filter(s => s.category === 'backend'),
  tools: skillsData.filter(s => s.category === 'tools')
};
