'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getProjectImage } from '@/lib/projectImages';
import { socialLinks, getProjectConfig, statusLabels } from '@/lib/constants';
import PreviewModal from '@/components/PreviewModal';
import PDFViewer from '@/components/PDFViewer';

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
    title: "Epicerie",
    description: "Application de gestion d'épicerie (catalogue, panier, commandes).",
    tags: ["PHP", "Symfony", "MySQL"],
    link: "https://github.com/sariakaRazafy/Epicerie",
    icon: "🛒",
    stars: 0
  },
  {
    id: 4,
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
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
        <div className="blob blob-5"></div>
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
              <p className="text-blue-600 font-semibold text-lg">Bienvenue dans mon portfolio 👋</p>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                Je suis <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  RAZAFIMAHEFA Sariaka
                </span>
                <br />
                <span className="text-4xl md:text-5xl text-slate-300">Développeuse Full Stack</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Jeune diplômée en Informatique et Télécommunications, je suis développeuse web full stack spécialisée en JavaScript (front-end) et PHP/Symfony (back-end). Je conçois et développe des applications web en utilisant les outils essentiels du développement moderne, avec des bases en intelligence artificielle. Curieuse, autonome et rigoureuse, je souhaite évoluer dans un environnement dynamique où je pourrai mettre en pratique mes compétences et continuer à apprendre.</p>
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

            <div className="flex gap-6 pt-4">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition text-2xl" title="GitHub">GitHub</a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition text-2xl" title="LinkedIn">LinkedIn</a>
            </div>
          </div>

          <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl blur-2xl opacity-30"></div>
            <Image
              src="/zah.png"
              alt="RAZAFIMAHEFA Sariaka - Développeuse Full Stack"
              width={420}
              height={420}
              className="relative w-full max-w-xs md:max-w-sm rounded-3xl shadow-2xl border border-blue-600/20"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/50 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Mes <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Compétences</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-blue-600/50 transition">
                <h3 className="text-xl font-bold mb-6">{skillGroup.category}</h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {skillGroup.items.map((item) => (
                      <span key={item} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-700 rounded-full transition-all duration-1000"
                      style={{ width: `${skillGroup.level}%` }}
                    ></div>
                  </div>
                  <p className="text-slate-400 text-sm">{skillGroup.level}% Maîtrise</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Projets en <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">vedette</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => {
              const projectImage = getProjectImage(project.title?.toLowerCase().replace(/\s+/g, '-'));
              const projectConfig = getProjectConfig(project.title?.toLowerCase().replace(/\s+/g, '-') || '');
              const status = projectConfig?.status || 'completed';
              const statusInfo = statusLabels[status];
              
              return (
                <div
                  key={project.id}
                  className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-blue-600 transition transform hover:scale-105 cursor-pointer overflow-hidden"
                >
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full border text-sm font-semibold ${statusInfo.color}`}>
                    {statusInfo.label}
                  </div>

                  {/* Image Container */}
                  {projectImage ? (
                    <div className="relative h-48 overflow-hidden bg-slate-900">
                      <Image
                        src={projectImage}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900 opacity-80"></div>
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-blue-600/20 to-slate-800 flex items-center justify-center">
                      <span className="text-6xl">{project.icon}</span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-400 mb-6 line-clamp-3">
                      {projectConfig?.description || project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 bg-slate-700/50 text-slate-300 rounded border border-slate-600">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats if available */}
                    {project.stars !== undefined && (
                      <div className="text-slate-400 text-sm mb-4">
                        ⭐ {project.stars} stars
                      </div>
                    )}

                    <div className="flex gap-3 flex-wrap">
                      {projectConfig?.previewImages && projectConfig.previewImages.length > 0 && (
                        <button
                          onClick={() => setPreviewModal({
                            isOpen: true,
                            projectTitle: project.title,
                            images: projectConfig.previewImages || [],
                          })}
                          className="px-4 py-2 bg-blue-600/20 border border-blue-600 text-blue-400 hover:bg-blue-600/40 hover:text-blue-300 font-semibold rounded-lg transition"
                        >
                          📸 Aperçu
                        </button>
                      )}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
                      >
                        Voir le projet →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/50 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">collaborer</span> ?
          </h2>
          
          <p className="text-xl text-slate-300 mb-10">
            Je suis toujours intéressé par les nouveaux projets et les opportunités.
          </p>

          <div className="space-y-4 mb-10">
            <p className="text-lg">
              📧 <a href={`mailto:${socialLinks.email}`} className="text-blue-600 hover:text-blue-700 font-semibold transition">
                {socialLinks.email}
              </a>
            </p>
            <p className="text-lg">
              📱 <span className="text-blue-600 font-semibold">{socialLinks.phone}</span>
            </p>
          </div>

          <a
            href={`mailto:${socialLinks.email}`}
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-600/50 transition transform hover:scale-105"
          >
            M&apos;envoyer un email
          </a>
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
