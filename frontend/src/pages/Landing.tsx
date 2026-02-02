import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function Landing() {
  const [prompt, setPrompt] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      navigate('/workspace', { state: { prompt } });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Sparkles className="w-20 h-20 text-blue-400 animate-pulse" />
              <div className="absolute inset-0 blur-xl bg-blue-500 opacity-50 animate-pulse"></div>
            </div>
          </div>
          <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
            Website <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Builder</span>
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Describe your website and watch it come to life with AI-powered code generation
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-4xl">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the website you want to create... (e.g., 'A modern portfolio website with a hero section, about page, and contact form')"
                className="w-full h-32 px-6 py-4 bg-slate-900/90 border border-blue-500/30 rounded-2xl text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-lg backdrop-blur-sm"
                required
              />
              <button
                type="submit"
                className="absolute bottom-4 right-4 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
              >
                Generate
              </button>
            </div>
          </div>
        </form>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
          <div className="text-center p-6 rounded-xl bg-slate-900/50 border border-blue-500/20 backdrop-blur-sm">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-white font-semibold mb-2">Instant Generation</h3>
            <p className="text-blue-200/70 text-sm">Get your website structure in seconds</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-slate-900/50 border border-blue-500/20 backdrop-blur-sm">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="text-white font-semibold mb-2">Beautiful Design</h3>
            <p className="text-blue-200/70 text-sm">Production-ready, modern interfaces</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-slate-900/50 border border-blue-500/20 backdrop-blur-sm">
            <div className="text-4xl mb-3">💻</div>
            <h3 className="text-white font-semibold mb-2">Live Editing</h3>
            <p className="text-blue-200/70 text-sm">Monaco editor for code customization</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .stars, .stars2, .stars3 {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          display: block;
        }

        .stars {
          background: transparent url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMiIgaGVpZ2h0PSIyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMyIvPjwvc3ZnPg==') repeat;
          animation: animateStars 50s linear infinite;
        }

        .stars2 {
          background: transparent url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMyIgaGVpZ2h0PSIzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMiIvPjwvc3ZnPg==') repeat;
          animation: animateStars 100s linear infinite;
        }

        .stars3 {
          background: transparent url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==') repeat;
          animation: animateStars 150s linear infinite;
        }

        @keyframes animateStars {
          from { transform: translateY(0px); }
          to { transform: translateY(-2000px); }
        }
      `}</style>
    </div>
  );
}
