export type Course = {
  id: string;
  slug: string;
  name: string;
  area: 'Engenharias' | 'Saúde' | 'Direito' | 'Ciências Sociais' | 'Economia' | 'Educação' | 'Artes';
  duration: string;
  modality: 'Presencial' | 'Híbrido' | 'À distância';
  universityIds: string[];
  vacancies: number;
  popularity: number;
  about: string;
  cover: string;
};

export const areas = ['Todas', 'Engenharias', 'Saúde', 'Direito', 'Ciências Sociais', 'Economia', 'Educação', 'Artes'] as const;

export const courses: Course[] = [
  { id: 'c1', slug: 'engenharia-informatica', name: 'Engenharia Informática', area: 'Engenharias', duration: '5 anos', modality: 'Presencial', universityIds: ['uan','isptec','ucan'], vacancies: 240, popularity: 98, about: 'Formação em desenvolvimento de software, redes, IA e sistemas de informação.', cover: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80' },
  { id: 'c2', slug: 'medicina', name: 'Medicina', area: 'Saúde', duration: '6 anos', modality: 'Presencial', universityIds: ['uan','ukb','umn'], vacancies: 180, popularity: 96, about: 'Curso de medicina geral com prática clínica em hospitais nacionais.', cover: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80' },
  { id: 'c3', slug: 'direito', name: 'Direito', area: 'Direito', duration: '5 anos', modality: 'Presencial', universityIds: ['uan','ucan','ukb'], vacancies: 320, popularity: 92, about: 'Formação jurídica completa com especialização em direito angolano.', cover: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=900&q=80' },
  { id: 'c4', slug: 'arquitetura', name: 'Arquitectura e Urbanismo', area: 'Engenharias', duration: '5 anos', modality: 'Presencial', universityIds: ['uan','isptec'], vacancies: 120, popularity: 88, about: 'Concepção arquitectónica, planeamento urbano e património angolano.', cover: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80' },
  { id: 'c5', slug: 'gestao', name: 'Gestão de Empresas', area: 'Economia', duration: '4 anos', modality: 'Híbrido', universityIds: ['ucan','isptec','ukb'], vacancies: 380, popularity: 90, about: 'Liderança, finanças e estratégia para o tecido empresarial angolano.', cover: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80' },
  { id: 'c6', slug: 'enfermagem', name: 'Enfermagem', area: 'Saúde', duration: '4 anos', modality: 'Presencial', universityIds: ['umn','ukb','ulan'], vacancies: 260, popularity: 85, about: 'Cuidados de enfermagem, saúde pública e prática hospitalar.', cover: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80' },
  { id: 'c7', slug: 'engenharia-civil', name: 'Engenharia Civil', area: 'Engenharias', duration: '5 anos', modality: 'Presencial', universityIds: ['uan','isptec','umn'], vacancies: 200, popularity: 87, about: 'Projecto e construção de infraestruturas para o desenvolvimento nacional.', cover: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80' },
  { id: 'c8', slug: 'economia', name: 'Economia', area: 'Economia', duration: '4 anos', modality: 'Presencial', universityIds: ['uan','ucan'], vacancies: 220, popularity: 84, about: 'Análise económica, política monetária e mercados em África.', cover: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80' },
];
