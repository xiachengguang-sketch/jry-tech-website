import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Language } from '@/types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  zh: {
    'nav.home': '首页',
    'nav.products': '产品',
    'nav.solutions': '解决方案',
    'nav.about': '关于我们',
    'nav.contact': '联系我们',
    'nav.quote': '获取报价',
    'hero.title1': '工业精密',
    'hero.title2': '遇见',
    'hero.title3': '数字流体',
    'hero.subtitle': '为现代工业打造的高端喷墨技术。精准与力量的完美融合。',
    'hero.cta1': '探索产品',
    'hero.cta2': '观看视频',
    'about.label': '关于我们',
    'about.title': '以精准与创新驱动工业卓越',
    'about.description': '佳瑞洋科技是工业喷墨系统的领先制造商。我们对精密工程的不懈追求，为全球制造业树立了新标准。自2011年成立以来，我们始终专注于数字喷墨技术开发与产品溯源集成方案，拥有完善的设计、研发、生产、销售与服务体系。',
    'about.stat1': '全球客户',
    'about.stat2': '国家分布',
    'about.stat3': '年卓越经验',
    'products.label': '产品中心',
    'products.title': '精密工程产品',
    'products.subtitle': '为工业卓越而设计的先进喷墨系统',
    'products.viewAll': '查看全部产品',
    'products.learnMore': '了解更多',
    'video.title': '见证精密运转',
    'video.description': '观看我们的工业喷墨系统以无与伦比的精准度运转。',
    'video.play': '播放视频',
    'advantages.title': '为什么选择佳瑞洋科技',
    'solutions.label': '解决方案',
    'solutions.title': '专业方案推荐',
    'solutions.subtitle': '为不同行业提供定制化的喷墨与溯源解决方案',
    'clients.title': '受到行业领导者信赖',
    'blog.label': '新闻动态',
    'blog.title': '最新洞察',
    'blog.subtitle': '行业趋势、产品创新和专业见解',
    'blog.readMore': '阅读更多',
    'footer.company': '公司',
    'footer.products': '产品',
    'footer.contact': '联系我们',
    'footer.address': '北京市北京经济技术开发区文化园西路8号院3号楼17层2006室',
    'footer.phone': '+86-10-6783 2166',
    'footer.email': 'info@jry-tech.com',
    'footer.copyright': '© 2024 佳瑞洋科技。保留所有权利。',
    'footer.privacy': '隐私政策',
    'footer.terms': '服务条款',
    'contact.title': '联系我们',
    'contact.subtitle': '期待与您的合作，请随时与我们联系',
    'contact.name': '姓名',
    'contact.email': '邮箱',
    'contact.phone': '电话',
    'contact.message': '留言',
    'contact.submit': '提交',
    'contact.success': '感谢您的留言，我们会尽快与您联系！',
  },
  en: {
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.solutions': 'Solutions',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.quote': 'Get Quote',
    'hero.title1': 'Industrial Precision',
    'hero.title2': 'Meets',
    'hero.title3': 'Digital Fluidity',
    'hero.subtitle': 'High-end inkjet technology for modern industry. The perfect fusion of precision and power.',
    'hero.cta1': 'Explore Products',
    'hero.cta2': 'Watch Video',
    'about.label': 'About Us',
    'about.title': 'Driving Industrial Excellence with Precision & Innovation',
    'about.description': 'JRY Technology is a leading manufacturer of industrial inkjet systems. Our relentless pursuit of precision engineering has set new standards for global manufacturing. Since 2011, we have focused on digital inkjet technology development and product traceability integration solutions.',
    'about.stat1': 'Global Clients',
    'about.stat2': 'Countries',
    'about.stat3': 'Years of Excellence',
    'products.label': 'Products',
    'products.title': 'Precision Engineered Products',
    'products.subtitle': 'Advanced inkjet systems designed for industrial excellence',
    'products.viewAll': 'View All Products',
    'products.learnMore': 'Learn More',
    'video.title': 'Witness Precision in Action',
    'video.description': 'Watch our industrial inkjet systems operate with unparalleled accuracy.',
    'video.play': 'Play Video',
    'advantages.title': 'Why Choose JRY Technology',
    'solutions.label': 'Solutions',
    'solutions.title': 'Professional Solutions',
    'solutions.subtitle': 'Customized inkjet and traceability solutions for different industries',
    'clients.title': 'Trusted by Industry Leaders',
    'blog.label': 'News',
    'blog.title': 'Latest Insights',
    'blog.subtitle': 'Industry trends, product innovations, and professional insights',
    'blog.readMore': 'Read More',
    'footer.company': 'Company',
    'footer.products': 'Products',
    'footer.contact': 'Contact',
    'footer.address': 'Room 2006, 17/F, Building 3, No.8 West Cultural Park Road, BDA, Beijing',
    'footer.phone': '+86-10-6783 2166',
    'footer.email': 'info@jry-tech.com',
    'footer.copyright': '© 2024 JRY Technology. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Looking forward to working with you, please feel free to contact us',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Message',
    'contact.submit': 'Submit',
    'contact.success': 'Thank you for your message, we will contact you soon!',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('zh');

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    document.documentElement.lang = lang;
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState(prev => {
      const newLang = prev === 'zh' ? 'en' : 'zh';
      document.documentElement.lang = newLang;
      return newLang;
    });
  }, []);

  const t = useCallback((key: string): string => {
    const currentTranslations = translations[language];
    const value = currentTranslations[key as keyof typeof currentTranslations];
    return (value as string) || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
