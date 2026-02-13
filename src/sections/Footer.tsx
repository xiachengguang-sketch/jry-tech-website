import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Phone, Mail, Linkedin, Twitter } from 'lucide-react';

const quickLinks = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.products', href: '#products' },
  { key: 'nav.solutions', href: '#solutions' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.contact', href: '#contact' },
];

const productLinks = [
  { name: 'JRY LG Series', nameZh: 'JRY LG系列', href: '#products' },
  { name: 'JRY i1200 Series', nameZh: 'JRY i1200系列', href: '#products' },
  { name: 'JRY Dazzle Speed', nameZh: 'JRY炫速系列', href: '#products' },
  { name: 'JRY V8/V9 Series', nameZh: 'JRY V8/V9系列', href: '#products' },
];

export default function Footer() {
  const { language, t } = useLanguage();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 industrial-grid opacity-50" />
      
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[20vw] font-bold text-white/[0.02]">JRY</span>
      </div>

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="container-custom py-16 md:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-[var(--blue)] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">JRY</span>
                </div>
                <span className="font-semibold text-lg">
                  {language === 'zh' ? '佳瑞洋科技' : 'JRY Technology'}
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {language === 'zh'
                  ? '专注于数字喷墨技术开发与产品溯源集成方案，为工业制造提供精密喷墨系统。'
                  : 'Focused on digital inkjet technology development and product traceability integration solutions.'}
              </p >
              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href=" "
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[var(--blue)] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a >
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[var(--blue)] transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a >
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6">{t('footer.company') as string}</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.key}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-white/60 hover:text-[var(--blue)] transition-colors text-sm"
                    >
                      {t(link.key) as string}
                    </a >
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-bold text-lg mb-6">{t('footer.products') as string}</h3>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-white/60 hover:text-[var(--blue)] transition-colors text-sm"
                    >
                      {language === 'zh' ? link.nameZh : link.name}
                    </a >
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-lg mb-6">{t('footer.contact') as string}</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[var(--blue)] flex-shrink-0 mt-0.5" />
                  <span className="text-white/60 text-sm">{t('footer.address') as string}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[var(--blue)] flex-shrink-0" />
                  <span className="text-white/60 text-sm">{t('footer.phone') as string}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[var(--blue)] flex-shrink-0" />
                  <span className="text-white/60 text-sm">{t('footer.email') as string}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/40 text-sm">
                {t('footer.copyright') as string}
              </p >
              <div className="flex gap-6">
                <a href="#" className="text-white/40 hover:text-[var(--blue)] text-sm transition-colors">
                  {t('footer.privacy') as string}
                </a >
                <a href="#" className="text-white/40 hover:text-[var(--blue)] text-sm transition-colors">
                  {t('footer.terms') as string}
                </a >
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
