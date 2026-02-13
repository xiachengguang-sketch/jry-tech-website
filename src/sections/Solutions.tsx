import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { solutions } from '@/data';
import { ArrowRight, Check } from 'lucide-react';

export default function Solutions() {
  const { language, t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="section-padding bg-black overflow-hidden"
    >
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-2 bg-[var(--blue)]/20 text-[var(--blue)] text-sm font-medium rounded-full mb-4">
            {t('solutions.label') as string}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('solutions.title') as string}
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {t('solutions.subtitle') as string}
          </p >
        </div>

        {/* Solutions Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              {solutions.map((solution, index) => (
                <img
                  key={solution.id}
                  src={solution.image}
                  alt={language === 'zh' ? solution.title : solution.titleEn}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                    activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-[var(--blue)] rounded-xl p-6 shadow-xl">
              <div className="text-3xl font-bold text-white">6+</div>
              <div className="text-sm text-white/80">
                {language === 'zh' ? '行业解决方案' : 'Industry Solutions'}
              </div>
            </div>
          </div>

          {/* Right - Solution List */}
          <div className={`space-y-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                onClick={() => setActiveIndex(index)}
                className={`group cursor-pointer rounded-xl p-6 transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-[var(--blue)]'
                    : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Number */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm transition-colors ${
                    activeIndex === index
                      ? 'bg-white text-[var(--blue)]'
                      : 'bg-white/10 text-white'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold mb-2 transition-colors ${
                      activeIndex === index ? 'text-white' : 'text-white group-hover:text-[var(--blue)]'
                    }`}>
                      {language === 'zh' ? solution.title : solution.titleEn}
                    </h3>
                    
                    <p className={`text-sm mb-3 transition-colors ${
                      activeIndex === index ? 'text-white/80' : 'text-white/60'
                    }`}>
                      {language === 'zh' ? solution.description : solution.descriptionEn}
                    </p >

                    {/* Applications */}
                    {activeIndex === index && (
                      <div className="flex flex-wrap gap-2 mt-4 animate-fadeInUp">
                        {(language === 'zh' ? solution.applications : solution.applicationsEn).map((app) => (
                          <span
                            key={app}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 text-white text-xs rounded-full"
                          >
                            <Check className="w-3 h-3" />
                            {app}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Arrow */}
                  <ArrowRight className={`w-5 h-5 transition-all ${
                    activeIndex === index
                      ? 'text-white translate-x-0 opacity-100'
                      : 'text-white/30 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
