'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { socialLinks, getProjectConfig } from '@/lib/constants';
import PreviewModal from '@/components/PreviewModal';
import PDFViewer from '@/components/PDFViewer';
import ProjectCarousel from '@/components/ProjectCarousel';
import SkillsVisualization from '@/components/SkillsVisualization';

const defaultProjects = [
  {
    id: 1,
    title: "MediPass",
    description: "Projet académique de plateforme numérique de santé facilitant les échanges entre patients, médecins et laboratoires. Il comprend une interface web pour les professionnels, la gestion de résultats de laboratoire, des alertes de résultats urgents, un chatbot IA et des fonctions vocales d’accessibilité.",
    tags: ["Flutter", "Node.js / Express", "MongoDB Atlas", "Interface web", "Chatbot IA", "Fonctions vocales"],
    link: "https://github.com/sariakaRazafy/MediPass",
    icon: "💊",
    stars: 0
  },
  {
    id: 2,
    title: "Eagle-AI",
    description: "Système de surveillance intelligent combinant IA, reconnaissance faciale, analyse d'expression et notifications en temps réel.",
    tags: ["Intelligence artificielle", "Vision par ordinateur", "Node.js"],
    link: "https://github.com/sariakaRazafy/Eagle-AI",
    icon: "🦅",
    stars: 0
  },
  {
    id: 3,
    title: "Music Tiles",
    description: "Jeu interactif de tuiles musicales - Cliquez sur les tuiles au rythme de la musique pour marquer des points.",
    tags: ["React", "Web Audio", "Jeu interactif"],
    link: "https://github.com/sariakaRazafy/Music-Tiles",
    icon: "🎵",
    stars: 0
  },
  {
    id: 4,
    title: "Epicerie",
    description: "Application de gestion d'épicerie (catalogue, panier, commandes).",
    tags: ["PHP", "Symfony", "MySQL"],
    link: "https://github.com/sariakaRazafy/Epicerie",
    icon: "🛒",
    stars: 0
  },
  {
    id: 5,
    title: "JiramaBot Assistance",
    description: "Assistant pour la gestion et l'assistance (bot Telegram/Discord) pour Jirama.",
    tags: ["PHP", "Symfony", "JavaScript", "Meta for Developers", "Postman", "Git", "GitHub"],
    link: "#",
    icon: "🤖",
    stars: 0
  }
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [projects, setProjects] = useState(defaultProjects);
  const [isPDFOpen, setIsPDFOpen] = useState(false);
  const [previewModal, setPreviewModal] = useState<{
    isOpen: boolean;
    projectTitle: string;
    images: string[];
  }>({
    isOpen: false,
    projectTitle: '',
    images: [],
  });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/github');
        if (response.ok) {
          const data = await response.json();
          const existingTitles = new Set(defaultProjects.map(project => project.title.toLowerCase()));
          const merged = [
            ...defaultProjects,
            ...data.filter((project: { title?: string }) => !existingTitles.has(String(project.title || '').toLowerCase()))
          ];
          setProjects(merged);
        } else {
          setProjects(defaultProjects);
        }
      } catch (error) {
        console.error('Erreur lors du chargement des projets:', error);
        setProjects(defaultProjects);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      {/* Animated Background */}
      <div className="animated-bg">
        {/* Blobs */}
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
        <div className="blob blob-5"></div>
        
        {/* Geometric Shapes */}
        {/* Squares */}
        <div className="geometric-shape square square-1"></div>
        <div className="geometric-shape square square-2"></div>
        <div className="geometric-shape square square-3"></div>
        <div className="geometric-shape square square-4"></div>
        
        {/* Lines */}
        <div className="geometric-shape line line-1"></div>
        <div className="geometric-shape line line-2"></div>
        
        {/* Circles */}
        <div className="geometric-shape circle circle-1"></div>
        <div className="geometric-shape circle circle-2"></div>
        <div className="geometric-shape circle circle-3"></div>
        
        {/* Triangles */}
        <div className="geometric-shape triangle triangle-1"></div>
        <div className="geometric-shape triangle triangle-2"></div>
      </div>

      {/* Main Content - TRANSPARENT background to show blobs */}
      <main className="min-h-screen bg-transparent text-white relative">
        {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
            Sariaka
          </h1>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-blue-600 hover:text-blue-700 transition"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
          >
            ☰
          </button>

          <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-6 absolute md:relative top-16 md:top-0 left-0 right-0 md:left-auto md:right-auto bg-slate-900 md:bg-transparent p-6 md:p-0 border-b md:border-b-0 border-slate-700`}>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 transition">À propos</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 transition">Expérience</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 transition">Compétences</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 transition">Projets</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-4">
              <p className="w-fit rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">Ouverte aux nouvelles opportunités freelance</p>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                Data Analyst <span className="text-emerald-300">| Data Quality &amp; Reporting | KPI</span>
              </h1>
              <p className="text-lg font-medium text-slate-200">
                Freelance en analyse de données, reporting et informatique | Développement Web &amp; IA
              </p>
              <p className="text-base leading-relaxed text-slate-300">
                Étudiante en Master 2 en informatique, je travaille à distance avec Zenith RH, une entreprise française, comme Data Analyst / Assistante Marketing Digital. Je contribue au suivi des indicateurs, à la préparation de reportings et à la fiabilité des données.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-lg bg-emerald-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Découvrir mes projets
              </a>
              <a href={`mailto:${socialLinks.email}`} className="rounded-lg border border-slate-500 px-6 py-3 font-semibold text-white transition hover:border-emerald-300 hover:text-emerald-300">Me contacter</a>
              <button onClick={() => setIsPDFOpen(true)} className="rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-300 transition hover:border-slate-500 hover:text-white">Voir mon CV</button>
              <a href={socialLinks.cv} download className="rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-300 transition hover:border-slate-500 hover:text-white">Télécharger mon CV</a>
            </div>

            <div className="flex gap-8 pt-4">
              <a 
                href={socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                title="GitHub"
                className="group"
              >
                <svg 
                  className="w-14 h-14 text-slate-400 transition-colors duration-200 group-hover:text-blue-500"
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn"
                className="group"
              >
                <svg 
                  className="w-14 h-14 text-slate-400 transition-colors duration-200 group-hover:text-blue-500"
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-xs overflow-hidden rounded-3xl md:max-w-sm">
              <Image
                src="/zah.png"
                alt="Sariaka Razafimahefa, Data Analyst"
                width={420}
                height={420}
                loading="eager"
                unoptimized
                sizes="(max-width: 768px) 100vw, 420px"
                className="relative h-auto w-full rounded-3xl border border-slate-600 object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 border-y border-slate-800 bg-slate-900/60 px-6 py-16 relative z-10">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-300">À propos</p>
            <h2 className="text-3xl font-bold text-white">Des données fiables pour des opérations plus claires.</h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-slate-300">
            <p>Étudiante en Master 2 en informatique, je développe mon expérience en Data Analysis et en marketing digital chez Zenith RH, une entreprise française avec laquelle je travaille à distance.</p>
            <p>Mon quotidien comprend le suivi des KPI, la préparation de reportings, la vérification de la cohérence des données, la mise à jour de bases de données et la recherche d’informations professionnelles.</p>
            <p>Rigoureuse, organisée et curieuse, j’aime détecter les incohérences, améliorer la qualité des informations et contribuer à des processus plus fiables. Mon parcours informatique me permet aussi d’aborder des sujets techniques en développement web, gestion de bases de données et intégration de fonctionnalités d’IA.</p>
            <p>Je recherche de nouvelles missions freelance à distance pour valoriser mes compétences, découvrir de nouveaux environnements et continuer à progresser.</p>
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-24 px-6 py-16 relative z-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-300">Expérience professionnelle</p>
          <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
            <div className="flex items-start gap-4">
              <Image
                src="/projects/Zenith.png"
                alt="Logo de Zenith RH"
                width={72}
                height={72}
                className="h-[72px] w-[72px] shrink-0 rounded-lg bg-white p-2 object-contain"
              />
              <div>
                <h2 className="text-3xl font-bold text-white">Data Analyst / Assistante Marketing Digital</h2>
                <p className="mt-3 text-lg font-medium text-slate-200">Zenith RH</p>
                <p className="mt-1 text-sm text-slate-400">Entreprise française · Travail à distance · Depuis janvier 2026</p>
              </div>
            </div>
            <ul className="grid gap-x-8 gap-y-3 text-sm leading-relaxed text-slate-300 sm:grid-cols-2">
              <li>Suivi et mise à jour des indicateurs de performance (KPI).</li>
              <li>Préparation et vérification de reportings opérationnels.</li>
              <li>Contrôle de cohérence et amélioration de la qualité des données.</li>
              <li>Nettoyage, mise à jour et enrichissement de bases de données.</li>
              <li>Détection et traitement des doublons et incohérences.</li>
              <li>Vérification des informations de contacts et d’entreprises.</li>
              <li>Recherche et vérification d’informations professionnelles, notamment via LinkedIn.</li>
              <li>Suivi des données de sourcing et des activités de recrutement.</li>
              <li>Contribution à la fiabilité des données et à l’amélioration des processus opérationnels.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Mes <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Compétences</span>
          </h2>

          <SkillsVisualization />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Projets en <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">vedette</span>
          </h2>

          <ProjectCarousel
            projects={projects}
            onPreviewClick={(project) => {
              const projectConfig = getProjectConfig(
                project.title?.toLowerCase().replace(/\s+/g, '-') || ''
              );
              if (projectConfig?.previewImages) {
                setPreviewModal({
                  isOpen: true,
                  projectTitle: project.title,
                  images: projectConfig.previewImages,
                });
              }
            }}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/50 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Prêt à <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">collaborer</span> ?
          </h2>
          
          <p className="text-xl text-slate-300 mb-10 text-center">
            Je suis disponible pour de nouvelles missions freelance à distance, en France et à l’international.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-10 items-center">
            {/* Left - contact links with icons */}
            <div className="flex flex-col items-center md:items-start justify-center space-y-6">
              <a href={`mailto:${socialLinks.email}`} className="flex w-full min-w-0 items-center gap-4 rounded-lg bg-slate-700/30 px-4 py-3 transition hover:bg-slate-700/50 md:w-auto md:px-6">
                <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8.5L12 13l9-4.5" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="3" y="5" width="18" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="min-w-0 break-all text-sm font-semibold text-blue-300 sm:text-lg">{socialLinks.email}</span>
              </a>

              <a href={`tel:${socialLinks.phone}`} className="flex w-full min-w-0 items-center gap-4 rounded-lg bg-slate-700/30 px-4 py-3 transition hover:bg-slate-700/50 md:w-auto md:px-6">
                <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.87.34 1.71.65 2.5a2 2 0 0 1-.45 2.11L8.91 10.91a16 16 0 0 0 6 6l1.58-1.58a2 2 0 0 1 2.11-.45c.79.31 1.63.53 2.5.65A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="min-w-0 break-all text-sm font-semibold text-blue-300 sm:text-lg">{socialLinks.phone}</span>
              </a>
            </div>

            {/* Right - invitation to scan and QR codes with labels */}
            <div className="flex flex-col items-center md:items-end justify-center">
              <p className="text-2xl font-semibold text-slate-200 mb-8">Ou scannez-moi</p>

              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <p className="text-sm font-semibold text-slate-300 mb-2">Email</p>
                  <a href={`mailto:${socialLinks.email}`} className="inline-block bg-white p-3 rounded-lg shadow-lg hover:shadow-blue-600/50 transition-shadow">
                    <Image className="h-28 w-28 object-contain" src="/projects/email-qr.jfif" width={112} height={112} alt="QR code email" />
                  </a>
                </div>

                <div className="flex flex-col items-center">
                  <p className="text-sm font-semibold text-slate-300 mb-2">Téléphone</p>
                  <a href={`tel:${socialLinks.phone}`} className="inline-block bg-white p-3 rounded-lg shadow-lg hover:shadow-blue-600/50 transition-shadow">
                    <Image className="h-28 w-28 object-contain" src="/projects/phone-qr.jfif" width={112} height={112} alt="QR code téléphone" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8 px-6 bg-slate-900 relative z-10">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2026 RAZAFIMAHEFA Sariaka. Tous droits réservés.</p>
        </div>
      </footer>

      {/* Preview Modal */}
      <PreviewModal
        key={previewModal.projectTitle}
        projectTitle={previewModal.projectTitle}
        images={previewModal.images}
        isOpen={previewModal.isOpen}
        onClose={() => setPreviewModal({ isOpen: false, projectTitle: '', images: [] })}
      />

      <PDFViewer
        isOpen={isPDFOpen}
        onClose={() => setIsPDFOpen(false)}
        pdfUrl={socialLinks.cv}
      />

    </main>
    </>
  );
}
