'use client';

import { useEffect, useState } from 'react';
import { skillsData, skillsGroups } from '@/lib/skillsConfig';

export default function SkillsVisualization() {
  const [activeCategory, setActiveCategory] = useState<'frontend' | 'backend' | 'tools'>('frontend');
  const [isAnimating, setIsAnimating] = useState(true);

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { id: 'backend', label: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { id: 'tools', label: 'Outils', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' }
  ];

  const currentSkills = skillsGroups[activeCategory];

  return (
    <div className="space-y-12">
      {/* Category Tabs */}
      <div className="flex justify-center gap-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id as typeof activeCategory)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeCategory === cat.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50'
                : 'bg-slate-800 text-slate-300 border border-slate-700 hover:border-blue-600 hover:text-blue-400'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grid with Animated Circles */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentSkills.map((skill, index) => (
          <div
            key={skill.name}
            className="flex flex-col items-center"
            style={{
              animation: isAnimating
                ? `float 3s ease-in-out infinite`
                : 'none',
              animationDelay: `${index * 0.1}s`
            }}
          >
            {/* Animated Circle Container */}
            <div className="relative mb-4">
              {/* Rotating Background Ring */}
              <div
                className="absolute inset-0 rounded-full opacity-30"
                style={{
                  width: '140px',
                  height: '140px',
                  border: `2px solid ${skill.color}`,
                  animation: 'spin 8s linear infinite',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              />

              {/* Main Circle */}
              <div
                className={`w-32 h-32 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 border-2 group relative overflow-hidden`}
                style={{
                  backgroundColor: `${skill.bgColor}`,
                  borderColor: skill.color,
                  boxShadow: `0 0 20px ${skill.color}33`
                }}
              >
                {/* Gradient Background on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${skill.color}, transparent)`
                  }}
                />

                {/* Icon */}
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="w-16 h-16 relative z-10 group-hover:scale-125 transition-transform duration-300 object-contain"
                  style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.2))' }}
                />

                {/* Pulse Animation */}
                <div
                  className="absolute inset-0 rounded-full animate-pulse"
                  style={{
                    backgroundColor: `${skill.color}`,
                    opacity: 0.1,
                    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                  }}
                />
              </div>

              {/* Animated Dots Around Circle */}
              {[0, 1, 2, 3].map((dot) => (
                <div
                  key={dot}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: skill.color,
                    width: '6px',
                    height: '6px',
                    top: '50%',
                    left: '50%',
                    animation: `orbit 4s linear infinite`,
                    transformOrigin: '70px 0px',
                    animationDelay: `${dot * 1}s`,
                    opacity: 0.6
                  }}
                />
              ))}
            </div>

            {/* Skill Name */}
            <h3 className="text-center font-semibold text-white mt-4 text-sm md:text-base">
              {skill.name}
            </h3>

            {/* Progress Bar Under Name */}
            <div className="w-full max-w-xs h-1 bg-slate-700 rounded-full mt-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r rounded-full transition-all duration-1000"
                style={{
                  background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                  width: '85%'
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Category Description */}
      <div className="mt-12 p-6 bg-slate-800/50 rounded-xl border border-slate-700 text-center">
        <p className="text-slate-300">
          {activeCategory === 'frontend' && 'Création d\'interfaces modernes et réactives avec les dernières technologies front-end.'}
          {activeCategory === 'backend' && 'Développement d\'applications robustes et scalables avec gestion de base de données.'}
          {activeCategory === 'tools' && 'Maîtrise des outils essentiels pour le développement, le versionning et le debugging.'}
        </p>
      </div>

      {/* Keyframe Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(70px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(70px) rotate(-360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}
