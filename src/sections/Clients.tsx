import { useEffect, useRef, useState } from 'react';
import { useLanguage } from './context/LanguageContext';
import { clients } from './data';

export default function Clients() {
  const { t } = useLanguage();
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

  const duplicatedClients = [...clients, ...clients];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-[var(--light-grey)] overflow-hidden"
    >
      <div className="container-custom mb-12">
        <h2 className={`text-2xl md:text-3xl font-bold text-black text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {t('clients.title') as string}
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--light-grey)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--light-grey)] to-transparent z-10" />

        {/* First Row - Left to Right */}
        <div className={`flex mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex gap-16 marquee">
            {duplicatedClients.map((client, index) => (
              <div
                key={`row1-${client.id}-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="w-40 h-20 bg-white rounded-xl shadow-sm flex items-center justify-center px-6 grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <div className="text-center">
                    <div className="text-lg font-bold text-black/70 group-hover:text-[var(--blue)] transition-colors">
                      {client.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Right to Left */}
        <div className={`flex transition-all duration-700 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex gap-16 marquee-reverse">
            {[...duplicatedClients].reverse().map((client, index) => (
              <div
                key={`row2-${client.id}-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="w-40 h-20 bg-white rounded-xl shadow-sm flex items-center justify-center px-6 grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <div className="text-center">
                    <div className="text-lg font-bold text-black/70 group-hover:text-[var(--blue)] transition-colors">
                      {client.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
