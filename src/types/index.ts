export type Language = 'zh' | 'en';

export interface NavItem {
  label: string;
  href: string;
}

export interface Product {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  features: string[];
  featuresEn: string[];
}

export interface Advantage {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  image: string;
  date: string;
  category: string;
  categoryEn: string;
}

export interface Solution {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  applications: string[];
  applicationsEn: string[];
}

export interface Stat {
  value: string;
  label: string;
  labelEn: string;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
}
