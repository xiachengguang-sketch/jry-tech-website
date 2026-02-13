import { useEffect, useRef, useState } from 'react';
import { useLanguage } from './context/LanguageContext';
import { products } from './data';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Products() {
  const { language, t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const scrollToProduct = (index: number) => {
    if (!sliderRef.current) return;
    const cardWidth = sliderRef.current.children[0]?.clientWidth || 0;
    const gap = 24;
    sliderRef.current.scrollTo({
      left: index * (cardWidth + gap),
      behavior: 'smooth',
    });
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : products.length - 1;
    scrollToProduct(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < products.length - 1 ? currentIndex + 1 : 0;
    scrollToProduct(newIndex);
  };

  return (
    <section
      id="products"
      ref={sectionRef}
      className="section-padding bg-[var(--light-grey)] overflow-hidden"
    >
      <div className="container-custom">
        {/* Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <span className="inline-block px-4 py-2 bg-[var(--blue)]/10 text-[var(--blue)] text-sm font-medium rounded-full mb-4">
              {t('products.label') as string}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
              {t('products.title') as string}
            </h2>
            <p className="text-lg text-[var(--dark-grey)] max-w-2xl">
              {t('products.subtitle') as string}
            </p >
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3 mt-6 lg:mt-0">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-black hover:bg-[var(--blue)] hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-black hover:bg-[var(--blue)] hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={language === 'zh' ? product.name : product.nameEn}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[var(--blue)] transition-colors">
                    {language === 'zh' ? product.name : product.nameEn}
                  </h3>
                  <p className="text-[var(--dark-grey)] text-sm mb-4 line-clamp-2">
                    {language === 'zh' ? product.description : product.descriptionEn}
                  </p >

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(language === 'zh' ? product.features : product.featuresEn).slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-[var(--light-grey)] text-xs font-medium rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <button className="inline-flex items-center text-sm font-medium text-[var(--blue)] group/btn">
                    {t('products.learnMore') as string}
                    <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToProduct(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index
                  ? 'w-8 bg-[var(--blue)]'
                  : 'bg-black/20 hover:bg-black/40'
              }`}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="btn-outline">
            {t('products.viewAll') as string}
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
