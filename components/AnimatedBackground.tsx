'use client';

export default function AnimatedBackground() {
  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.7;
          }
          25% {
            transform: translateY(-40px) translateX(15px);
            opacity: 0.9;
          }
          50% {
            transform: translateY(-60px) translateX(-15px);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-40px) translateX(20px);
            opacity: 0.8;
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-50px);
            opacity: 1;
          }
        }

        @keyframes float-reverse {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.5;
          }
          50% {
            transform: translateY(40px);
            opacity: 0.9;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        html, body {
          margin: 0;
          padding: 0;
        }

        .animated-bg-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #0f172a;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }

        body > * {
          position: relative;
          z-index: 1;
        }

        .floating-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(50px);
          pointer-events: none;
        }

        .blob-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%);
          top: -150px;
          left: -150px;
          animation: float 20s ease-in-out infinite;
        }

        .blob-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, transparent 70%);
          top: 250px;
          right: -100px;
          animation: float-slow 25s ease-in-out infinite;
        }

        .blob-3 {
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, transparent 70%);
          bottom: -150px;
          left: 150px;
          animation: float-reverse 30s ease-in-out infinite;
        }

        .blob-4 {
          width: 380px;
          height: 380px;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, transparent 70%);
          top: 40%;
          right: 50px;
          animation: float 22s ease-in-out infinite 5s;
        }

        .blob-5 {
          width: 420px;
          height: 420px;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, transparent 70%);
          bottom: 100px;
          right: 0px;
          animation: pulse-glow 8s ease-in-out infinite;
        }
      `}</style>

      <div className="animated-bg-container">
        <div className="floating-blob blob-1"></div>
        <div className="floating-blob blob-2"></div>
        <div className="floating-blob blob-3"></div>
        <div className="floating-blob blob-4"></div>
        <div className="floating-blob blob-5"></div>
      </div>
    </>
  );
}
