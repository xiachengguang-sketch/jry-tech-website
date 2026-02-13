import { useEffect, useRef, useState } from 'react';
import { useLanguage } from './context/LanguageContext';
import { stats } from './data';

export default function About() {
  const { language, t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));

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

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = stats.map((stat) => parseInt(stat.value.replace(/\D/g, '')));
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounters(targets.map((target) => Math.floor(target * easeOut)));

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-white overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Label */}
            <span className="inline-block px-4 py-2 bg-[var(--blue)]/10 text-[var(--blue)] text-sm font-medium rounded-full mb-6">
              {t('about.label') as string}
            </span>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              {t('about.title') as string}
            </h2>

            {/* Description */}
            <p className="text-lg text-[var(--dark-grey)] mb-10 leading-relaxed">
              {t('about.description') as string}
            </p >

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center lg:text-left transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 400}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-[var(--blue)] mb-1">
                    {counters[index]}+
                  </div>
                  <div className="text-sm text-[var(--dark-grey)]">
                    {language === 'zh' ? stat.label : stat.labelEn}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Blue Accent Block */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-[var(--blue)] rounded-2xl" />
            
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/about.jpg"
                alt="JRY Technology Manufacturing"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-black text-white p-6 rounded-xl shadow-xl">
              <div className="text-4xl font-bold text-[var(--blue)]">2011</div>
              <div className="text-sm text-white/70">
                {language === 'zh' ? '成立年份' : 'Established'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
