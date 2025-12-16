'use client';

import { useEffect, useState } from 'react';

export default function GithubDebug() {
  const [data, setData] = useState<Record<string, unknown>[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const testAPI = async () => {
      try {
        console.log('🧪 Test de l\'API GitHub...');
        const response = await fetch('/api/github');
        
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        console.log('✅ Données reçues:', data);
        setData(data);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Erreur inconnue';
        console.error('❌ Erreur:', message);
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    testAPI();
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🔍 Test API GitHub</h1>

      {loading && <p className="text-blue-500">⏳ Chargement...</p>}

      {error && (
        <div className="bg-red-900/20 border border-red-500 rounded-lg p-4 mb-4">
          <p className="text-red-300 font-bold">❌ Erreur:</p>
          <p className="text-red-200">{error}</p>
        </div>
      )}

      {data && data.length > 0 && (
        <div className="bg-green-900/20 border border-green-500 rounded-lg p-4">
          <p className="text-green-300 font-bold mb-3">✅ API fonctionne!</p>
          <p className="text-green-200 mb-3">Nombre de repos: {Array.isArray(data) ? data.length : 0}</p>
          
          <div className="bg-slate-900 rounded p-4 overflow-auto max-h-96">
            <pre className="text-green-300 text-sm font-mono">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        </div>
      )}

      {!loading && !error && !data && (
        <p className="text-yellow-500">⚠️ Aucune donnée reçue</p>
      )}
    </div>
  );
}
