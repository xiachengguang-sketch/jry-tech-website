import { useState, useEffect } from 'react';
import { useLanguage } from './context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

const navItems = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.products', href: '#products' },
  { key: 'nav.solutions', href: '#solutions' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href=" "
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-lg">JRY</span>
            </div>
            <span className={`font-semibold text-lg hidden sm:block transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>
              {language === 'zh' ? '佳瑞洋科技' : 'JRY Technology'}
            </span>
          </a >

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`animated-underline text-sm font-medium transition-colors ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                {t(item.key) as string}
              </a >
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                isScrolled
                  ? 'bg-black/5 text-black hover:bg-black/10'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'zh' ? 'EN' : '中文'}</span>
            </button>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="hidden sm:inline-flex btn-primary text-sm"
            >
              {t('nav.quote') as string}
            </a >

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className="bg-white rounded-xl shadow-xl p-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block px-4 py-3 text-black font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                {t(item.key) as string}
              </a >
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="block btn-primary text-center mt-2"
            >
              {t('nav.quote') as string}
            </a >
          </div>
        </div>
      </div>
    </nav>
  );
}
