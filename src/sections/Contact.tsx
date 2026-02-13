import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const { language, t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t('footer.address') as string,
      value: t('footer.address') as string,
    },
    {
      icon: Phone,
      label: t('footer.phone') as string,
      value: '+86-10-6783 2166',
    },
    {
      icon: Mail,
      label: t('footer.email') as string,
      value: 'info@jry-tech.com',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-[var(--light-grey)] overflow-hidden"
    >
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            {t('contact.title') as string}
          </h2>
          <p className="text-lg text-[var(--dark-grey)] max-w-2xl mx-auto">
            {t('contact.subtitle') as string}
          </p >
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    {t('contact.success') as string}
                  </h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      {t('contact.name') as string}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--blue)] focus:ring-2 focus:ring-[var(--blue)]/20 transition-all"
                      placeholder={language === 'zh' ? '请输入您的姓名' : 'Enter your name'}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        {t('contact.email') as string}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--blue)] focus:ring-2 focus:ring-[var(--blue)]/20 transition-all"
                        placeholder={language === 'zh' ? '请输入邮箱' : 'Enter email'}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        {t('contact.phone') as string}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--blue)] focus:ring-2 focus:ring-[var(--blue)]/20 transition-all"
                        placeholder={language === 'zh' ? '请输入电话' : 'Enter phone'}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      {t('contact.message') as string}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--blue)] focus:ring-2 focus:ring-[var(--blue)]/20 transition-all resize-none"
                      placeholder={language === 'zh' ? '请输入您的留言' : 'Enter your message'}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary py-4 justify-center"
                  >
                    {t('contact.submit') as string}
                    <Send className="ml-2 w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-lg"
                >
                  <div className="w-12 h-12 rounded-lg bg-[var(--blue)]/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-[var(--blue)]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-black mb-1">{item.label}</h3>
                    <p className="text-[var(--dark-grey)]">{item.value}</p >
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center text-[var(--dark-grey)]">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-[var(--blue)]" />
                  <p className="text-sm">
                    {language === 'zh' ? '北京市北京经济技术开发区' : 'Beijing Economic-Technological Development Area'}
                  </p >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
