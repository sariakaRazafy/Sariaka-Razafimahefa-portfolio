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
    repoName: 'medipass',
    image: '/projects/medipass.png',
    previewImages: ['/projects/medipass.png'],
    status: 'in-progress',
    description: 'Projet académique de plateforme numérique de santé pour faciliter les échanges entre patients, médecins et laboratoires et l’accès aux informations médicales.'
  },
  {
    repoName: 'eagle-ai',
    image: '/projects/eagle_ai.png',
    previewImages: ['/projects/eagle_ai.png'],
    status: 'in-progress',
    description: 'Système d\'IA avancé'
  },
  {
    repoName: 'music-tiles',
    image: '/projects/music-tiles.png',
    previewImages: ['/previews/music-tiles-1.PNG', '/previews/music-tiles-2.PNG', '/previews/music-tiles-3.PNG','/previews/music-tiles-4.PNG','/previews/music-tiles-5.PNG','/previews/music-tiles-6.PNG','/previews/music-tiles-7.PNG','/previews/music-tiles-8.PNG'],
    status: 'completed',
    description: 'Jeu interactif de tuiles musicales - Cliquez sur les tuiles au rythme de la musique pour marquer des points'
  },
  {
    repoName: 'epicerie',
    previewImages: ['/previews/epicerie-1.PNG', '/previews/epicerie-2.PNG', '/previews/epicerie-3.PNG','/previews/epicerie-4.PNG','/previews/epicerie-5.PNG','/previews/epicerie-6.PNG'],
    status: 'completed',
    description: 'Application de gestion d\'épicerie'
  }
  ,
  {
    repoName: 'jiramabot-assistance',
    image: '/projects/jiramabot-assistance.png',
    previewImages: ['/previews/jiramabot-1.PNG', '/previews/jiramabot-2.PNG', '/previews/jiramabot-3.PNG','/previews/jiramabot-4.PNG', '/previews/jiramabot-5.PNG', '/previews/jiramabot-6.PNG', '/previews/jiramabot-7.PNG', '/previews/jiramabot-8.PNG', '/previews/jiramabot-9.PNG', '/previews/jiramabot-10.PNG', '/previews/jiramabot-11.PNG'],
    status: 'completed',
    description: "Chatbot d'assistance 24/7 pour Jirama — factures, auto-relevés, déclarations d'incidents et réclamations. Technologies: PHP Symfony, JavaScript, Meta for Developers, Postman, Git/GitHub."
  }
];

export function getProjectConfig(repoName: string) {
  return projectsConfig.find(p => p.repoName.toLowerCase() === repoName.toLowerCase());
}
