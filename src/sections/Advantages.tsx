import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { advantages } from '@/data';
import { Settings, Globe, Headphones, Puzzle, Shield, Truck } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  settings: Settings,
  globe: Globe,
  headphones: Headphones,
  puzzle: Puzzle,
  shield: Shield,
  truck: Truck,
};

export default function Advantages() {
  const { language, t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      ref={sectionRef}
      className="section-padding bg-white overflow-hidden"
    >
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            {t('advantages.title') as string}
          </h2>
          <div className="w-20 h-1 bg-[var(--blue)] mx-auto rounded-full" />
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = iconMap[advantage.icon] || Settings;
            const offsetY = index % 3 === 1 ? 40 : index % 3 === 2 ? 80 : 0;
            
            return (
              <div
                key={advantage.id}
                className={`group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 100 + 200}ms`,
                  transform: isVisible ? `translateY(${offsetY}px)` : 'translateY(20px)',
                }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[var(--blue)]/20 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-[var(--blue)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--blue)] group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-[var(--blue)] group-hover:text-white transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[var(--blue)] transition-colors">
                    {language === 'zh' ? advantage.title : advantage.titleEn}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--dark-grey)] leading-relaxed">
                    {language === 'zh' ? advantage.description : advantage.descriptionEn}
                  </p >
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
