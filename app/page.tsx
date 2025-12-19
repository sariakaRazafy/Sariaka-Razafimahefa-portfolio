'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getProjectImage } from '@/lib/projectImages';
import { socialLinks, getProjectConfig, statusLabels } from '@/lib/constants';
import PreviewModal from '@/components/PreviewModal';
import PDFViewer from '@/components/PDFViewer';
import ProjectCarousel from '@/components/ProjectCarousel';
import SkillsVisualization from '@/components/SkillsVisualization';

const defaultProjects = [
  {
    id: 1,
    title: "Eagle-AI",
    description: "Système de surveillance intelligent combinant IA, reconnaissance faciale, analyse d'expression et notifications en temps réel.",
    tags: ["AI", "Computer Vision", "Node.js"],
    link: "https://github.com/sariakaRazafy/Eagle-AI",
    icon: "🦅",
    stars: 0
  },
  {
    id: 2,
    title: "MediPass",
    description: "Application web médicale intelligente (React + Node.js + MongoDB).",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/sariakaRazafy/MediPass",
    icon: "💊",
    stars: 0
  },
  {
    id: 3,
    title: "Music Tiles",
    description: "Jeu interactif de tuiles musicales - Cliquez sur les tuiles au rythme de la musique pour marquer des points.",
    tags: ["React", "Web Audio", "Interactive"],
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

const skills = [
  { category: "Frontend", items: ["React.js", "JavaScript", "Bootstrap", "Tailwind CSS"], level: 85 },
  { category: "Backend", items: ["Symfony", "Node.js", "PHP", "MySQL"], level: 85 },
  { category: "Outils", items: ["Git", "Postman", "REST API", "DevTools"], level: 80 }
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [projects, setProjects] = useState(defaultProjects);
  const [previewModal, setPreviewModal] = useState<{
    isOpen: boolean;
    projectTitle: string;
    images: string[];
  }>({
    isOpen: false,
    projectTitle: '',
    images: [],
  });
  const [isPDFOpen, setIsPDFOpen] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/github');
        if (response.ok) {
          const data = await response.json();
          console.log('DEBUG: fetched projects from /api/github', data);
          // Merge remote projects with local defaultProjects so local cards
          // (like "JiramaBot Assistance") are kept when not present remotely.
          const existingTitles = data.map((p: { title?: string }) => String(p.title || '').toLowerCase());
          const merged = [
            ...data,
            ...defaultProjects.filter(dp => !existingTitles.includes(dp.title.toLowerCase()))
          ];
          console.log('DEBUG: merged projects', merged);
          setProjects(merged);
        } else {
          console.warn('DEBUG: /api/github returned non-ok status', response.status);
          setProjects(defaultProjects);
        }
      } catch (error) {
        console.error('Erreur lors du chargement des projets:', error);
        setProjects(defaultProjects);
      }
    };

    fetchProjects();
  }, []);

  console.log('DEBUG: projects state (render)', projects);

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
      <nav className="fixed w-full top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
            Sariaka
          </h1>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-blue-600 hover:text-blue-700 transition"
          >
            ☰
          </button>

          <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-6 absolute md:relative top-16 md:top-0 left-0 right-0 md:left-auto md:right-auto bg-slate-900 md:bg-transparent p-6 md:p-0 border-b md:border-b-0 border-slate-700`}>
            <a href="#projects" className="hover:text-blue-600 transition">Projets</a>
            <a href="#skills" className="hover:text-blue-600 transition">Compétences</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden z-10">
        {/* Background Effects */}
        <div className="absolute top-20 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-4">
              <p className="text-blue-600 font-semibold text-3xl text-center">Bienvenue dans mon portfolio 👋</p>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                Je suis <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  RAZAFIMAHEFA Sariaka
                </span>
                <br />
                <span className="text-4xl md:text-5xl text-slate-300">Développeuse Full Stack</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Jeune diplômée d&apos;une licence en Informatique et Télécommunications, je suis développeuse web full stack spécialisée en JavaScript (front-end) et PHP/Symfony (back-end). Je conçois et développe des applications web en utilisant les outils essentiels du développement moderne, avec des bases en intelligence artificielle. Curieuse, autonome et rigoureuse, je souhaite évoluer dans un environnement dynamique où je pourrai mettre en pratique mes compétences et continuer à apprendre.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsPDFOpen(true)}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-600/50 transition transform hover:scale-105"
              >
                Voir mon CV
              </button>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Voir mes projets
              </a>
            </div>

            <div className="flex gap-8 pt-4">
              <a 
                href={socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                title="GitHub"
                className="group relative"
              >
                <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-lg group-hover:bg-blue-600/40 transition-all duration-300" style={{animation: 'pulse 2s ease-in-out infinite'}}></div>
                <svg 
                  className="w-14 h-14 text-slate-400 group-hover:text-blue-600 transition-all duration-300 transform group-hover:scale-110" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  style={{animation: 'float 3s ease-in-out infinite'}}
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn"
                className="group relative"
              >
                <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-lg group-hover:bg-blue-600/40 transition-all duration-300" style={{animation: 'pulse 2s ease-in-out infinite', animationDelay: '0.3s'}}></div>
                <svg 
                  className="w-14 h-14 text-slate-400 group-hover:text-blue-600 transition-all duration-300 transform group-hover:scale-110" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  style={{animation: 'float 3s ease-in-out infinite', animationDelay: '0.2s'}}
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
            {/* Animated Background Blobs */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl blur-2xl opacity-30" 
              style={{animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}
            />
            
            {/* Animated Squares - Left Side */}
            <div 
              className="absolute w-8 h-8 bg-blue-600 border border-blue-400" 
              style={{animation: 'pulse 2s ease-in-out infinite', left: '-40px', top: '20px', opacity: 0.7}}
            />
            <div 
              className="absolute w-6 h-6 bg-purple-600 border border-purple-400" 
              style={{animation: 'pulse 2s ease-in-out infinite', animationDelay: '0.5s', left: '-50px', top: '120px', opacity: 0.6}}
            />
            
            {/* Animated Squares - Right Side */}
            <div 
              className="absolute w-8 h-8 bg-blue-600 border border-blue-400" 
              style={{animation: 'pulse 2s ease-in-out infinite', right: '-40px', top: '30px', opacity: 0.7}}
            />
            <div 
              className="absolute w-6 h-6 bg-purple-600 border border-purple-400" 
              style={{animation: 'pulse 2s ease-in-out infinite', animationDelay: '0.5s', right: '-50px', bottom: '80px', opacity: 0.6}}
            />
            
            {/* Floating Orbs */}
            <div 
              className="absolute w-20 h-20 bg-blue-600/30 rounded-full blur-2xl" 
              style={{animation: 'float 6s ease-in-out infinite', top: '-20px', left: '20px'}}
            />
            <div 
              className="absolute w-16 h-16 bg-purple-600/20 rounded-full blur-2xl" 
              style={{animation: 'float 7s ease-in-out infinite', animationDelay: '-2s', bottom: '10px', right: '10px'}}
            />
            
            {/* Main Image Container */}
            <div className="relative w-full max-w-xs md:max-w-sm rounded-3xl overflow-hidden" style={{animation: 'float 5s ease-in-out infinite'}}>
              <Image
                src="/zah.png"
                alt="RAZAFIMAHEFA Sariaka - Développeuse Full Stack"
                width={420}
                height={420}
                className="relative w-full h-auto rounded-3xl shadow-2xl border-2 border-blue-600/40 hover:border-blue-600 transition-colors duration-300"
                style={{animation: 'imageGlow 3s ease-in-out infinite'}}
              />
              
              {/* Shimmer Effect Overlay */}
              <div 
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-20 transition-opacity duration-300" 
                style={{animation: 'shimmer 3s infinite'}}
              />
            </div>
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
            Je suis toujours intéressé par les nouveaux projets et les opportunités.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-10 items-center">
            {/* Left - contact links with icons */}
            <div className="flex flex-col items-center md:items-start justify-center space-y-6">
              <a href={`mailto:${socialLinks.email}`} className="w-full md:w-auto flex items-center gap-4 px-6 py-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition">
                <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8.5L12 13l9-4.5" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="3" y="5" width="18" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-lg font-semibold text-blue-300">{socialLinks.email}</span>
              </a>

              <a href={`tel:${socialLinks.phone}`} className="w-full md:w-auto flex items-center gap-4 px-6 py-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition">
                <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.87.34 1.71.65 2.5a2 2 0 0 1-.45 2.11L8.91 10.91a16 16 0 0 0 6 6l1.58-1.58a2 2 0 0 1 2.11-.45c.79.31 1.63.53 2.5.65A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-lg font-semibold text-blue-300">{socialLinks.phone}</span>
              </a>
            </div>

            {/* Right - invitation to scan and QR codes with labels */}
            <div className="flex flex-col items-center md:items-end justify-center">
              <p className="text-2xl font-semibold text-slate-200 mb-8">Ou scannez-moi</p>

              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <p className="text-sm font-semibold text-slate-300 mb-2">Email</p>
                  <a href={`mailto:${socialLinks.email}`} className="inline-block bg-white p-3 rounded-lg shadow-lg hover:shadow-blue-600/50 transition-shadow">
                    <img className="w-28 h-28 object-contain" src="/projects/email-qr.jfif" alt="QR code email" />
                  </a>
                </div>

                <div className="flex flex-col items-center">
                  <p className="text-sm font-semibold text-slate-300 mb-2">Téléphone</p>
                  <a href={`tel:${socialLinks.phone}`} className="inline-block bg-white p-3 rounded-lg shadow-lg hover:shadow-blue-600/50 transition-shadow">
                    <img className="w-28 h-28 object-contain" src="/projects/phone-qr.jfif" alt="QR code téléphone" />
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
          <p>© 2025 RAZAFIMAHEFA Sariaka. Tous droits réservés.</p>
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

      {/* PDF Viewer */}
      <PDFViewer
        isOpen={isPDFOpen}
        onClose={() => setIsPDFOpen(false)}
        pdfUrl={socialLinks.cv}
      />
    </main>
    </>
  );
}
