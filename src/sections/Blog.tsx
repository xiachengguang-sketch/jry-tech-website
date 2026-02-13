import { useEffect, useRef, useState } from 'react';
import { useLanguage } from './context/LanguageContext';
import { blogPosts } from './data';
import { ArrowRight, Calendar } from 'lucide-react';

export default function Blog() {
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="section-padding bg-white overflow-hidden"
    >
      <div className="container-custom">
        {/* Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <span className="inline-block px-4 py-2 bg-[var(--blue)]/10 text-[var(--blue)] text-sm font-medium rounded-full mb-4">
              {t('blog.label') as string}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
              {t('blog.title') as string}
            </h2>
            <p className="text-lg text-[var(--dark-grey)] max-w-2xl">
              {t('blog.subtitle') as string}
            </p >
          </div>

          <button className="hidden lg:inline-flex btn-outline mt-6 lg:mt-0">
            {t('blog.readMore') as string}
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post, index) => (
            <article
              key={post.id}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={language === 'zh' ? post.title : post.titleEn}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[var(--blue)] text-white text-xs font-medium rounded-full">
                      {language === 'zh' ? post.category : post.categoryEn}
                    </span>
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-[var(--dark-grey)] mb-3">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.date)}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[var(--blue)] transition-colors line-clamp-2">
                    {language === 'zh' ? post.title : post.titleEn}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[var(--dark-grey)] text-sm line-clamp-2 mb-4">
                    {language === 'zh' ? post.excerpt : post.excerptEn}
                  </p >

                  {/* Read More */}
                  <div className="inline-flex items-center text-sm font-medium text-[var(--blue)] group/btn">
                    {t('blog.readMore') as string}
                    <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className={`lg:hidden text-center mt-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="btn-outline">
            {t('blog.readMore') as string}
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
