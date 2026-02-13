import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'jry-lg',
    name: 'JRY LG系列',
    nameEn: 'JRY LG Series',
    description: '标签喷墨系统，专为不干胶标签印刷设计，支持高速赋码与一物一码追溯。',
    descriptionEn: 'Label inkjet system designed for adhesive label printing, supporting high-speed coding and one-item-one-code traceability.',
    image: '/images/products/jry-lg.jpg',
    features: ['高速喷印', '精准定位', '一物一码', '智能检测'],
    featuresEn: ['High-speed printing', 'Precise positioning', 'One-item-one-code', 'Smart inspection']
  },
  {
    id: 'jry-i1200',
    name: 'JRY i1200系列',
    nameEn: 'JRY i1200 Series',
    description: '单张纸工业喷墨检测设备，集成喷码与视觉检测于一体，确保100%质量合格。',
    descriptionEn: 'Single-sheet industrial inkjet inspection equipment, integrating coding and vision inspection for 100% quality assurance.',
    image: '/images/products/jry-i1200.jpg',
    features: ['喷检一体', '高速处理', '缺陷剔除', '数据追溯'],
    featuresEn: ['Integrated coding & inspection', 'High-speed processing', 'Defect rejection', 'Data traceability']
  },
  {
    id: 'jry-xuansu',
    name: 'JRY炫速系列',
    nameEn: 'JRY Dazzle Speed Series',
    description: '软塑宽幅单面工业喷墨设备，适用于薄膜、包装等软质材料的喷码应用。',
    descriptionEn: 'Soft plastic wide-format single-sided industrial inkjet equipment for coding on films, packaging and flexible materials.',
    image: '/images/products/jry-xuansu.jpg',
    features: ['宽幅喷印', '薄膜适用', 'UV固化', '柔性处理'],
    featuresEn: ['Wide-format printing', 'Film compatible', 'UV curing', 'Flexible handling']
  },
  {
    id: 'jry-v8v9',
    name: 'JRY V8/V9系列',
    nameEn: 'JRY V8/V9 Series',
    description: '可变信息视觉检测系统，在线条码质量检测，支持多种码制识别与验证。',
    descriptionEn: 'Variable information vision inspection system for online barcode quality detection, supporting multiple code formats.',
    image: '/images/products/jry-v8v9.jpg',
    features: ['在线检测', '条码识读', '质量验证', '实时报警'],
    featuresEn: ['Online inspection', 'Barcode reading', 'Quality verification', 'Real-time alerts']
  }
];

export const allProducts: Product[] = [
  ...products,
  {
    id: 'yundun',
    name: '云山溯源云平台',
    nameEn: 'Yundun Traceability Cloud',
    description: 'SaaS云平台，提供全链路产品溯源、防伪验证、营销互动一体化解决方案。',
    descriptionEn: 'SaaS cloud platform providing full-chain product traceability, anti-counterfeiting verification, and marketing interaction.',
    image: '/images/products/yundun.jpg',
    features: ['云端管理', '数据分析', '防伪溯源', '营销工具'],
    featuresEn: ['Cloud management', 'Data analytics', 'Anti-counterfeiting', 'Marketing tools']
  },
  {
    id: 'caiji',
    name: '采集关联系统',
    nameEn: 'Data Collection System',
    description: '产品采集关联软件，实现包装层级关联与数据采集管理。',
    descriptionEn: 'Product collection and association software for packaging level correlation and data collection management.',
    image: '/images/products/caiji.jpg',
    features: ['层级关联', '数据采集', '接口丰富', '易于集成'],
    featuresEn: ['Level association', 'Data collection', 'Rich APIs', 'Easy integration']
  },
  {
    id: 'ink',
    name: 'UV墨水系列',
    nameEn: 'UV Ink Series',
    description: '工业级UV LED墨水，适用于多种材质，具有快干、耐候、环保等特点。',
    descriptionEn: 'Industrial UV LED ink suitable for various materials, featuring fast drying, weather resistance, and eco-friendly properties.',
    image: '/images/products/ink.jpg',
    features: ['LED固化', '多材质适用', '环保配方', '色彩鲜艳'],
    featuresEn: ['LED curing', 'Multi-material', 'Eco-friendly', 'Vibrant colors']
  }
];
