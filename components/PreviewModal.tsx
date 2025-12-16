'use client';

import { useState } from 'react';

interface PreviewModalProps {
  projectTitle: string;
  images: string[];
  isOpen: boolean;
  onClose: () => void;
}

export default function PreviewModal({
  projectTitle,
  images,
  isOpen,
  onClose,
}: PreviewModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-slate-900 rounded-2xl border border-slate-700 max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-slate-700">
          <h2 className="text-2xl font-bold text-white">
            Aperçu - {projectTitle}
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Image Container */}
        <div className="flex-1 flex items-center justify-center bg-slate-800 overflow-hidden">
          {images.length > 0 ? (
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={images[currentIndex]}
                alt={`${projectTitle} - Image ${currentIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ) : (
            <div className="text-slate-400 text-center">
              <p>Aucune image d&apos;aperçu disponible</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        {images.length > 1 && (
          <div className="flex items-center justify-between p-6 border-t border-slate-700">
            <button
              onClick={goToPrevious}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
            >
              ← Précédent
            </button>

            <div className="text-slate-300 text-sm">
              {currentIndex + 1} / {images.length}
            </div>

            <button
              onClick={goToNext}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
            >
              Suivant →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
