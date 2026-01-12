
import React, { useState, useEffect, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw,
  Keyboard,
  AlertCircle,
  ShieldAlert,
  School
} from 'lucide-react';
import { SLIDES, getIcon } from './constants';
import { PasswordChecker } from './components/PasswordChecker';
import { PhishingSimulator } from './components/PhishingSimulator';

function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex(prev => Math.min(prev + 1, SLIDES.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex(prev => Math.max(0, prev - 1));
  }, []);

  const reset = useCallback(() => {
    setCurrentSlideIndex(0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slide = SLIDES[currentSlideIndex];
  const progress = ((currentSlideIndex + 1) / SLIDES.length) * 100;

  const renderSlideContent = () => {
    switch (slide.type) {
      case 'title':
        return (
          <div className="flex flex-col items-center text-center py-8">
            <div className="mb-8 p-6 bg-white rounded-full shadow-2xl text-blue-600 animate-bounce">
              {getIcon(slide.id, 80)}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl">
              {slide.subtitle}
            </p>
          </div>
        );

      case 'list':
        return (
          <div className="max-w-4xl mx-auto w-full px-4">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 flex items-center gap-4">
              <span className="p-3 bg-white rounded-2xl shadow-sm text-blue-600">
                {getIcon(slide.id, 32)}
              </span>
              {slide.title}
            </h2>
            {slide.subtitle && (
              <p className="text-lg text-slate-500 mb-8">{slide.subtitle}</p>
            )}
            <div className="grid gap-4">
              {slide.items?.map((item, i) => (
                <div 
                  key={i} 
                  className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0 text-sm">
                    {i + 1}
                  </div>
                  <p className="text-xl text-slate-700 leading-relaxed font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'interactive-password':
        return (
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto w-full px-4 py-4">
            <div className="flex-1">
               <h2 className="text-4xl font-bold text-slate-800 mb-4 flex items-center gap-4">
                <span className="p-3 bg-white rounded-2xl shadow-sm text-emerald-600">
                  {getIcon(slide.id, 32)}
                </span>
                {slide.title}
              </h2>
              <ul className="mt-8 space-y-4 text-slate-600 text-lg">
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"/> Use strong, unique passwords</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"/> Change passwords regularly</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"/> Never share your password</li>
              </ul>
            </div>
            <div className="flex-1 w-full">
              <PasswordChecker />
            </div>
          </div>
        );

      case 'interactive-phishing':
        return (
          <div className="max-w-5xl mx-auto w-full px-4 py-4">
            <h2 className="text-4xl font-bold text-slate-800 mb-6 flex items-center gap-4">
              <span className="p-3 bg-white rounded-2xl shadow-sm text-amber-600">
                {getIcon(slide.id, 32)}
              </span>
              {slide.title}
            </h2>
            <PhishingSimulator />
          </div>
        );

      case 'danger-grid':
        return (
          <div className="max-w-5xl mx-auto w-full px-4">
            <h2 className="text-4xl font-bold text-slate-800 mb-10 flex items-center gap-4">
              <span className="p-3 bg-white rounded-2xl shadow-sm text-red-600">
                {getIcon(slide.id, 32)}
              </span>
              {slide.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {slide.items?.map((item, i) => (
                <div key={i} className="bg-red-50 p-6 rounded-3xl border-2 border-red-100 flex flex-col items-center text-center hover:bg-red-100 transition-colors shadow-sm">
                  <div className="mb-4 text-red-500">
                    <AlertCircle size={40} />
                  </div>
                  <p className="text-lg font-bold text-red-900">{item}</p>
                </div>
              ))}
            </div>
            <div className="p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
              <h4 className="font-bold mb-4 flex items-center gap-2 text-lg">
                <ShieldAlert className="text-red-400" />
                How to Protect:
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
                <li className="flex gap-2">✅ Do not connect unauthorized USB devices</li>
                <li className="flex gap-2">✅ Install software only with IT approval</li>
                <li className="flex gap-2">✅ Keep antivirus software updated</li>
                <li className="flex gap-2">✅ Scan all email attachments</li>
              </ul>
            </div>
          </div>
        );

      case 'takeaways':
        return (
          <div className="max-w-4xl mx-auto w-full px-4">
             <h2 className="text-4xl font-bold text-slate-800 mb-12 flex items-center gap-4">
              <span className="p-3 bg-white rounded-2xl shadow-sm text-green-600">
                {getIcon(slide.id, 32)}
              </span>
              {slide.title}
            </h2>
            <div className="grid gap-6">
              {slide.items?.map((item, i) => (
                <div key={i} className="bg-emerald-500 p-6 rounded-2xl text-white shadow-lg flex items-center gap-6 transform hover:scale-[1.01] transition-transform">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <ChevronRight />
                  </div>
                  <span className="text-2xl font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'conclusion':
        return (
          <div className="flex flex-col items-center text-center py-8">
            <div className="mb-8 w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-blue-200">
              <ShieldAlert size={48} />
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-slate-900 mb-6">
              {slide.title}
            </h1>
            <p className="text-2xl md:text-3xl text-blue-600 font-bold mb-12 italic">
              "{slide.subtitle}"
            </p>
            <button 
              onClick={reset}
              className="flex items-center gap-2 px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl font-bold transition-all border border-slate-200 shadow-sm"
            >
              <RotateCcw size={20} />
              Start Over
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-full bg-slate-50 flex flex-col overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center overflow-hidden">
        <School size={800} />
      </div>

      {/* Branding Header */}
      <header className="fixed top-0 left-0 w-full bg-white/60 backdrop-blur-sm border-b border-slate-200 z-30 py-3 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 group">
            <div className="p-1.5 bg-blue-600 rounded-lg text-white group-hover:rotate-12 transition-transform">
              <School size={18} />
            </div>
            <span className="font-bold text-slate-800 tracking-tight text-lg">Rawafed School</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-slate-100/80 rounded-full border border-slate-200">
            <ShieldAlert size={14} className="text-blue-600" />
            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Cyber Awareness</span>
          </div>
        </div>
      </header>

      {/* Main Content Area - Scrollable to ensure no content is hidden */}
      <main className="flex-1 relative z-10 w-full overflow-y-auto overflow-x-hidden pt-16">
        <div className="min-h-full flex items-center justify-center pt-8 pb-32">
          <div className="w-full max-w-7xl mx-auto px-4 transition-all duration-500 ease-in-out">
            {renderSlideContent()}
          </div>
        </div>
      </main>

      {/* Fixed Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-slate-200 py-4 px-6 z-20 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
             <button 
              onClick={prevSlide}
              disabled={currentSlideIndex === 0}
              className={`p-3 rounded-xl transition-all ${currentSlideIndex === 0 ? 'text-slate-300' : 'text-slate-700 hover:bg-slate-100 active:scale-90'}`}
              aria-label="Previous slide"
            >
              <ChevronLeft size={28} />
            </button>
            <div className="hidden sm:flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Progress</span>
              <span className="text-sm font-bold text-slate-900 tabular-nums">{currentSlideIndex + 1} / {SLIDES.length}</span>
            </div>
          </div>

          <div className="flex-1 mx-8 max-w-md hidden md:block">
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 transition-all duration-700 ease-out shadow-[0_0_8px_rgba(37,99,235,0.4)]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
             <div className="hidden lg:flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-wider mr-4">
              <Keyboard size={14} className="opacity-60" />
              Use keys to navigate
            </div>
            <button 
              onClick={nextSlide}
              disabled={currentSlideIndex === SLIDES.length - 1}
              className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all shadow-lg ${
                currentSlideIndex === SLIDES.length - 1 
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none' 
                  : 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95 shadow-blue-100 hover:shadow-blue-200'
              }`}
            >
              {currentSlideIndex === SLIDES.length - 1 ? 'End' : 'Next'}
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
