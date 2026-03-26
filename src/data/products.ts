export type Category = 'all' | 'sconce' | 'ceiling' | 'table' | 'floor';

export interface Product {
  id: number;
  name: string;
  collection: string;
  category: Category;
  price: number;
  image: string;
  description: string;
  material: string;
  dimensions: string;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Orbit I',
    collection: 'Void',
    category: 'sconce',
    price: 48000,
    image: 'https://cdn.poehali.dev/projects/26bc3db0-8e4f-4884-8c4e-0d7faf7b2edb/files/be166060-d68c-4059-aa1b-de66ca80b234.jpg',
    description: 'Бра с матовым стеклянным плафоном на кованом кронштейне. Мягкий рассеянный свет создаёт атмосферу глубокого покоя.',
    material: 'Кованая сталь, матовое стекло',
    dimensions: 'Ш 28 × Г 18 × В 32 см',
    isNew: true,
  },
  {
    id: 2,
    name: 'Zenith',
    collection: 'Void',
    category: 'ceiling',
    price: 86000,
    image: 'https://cdn.poehali.dev/projects/26bc3db0-8e4f-4884-8c4e-0d7faf7b2edb/files/f42778f6-74bd-4ad7-bcac-74ec84dba545.jpg',
    description: 'Подвесной светильник с геометрическим металлическим каркасом. Игра теней превращает потолок в произведение искусства.',
    material: 'Чёрная сталь, латунь',
    dimensions: 'Диаметр 55 × В 40 см',
  },
  {
    id: 3,
    name: 'Sotto',
    collection: 'Forma',
    category: 'table',
    price: 34000,
    image: 'https://cdn.poehali.dev/projects/26bc3db0-8e4f-4884-8c4e-0d7faf7b2edb/files/bd9dab29-a914-423b-9910-9b6ac5c21695.jpg',
    description: 'Настольный светильник с лаконичным силуэтом. Балансирует между функциональностью и чистой формой.',
    material: 'Алюминий, тканевый абажур',
    dimensions: 'Диаметр 22 × В 48 см',
    isNew: true,
  },
  {
    id: 4,
    name: 'Arc Nova',
    collection: 'Forma',
    category: 'floor',
    price: 112000,
    image: 'https://cdn.poehali.dev/projects/26bc3db0-8e4f-4884-8c4e-0d7faf7b2edb/files/229dd492-92cf-4af4-93d6-335fdcfe5f8d.jpg',
    description: 'Напольный светильник-арка. Изящный изгиб конструкции отражает философию — свет должен обволакивать, а не давить.',
    material: 'Матовая сталь, мраморное основание',
    dimensions: 'Д 180 × В 210 см',
  },
  {
    id: 5,
    name: 'Orbit II',
    collection: 'Void',
    category: 'sconce',
    price: 52000,
    image: 'https://cdn.poehali.dev/projects/26bc3db0-8e4f-4884-8c4e-0d7faf7b2edb/files/be166060-d68c-4059-aa1b-de66ca80b234.jpg',
    description: 'Двойное бра серии Orbit. Направленный свет с возможностью регулировки угла освещения.',
    material: 'Кованая сталь, опаловое стекло',
    dimensions: 'Ш 48 × Г 18 × В 32 см',
  },
  {
    id: 6,
    name: 'Plano',
    collection: 'Forma',
    category: 'ceiling',
    price: 67000,
    image: 'https://cdn.poehali.dev/projects/26bc3db0-8e4f-4884-8c4e-0d7faf7b2edb/files/f42778f6-74bd-4ad7-bcac-74ec84dba545.jpg',
    description: 'Потолочный светильник с плоским профилем. Минимальная высота, максимальная выразительность.',
    material: 'Алюминиевый профиль, акриловый рассеиватель',
    dimensions: 'Ш 80 × Г 12 × В 6 см',
  },
];

export const collections = [
  {
    id: 'void',
    name: 'Void',
    description: 'Коллекция о пустоте как источнике формы. Каждый предмет — это диалог между светом и тенью, между присутствием и отсутствием.',
    year: '2024',
    count: 3,
    image: 'https://cdn.poehali.dev/projects/26bc3db0-8e4f-4884-8c4e-0d7faf7b2edb/files/f42778f6-74bd-4ad7-bcac-74ec84dba545.jpg',
  },
  {
    id: 'forma',
    name: 'Forma',
    description: 'Исследование чистой формы. Светильники серии Forma рождаются из геометрии и находят своё завершение в свете.',
    year: '2023',
    count: 3,
    image: 'https://cdn.poehali.dev/projects/26bc3db0-8e4f-4884-8c4e-0d7faf7b2edb/files/229dd492-92cf-4af4-93d6-335fdcfe5f8d.jpg',
  },
];

export const categoryLabels: Record<Category, string> = {
  all: 'Все',
  sconce: 'Бра',
  ceiling: 'Потолочные',
  table: 'Настольные',
  floor: 'Напольные',
};
