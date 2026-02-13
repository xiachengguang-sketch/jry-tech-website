import type { Solution } from '@/types';

export const solutions: Solution[] = [
  {
    id: 'pharmaceutical',
    title: '医药包装解决方案',
    titleEn: 'Pharmaceutical Packaging Solution',
    description: '符合GMP标准的药品追溯码喷印解决方案，支持兽药二维码、药品电子监管码等，确保药品全生命周期可追溯。',
    descriptionEn: 'GMP-compliant drug traceability coding solution supporting veterinary drug QR codes and drug electronic supervision codes.',
    image: '/images/solutions/pharmaceutical.jpg',
    applications: ['兽药二维码', '药品监管码', '包装盒赋码', '说明书喷印'],
    applicationsEn: ['Veterinary QR codes', 'Drug supervision codes', 'Box coding', 'Leaflet printing']
  },
  {
    id: 'tobacco',
    title: '烟草行业解决方案',
    titleEn: 'Tobacco Industry Solution',
    description: '烟包二维码赋码与视觉检测系统，满足烟草行业高速、高精度、高稳定性的生产需求。',
    descriptionEn: 'Cigarette pack QR code coding and vision inspection system meeting high-speed, high-precision production requirements.',
    image: '/images/solutions/tobacco.jpg',
    applications: ['烟包赋码', '条盒关联', '视觉检测', '数据采集'],
    applicationsEn: ['Pack coding', 'Carton association', 'Vision inspection', 'Data collection']
  },
  {
    id: 'cosmetics',
    title: '化妆品包装解决方案',
    titleEn: 'Cosmetics Packaging Solution',
    description: '高端化妆品包装一物一码解决方案，支持防伪溯源、营销互动，提升品牌价值。',
    descriptionEn: 'High-end cosmetics packaging one-item-one-code solution supporting anti-counterfeiting and marketing interaction.',
    image: '/images/solutions/cosmetics.jpg',
    applications: ['一物一码', '防伪溯源', '营销互动', '会员管理'],
    applicationsEn: ['One-item-one-code', 'Anti-counterfeiting', 'Marketing', 'Member management']
  },
  {
    id: 'labeling',
    title: '标签印刷解决方案',
    titleEn: 'Label Printing Solution',
    description: '不干胶标签高速喷墨赋码系统，适用于食品、饮料、日化等行业的标签赋码需求。',
    descriptionEn: 'High-speed inkjet coding system for adhesive labels, suitable for food, beverage, and daily chemical industries.',
    image: '/images/solutions/labeling.jpg',
    applications: ['不干胶标签', '收缩膜标签', '吊牌赋码', '条码打印'],
    applicationsEn: ['Adhesive labels', 'Shrink film labels', 'Tag coding', 'Barcode printing']
  },
  {
    id: 'security',
    title: '防伪票证解决方案',
    titleEn: 'Security Document Solution',
    description: '票据印刷赋码系统，支持发票、门票、证书等票证的安全赋码与验证。',
    descriptionEn: 'Document coding system supporting secure coding and verification for invoices, tickets, and certificates.',
    image: '/images/solutions/security.jpg',
    applications: ['发票赋码', '门票印刷', '证书制作', '防伪验证'],
    applicationsEn: ['Invoice coding', 'Ticket printing', 'Certificate production', 'Security verification']
  },
  {
    id: 'film',
    title: '软包装解决方案',
    titleEn: 'Flexible Packaging Solution',
    description: '软塑薄膜包装喷墨解决方案，适用于食品包装、日用品包装等软质材料的赋码。',
    descriptionEn: 'Flexible film packaging inkjet solution for coding on food packaging and daily necessities.',
    image: '/images/solutions/film.jpg',
    applications: ['食品包装', '日用品包装', '薄膜喷印', '复合材料'],
    applicationsEn: ['Food packaging', 'Daily necessities', 'Film printing', 'Composite materials']
  }
];
