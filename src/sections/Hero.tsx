import { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !contentRef.current) return;
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const progress = Math.min(scrollY / heroHeight, 1);
      
      const bgElement = heroRef.current.querySelector('.hero-bg') as HTMLElement;
      if (bgElement) {
        bgElement.style.transform = `scale(${1 + progress * 0.1}) translateY(${-progress * 100}px)`;
      }
      
      if (contentRef.current) {
        contentRef.current.style.opacity = `${1 - progress * 1.5}`;
        contentRef.current.style.transform = `translateY(${-progress * 50}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="hero-bg absolute inset-0 w-full h-full">
        <img
          src="/images/hero-bg.jpg"
          alt="Industrial Precision"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-white/10 rounded-full float opacity-30" />
      <div className="absolute bottom-1/3 right-1/3 w-20 h-20 border border-white/10 rounded-full float opacity-20 animation-delay-500" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 container-custom pt-32 pb-20"
      >
        <div className="max-w-3xl">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            <span className="block animate-fadeInUp">{t('hero.title1') as string}</span>
            <span className="block animate-fadeInUp animation-delay-200 text-[var(--blue)]">
              {t('hero.title2') as string}
            </span>
            <span className="block animate-fadeInUp animation-delay-400">
              {t('hero.title3') as string}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl animate-fadeInUp animation-delay-600">
            {t('hero.subtitle') as string}
          </p >

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fadeInUp animation-delay-800">
            <button
              onClick={() => scrollToSection('#products')}
              className="group btn-primary text-base px-8 py-4"
            >
              {t('hero.cta1') as string}
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToSection('#video')}
              className="group flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white rounded-none font-medium transition-all hover:bg-white/10 hover:border-white/50"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:scale-110">
                <Play className="w-4 h-4 fill-white" />
              </div>
              {t('hero.cta2') as string}
            </button>
          </div>
        </div>

        {/* Stats Preview */}
        <div className="absolute bottom-10 right-10 hidden lg:block">
          <div className="glass-dark rounded-2xl p-6 text-white">
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--blue)]">500+</div>
                <div className="text-sm text-white/70">{t('about.stat1') as string}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--blue)]">50+</div>
                <div className="text-sm text-white/70">{t('about.stat2') as string}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--blue)]">13+</div>
                <div className="text-sm text-white/70">{t('about.stat3') as string}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
