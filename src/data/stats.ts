import type { Stat, Client } from '@/types';

export const stats: Stat[] = [
  { value: '500+', label: '全球客户', labelEn: 'Global Clients' },
  { value: '50+', label: '国家分布', labelEn: 'Countries' },
  { value: '13+', label: '年卓越经验', labelEn: 'Years of Excellence' },
  { value: '100+', label: '技术专利', labelEn: 'Technology Patents' }
];

export const clients: Client[] = [
  { id: '1', name: '和瑞包装', logo: '/images/clients/client-1.svg' },
  { id: '2', name: '吉宏股份', logo: '/images/clients/client-2.svg' },
  { id: '3', name: '夏进乳业', logo: '/images/clients/client-3.svg' },
  { id: '4', name: '艺虹股份', logo: '/images/clients/client-4.svg' },
  { id: '5', name: '保利华英', logo: '/images/clients/client-5.svg' },
  { id: '6', name: '新兴华包装', logo: '/images/clients/client-6.svg' },
  { id: '7', name: '中国烟草', logo: '/images/clients/client-7.svg' },
  { id: '8', name: '恒安集团', logo: '/images/clients/client-8.svg' }
];
