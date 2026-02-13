import { useEffect, useRef, useState } from 'react';
import { useLanguage } from './context/LanguageContext';
import { Play, X } from 'lucide-react';

export default function Video() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        id="video"
        ref={sectionRef}
        className="relative h-screen overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/solutions/tobacco.jpg"
            alt="Industrial Video"
            className={`w-full h-full object-cover transition-all duration-1000 ${
              isVisible ? 'scale-100' : 'scale-110'
            }`}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div
                className={`glass-dark rounded-2xl p-8 md:p-12 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  {t('video.title') as string}
                </h2>
                <p className="text-lg text-white/80 mb-8">
                  {t('video.description') as string}
                </p >
                <button
                  onClick={() => setIsPlaying(true)}
                  className="group flex items-center gap-4"
                >
                  <div className="relative">
                    {/* Pulse Rings */}
                    <div className="absolute inset-0 rounded-full bg-[var(--blue)] pulse-ring" />
                    <div className="absolute inset-0 rounded-full bg-[var(--blue)] pulse-ring animation-delay-500" />
                    
                    {/* Play Button */}
                    <div className="relative w-16 h-16 rounded-full bg-[var(--blue)] flex items-center justify-center transition-transform group-hover:scale-110">
                      <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </div>
                  </div>
                  <span className="text-white font-medium group-hover:text-[var(--blue)] transition-colors">
                    {t('video.play') as string}
                  </span>
                </button>
              </div>

              {/* Right - Play Button Large */}
              <div
                className={`hidden lg:flex justify-center transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              >
                <button
                  onClick={() => setIsPlaying(true)}
                  className="group relative"
                >
                  {/* Outer Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-white/20 scale-150 group-hover:scale-160 transition-transform" />
                  <div className="absolute inset-0 rounded-full border-2 border-white/10 scale-175" />
                  
                  {/* Main Button */}
                  <div className="relative w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 transition-all group-hover:bg-[var(--blue)] group-hover:border-[var(--blue)]">
                    <Play className="w-10 h-10 text-white fill-white ml-2" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Video Modal */}
      {isPlaying && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsPlaying(false)}
        >
          <button
            onClick={() => setIsPlaying(false)}
            className="absolute top-6 right-6 text-white hover:text-[var(--blue)] transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div
            className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-center">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg opacity-70">Video Player Placeholder</p >
                <p className="text-sm opacity-50 mt-2">Click outside to close</p >
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
