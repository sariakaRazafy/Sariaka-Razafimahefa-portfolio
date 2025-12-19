'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getProjectImage } from '@/lib/projectImages';
import { getProjectConfig, statusLabels } from '@/lib/constants';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  icon: string;
  stars?: number;
}

interface ProjectCarouselProps {
  projects: Project[];
  onPreviewClick: (project: Project) => void;
}

export default function ProjectCarousel({
  projects,
  onPreviewClick,
}: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setDirection('right');
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, projects.length]);

  const handlePrevious = () => {
    setIsAutoPlay(false);
    setDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    setIsAutoPlay(true);
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setIsAutoPlay(true);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlay(false);
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
    setIsAutoPlay(true);
  };

  const currentProject = projects[currentIndex];
  const projectImage = getProjectImage(
    currentProject.title?.toLowerCase().replace(/\s+/g, '-')
  );
  const projectConfig = getProjectConfig(
    currentProject.title?.toLowerCase().replace(/\s+/g, '-') || ''
  );
  const status = projectConfig?.status || 'completed';
  const statusInfo = statusLabels[status];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-700">
        {/* Slides */}
        <div className="relative w-full h-[350px] md:h-[450px]">
          {projects.map((project, index) => {
            const pImage = getProjectImage(
              project.title?.toLowerCase().replace(/\s+/g, '-')
            );
            const pConfig = getProjectConfig(
              project.title?.toLowerCase().replace(/\s+/g, '-') || ''
            );
            const pStatus = pConfig?.status || 'completed';
            const pStatusInfo = statusLabels[pStatus];

            const isActive = index === currentIndex;
            const offset = index - currentIndex;

            return (
              <div
                key={project.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                  isActive
                    ? 'opacity-100 scale-100 z-10'
                    : direction === 'right'
                    ? offset > 0
                      ? 'opacity-0 scale-95 translate-x-full z-0'
                      : 'opacity-0 scale-95 -translate-x-full z-0'
                    : offset < 0
                    ? 'opacity-0 scale-95 -translate-x-full z-0'
                    : 'opacity-0 scale-95 translate-x-full z-0'
                }`}
              >
                {/* Image Background */}
                {pImage ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={pImage}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent"></div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-600/30 to-slate-900 flex items-center justify-center">
                    <span className="text-8xl opacity-20">{project.icon}</span>
                  </div>
                )}

                {/* Content Overlay */}
                <div
                  className={`absolute inset-0 flex flex-col justify-between p-8 md:p-12 transition-all duration-700 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {/* Header with Status */}
                  <div className="flex items-start justify-between">
                    <div className="space-y-4 flex-1 pr-8">
                      <div className={`w-fit px-3 py-1 rounded-full border text-sm font-semibold ${pStatusInfo.color}`}>
                        {pStatusInfo.label}
                      </div>
                      <h2
                        className={`text-4xl md:text-5xl font-bold text-white transition-all duration-700 transform ${
                          isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}
                        style={{ transitionDelay: isActive ? '200ms' : '0ms' }}
                      >
                        {project.title}
                      </h2>
                    </div>
                    <span className="text-6xl opacity-30">{project.icon}</span>
                  </div>

                  {/* Description and Tags */}
                  <div className="space-y-6">
                    <p
                      className={`text-lg text-slate-200 leading-relaxed transition-all duration-700 transform ${
                        isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: isActive ? '300ms' : '0ms' }}
                    >
                      {pConfig?.description || project.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-2 transition-all duration-700 transform ${
                        isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: isActive ? '400ms' : '0ms' }}
                    >
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-600/40 backdrop-blur-sm border border-blue-500/50 text-blue-200 rounded-lg text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div
                      className={`flex gap-4 flex-wrap transition-all duration-700 transform ${
                        isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: isActive ? '500ms' : '0ms' }}
                    >
                      {pConfig?.previewImages && pConfig.previewImages.length > 0 && (
                        <button
                          onClick={() => onPreviewClick(project)}
                          className="px-6 py-2 bg-blue-600/40 backdrop-blur-sm border border-blue-500 text-blue-200 hover:bg-blue-600/60 font-semibold rounded-lg transition transform hover:scale-105"
                        >
                          📸 Aperçu
                        </button>
                      )}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition transform hover:scale-105"
                      >
                        Voir le projet →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full transition transform hover:scale-110"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full transition transform hover:scale-110"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Counter */}
        <div className="absolute bottom-6 left-6 z-20 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
          {currentIndex + 1} / {projects.length}
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center gap-2 mt-8">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'bg-blue-600 w-3 h-3'
                : 'bg-slate-600 hover:bg-slate-500 w-2.5 h-2.5'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Project Info Below */}
      <div className="mt-8 p-6 bg-slate-800/50 rounded-xl border border-slate-700">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-slate-400 text-sm mb-1">Projet actuel</p>
            <p className="text-white font-semibold">{currentProject.title}</p>
          </div>
          {currentProject.stars !== undefined && (
            <div className="text-slate-300">
              ⭐ {currentProject.stars} stars
            </div>
          )}
          <p className="text-slate-400 text-sm">
            Parcourez les autres projets avec les flèches ou les points
          </p>
        </div>
      </div>
    </div>
  );
}
