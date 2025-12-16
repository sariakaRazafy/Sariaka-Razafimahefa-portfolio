// Configuration des liens de contact et réseaux sociaux
export const socialLinks = {
  github: 'https://github.com/sariakaRazafy',
  linkedin: 'https://www.linkedin.com/in/sariaka-razafimahefa-268502398/',
  email: 'sariakarazafimahefa84@gmail.com',
  phone: '+261 34 68 071 18',
  cv: '/RAZAFIMAHEFA_Sariaka_CV.pdf'
};

// Types de statuts de projets
export type ProjectStatus = 'completed' | 'in-progress' | 'planned';

export const statusLabels: Record<ProjectStatus, { label: string; color: string }> = {
  completed: { label: '✅ Terminé', color: 'bg-green-500/20 text-green-300 border-green-500/30' },
  'in-progress': { label: '🔄 En cours', color: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' },
  planned: { label: '📋 Planifié', color: 'bg-blue-500/20 text-blue-300 border-blue-500/30' }
};

// Configuration des images de projets avec statuts
export const projectsConfig: Array<{
  repoName: string;
  image?: string;
  previewImages?: string[]; // Images d'aperçu des interfaces
  status: ProjectStatus;
  description?: string;
}> = [
  {
    repoName: 'flowtalk',
    image: '/projects/flowtalk.png',
    previewImages: ['/previews/flowtalk-1.png', '/previews/flowtalk-2.png', '/previews/flowtalk-3.png'],
    status: 'in-progress',
    description: 'Plateforme de communication en temps réel'
  },
  {
    repoName: 'medipass',
    image: '/projects/medipass.png',
    previewImages: ['/previews/medipass-1.png', '/previews/medipass-2.png', '/previews/medipass-3.png'],
    status: 'in-progress',
    description: 'Application de gestion médicale'
  },
  {
    repoName: 'eagle-ai',
    image: '/logo3.png',
    previewImages: ['/logo3.png', '/previews/eagle-ai-2.png', '/previews/eagle-ai-3.png'],
    status: 'in-progress',
    description: 'Système d\'IA avancé'
  },
  {
    repoName: 'portfolio',
    previewImages: ['/previews/portfolio-1.png', '/previews/portfolio-2.png', '/previews/portfolio-3.png'],
    status: 'in-progress',
    description: 'Portfolio personnel moderne'
  },
  {
    repoName: 'epicerie',
    previewImages: ['/previews/epicerie-1.png', '/previews/epicerie-2.png', '/previews/epicerie-3.png'],
    status: 'completed',
    description: 'Application de gestion d\'épicerie'
  }
];

export function getProjectConfig(repoName: string) {
  return projectsConfig.find(p => p.repoName.toLowerCase() === repoName.toLowerCase());
}
