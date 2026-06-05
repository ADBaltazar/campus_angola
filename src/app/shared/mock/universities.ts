export type University = {
  id: string;
  slug: string;
  name: string;
  short: string;
  acronym: string;
  type: 'Pública' | 'Privada';
  province: string;
  city: string;
  founded: number;
  students: number;
  faculties: number;
  courses: number;
  rating: number;
  cover: string;
  about: string;
  highlights: string[];
};

export const universities: University[] = [
  {
    id: 'uan',
    slug: 'universidade-agostinho-neto',
    name: 'Universidade Agostinho Neto',
    short: 'Agostinho Neto',
    acronym: 'UAN',
    type: 'Pública',
    province: 'Luanda',
    city: 'Luanda',
    founded: 1962,
    students: 42180,
    faculties: 11,
    courses: 64,
    rating: 4.6,
    cover: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    about: 'A maior e mais antiga instituição pública de ensino superior em Angola, referência nacional em ciências, engenharia e humanidades.',
    highlights: ['11 faculdades', 'Campus Camama', 'Investigação activa'],
  },
  {
    id: 'ucan',
    slug: 'universidade-catolica-de-angola',
    name: 'Universidade Católica de Angola',
    short: 'Católica',
    acronym: 'UCAN',
    type: 'Privada',
    province: 'Luanda',
    city: 'Luanda',
    founded: 1997,
    students: 9450,
    faculties: 6,
    courses: 28,
    rating: 4.7,
    cover: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=1200&q=80',
    about: 'Universidade privada de prestígio com forte tradição em economia, direito e ciências sociais.',
    highlights: ['CEIC', 'Direito', 'Economia'],
  },
  {
    id: 'isptec',
    slug: 'isptec',
    name: 'Instituto Superior Politécnico de Tecnologias e Ciências',
    short: 'ISPTEC',
    acronym: 'ISPTEC',
    type: 'Privada',
    province: 'Luanda',
    city: 'Luanda',
    founded: 2012,
    students: 5200,
    faculties: 4,
    courses: 18,
    rating: 4.5,
    cover: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    about: 'Politécnico orientado para tecnologia, engenharia e indústria, com fortes ligações ao sector petrolífero.',
    highlights: ['Engenharia', 'Petróleo & Gás', 'TIC'],
  },
  {
    id: 'umn',
    slug: 'universidade-mandume-ya-ndemufayo',
    name: 'Universidade Mandume Ya Ndemufayo',
    short: 'Mandume',
    acronym: 'UMN',
    type: 'Pública',
    province: 'Huíla',
    city: 'Lubango',
    founded: 2009,
    students: 14300,
    faculties: 7,
    courses: 32,
    rating: 4.3,
    cover: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80',
    about: 'Universidade pública da região sul, com forte presença nas províncias da Huíla, Cunene, Namibe e Cuando Cubango.',
    highlights: ['Sul de Angola', 'Agronomia', 'Educação'],
  },
  {
    id: 'ulan',
    slug: 'universidade-lueji-ankonde',
    name: "Universidade Lueji A'Nkonde",
    short: "Lueji A'Nkonde",
    acronym: 'ULAN',
    type: 'Pública',
    province: 'Lunda Norte',
    city: 'Dundo',
    founded: 2009,
    students: 7800,
    faculties: 5,
    courses: 22,
    rating: 4.2,
    cover: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1200&q=80',
    about: 'Universidade da região leste, com vocação para mineralogia, agronomia e engenharias.',
    highlights: ['Lunda Norte', 'Mineralogia', 'Agronomia'],
  },
  {
    id: 'ukb',
    slug: 'universidade-katyavala-bwila',
    name: 'Universidade Katyavala Bwila',
    short: 'Katyavala Bwila',
    acronym: 'UKB',
    type: 'Pública',
    province: 'Benguela',
    city: 'Benguela',
    founded: 2009,
    students: 11240,
    faculties: 6,
    courses: 26,
    rating: 4.4,
    cover: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1200&q=80',
    about: 'Universidade pública de Benguela, com programas em medicina, engenharia e ciências do mar.',
    highlights: ['Medicina', 'Engenharia', 'Ciências do Mar'],
  },
];

export const provinces = ['Todas','Luanda','Benguela','Huambo','Huíla','Cabinda','Namibe','Cuanza Sul','Lunda Norte','Lunda Sul','Cuando Cubango','Cunene','Bié','Uíge','Zaire','Malanje','Moxico','Bengo','Cuanza Norte'];
