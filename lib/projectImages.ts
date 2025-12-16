// Configuration des images pour les projets GitHub
// Mappez le nom de votre repo avec son image de présentation

export const projectImagesMap: Record<string, string> = {
  // Exemple: 'mon-super-projet': '/projects/mon-super-projet.png',
  // Ajoutez vos mappages ici
};

export function getProjectImage(repoName: string): string | null {
  return projectImagesMap[repoName] || null;
}
