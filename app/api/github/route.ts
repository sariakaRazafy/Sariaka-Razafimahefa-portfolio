export async function GET() {
  try {
    // Récupère le username depuis les variables d'environnement
    const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'razafimahefa';
    
    console.log('🔍 Fetching GitHub repos for user:', username);
    
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    };

    // Ajoute le token GitHub s'il est disponible
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
      console.log('✅ Token GitHub trouvé');
    } else {
      console.log('⚠️ Pas de token GitHub fourni');
    }

    // D'abord, vérifions si l'utilisateur existe
    const userUrl = `https://api.github.com/users/${username}`;
    console.log('📡 Vérification utilisateur:', userUrl);
    
    const userResponse = await fetch(userUrl, { headers });
    if (!userResponse.ok) {
      throw new Error(`Utilisateur GitHub "${username}" non trouvé (404)`);
    }
    
    const userInfo = await userResponse.json();
    console.log(`👤 Utilisateur trouvé: ${userInfo.name || username}`);
    console.log(`📊 Repos publics: ${userInfo.public_repos}`);

    // Ensuite, récupérons les repos
    const reposUrl = `https://api.github.com/users/${username}/repos?sort=updated&per_page=10&type=all`;
    console.log('📡 URL API repos:', reposUrl);

    const response = await fetch(reposUrl, {
      headers,
      next: { revalidate: 3600 }
    });

    console.log('📊 Response status:', response.status);

    if (!response.ok) {
      const errorData = await response.json();
      console.error('❌ Erreur GitHub API:', errorData);
      throw new Error(`GitHub API error: ${response.status} - ${errorData.message || 'Erreur inconnue'}`);
    }

    const repos = await response.json();
    console.log(`✅ Repos récupérés: ${repos.length}`);
    
    if (repos.length === 0) {
      console.warn(`⚠️ Aucun repo trouvé. L'utilisateur a ${userInfo.public_repos} repos publics`);
    } else {
      repos.forEach((repo: { name: string; private: boolean; language?: string }) => {
        console.log(`  - ${repo.name} (${repo.private ? 'PRIVÉ' : 'PUBLIC'}, ${repo.language || 'N/A'})`);
      });
    }

    const projects = repos
      .filter((repo: { fork: boolean }) => !repo.fork) // Exclure les forks par défaut
      .map((repo: { id: number; name: string; description: string; topics?: string[]; html_url: string; stargazers_count: number; language?: string; private: boolean }) => ({
        id: repo.id,
        title: repo.name,
        description: repo.description || 'Aucune description disponible',
        tags: repo.topics && repo.topics.length > 0 ? repo.topics : [repo.language || 'GitHub'],
        link: repo.html_url,
        icon: '📦',
        stars: repo.stargazers_count,
        language: repo.language || 'N/A',
        isPrivate: repo.private
      }));

    return Response.json(projects);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('❌ Erreur API GitHub:', message);
    return Response.json(
      { error: 'Erreur lors de la récupération des projets', details: message },
      { status: 500 }
    );
  }
}
