// Configuration des images pour les projets GitHub
// Mappez le nom de votre repo avec son image de présentation

export const projectImagesMap: Record<string, string> = {
  'medipass': '/projects/medipass.png',
  'eagle-ai': '/projects/eagle_ai.png',
  'portfolio': '/projects/portfolio.png',
  'epicerie': '/projects/epicerie.jpg',
  'jiramabot-assistance': '/projects/jiramabot-assistance.png',
};

export function getProjectImage(repoName: string): string | null {
  return projectImagesMap[repoName] || null;
}
