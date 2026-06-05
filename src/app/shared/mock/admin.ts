export const adminStats = {
  alunos: 42180,
  candidaturas: 3142,
  aprovadas: 1860,
  pendentes: 982,
};

export const enrolmentsMonth = [
  { m: 'Jan', v: 1240 }, { m: 'Fev', v: 1480 }, { m: 'Mar', v: 1320 },
  { m: 'Abr', v: 1620 }, { m: 'Mai', v: 1780 }, { m: 'Jun', v: 2040 },
  { m: 'Jul', v: 1860 }, { m: 'Ago', v: 1530 }, { m: 'Set', v: 2380 },
  { m: 'Out', v: 2710 }, { m: 'Nov', v: 2240 }, { m: 'Dez', v: 1820 },
];

export const studentsByFaculty = [
  { faculty: 'Engenharia',   total: 9820 },
  { faculty: 'Medicina',     total: 4180 },
  { faculty: 'Direito',      total: 5240 },
  { faculty: 'Economia',     total: 6710 },
  { faculty: 'Letras',       total: 3540 },
  { faculty: 'Ciências',     total: 4280 },
];

export type AdminStudent = {
  id: string; numero: string; name: string; course: string; year: string;
  status: 'Activo' | 'Inactivo' | 'Em risco';
  media: number;
  province: string;
};

export const adminStudents: AdminStudent[] = [
  { id: 'a1', numero: '20240314', name: 'Nzinga Domingos',   course: 'Eng. Informática', year: '2.º Ano', status: 'Activo',   media: 15.4, province: 'Luanda' },
  { id: 'a2', numero: '20232210', name: 'Mateus Kalunga',     course: 'Medicina',          year: '3.º Ano', status: 'Activo',   media: 16.1, province: 'Benguela' },
  { id: 'a3', numero: '20211127', name: 'Aissa Bumba',         course: 'Direito',           year: '4.º Ano', status: 'Em risco', media: 11.2, province: 'Huíla' },
  { id: 'a4', numero: '20223345', name: 'Domingos Capemba',    course: 'Eng. Civil',        year: '3.º Ano', status: 'Activo',   media: 14.8, province: 'Luanda' },
  { id: 'a5', numero: '20245890', name: 'Esperança N. Tunga',  course: 'Arquitectura',      year: '1.º Ano', status: 'Activo',   media: 17.3, province: 'Luanda' },
  { id: 'a6', numero: '20191203', name: 'Kiala Fernando',      course: 'Economia',          year: '5.º Ano', status: 'Inactivo', media: 13.0, province: 'Cabinda' },
  { id: 'a7', numero: '20243412', name: 'Cláudia Sanguinete',  course: 'Enfermagem',        year: '2.º Ano', status: 'Activo',   media: 15.9, province: 'Huambo' },
  { id: 'a8', numero: '20226601', name: 'João Mateus Pedro',   course: 'Eng. Informática', year: '3.º Ano', status: 'Activo',   media: 14.4, province: 'Luanda' },
];

export type Application = {
  id: string; name: string; course: string; university: string;
  status: 'Pendente' | 'Em análise' | 'Decidida';
  decision?: 'Aprovada' | 'Rejeitada';
  submittedAt: string;
  score: number;
};

export const applications: Application[] = [
  { id: 'ap1', name: 'Tânia Salomão',     course: 'Eng. Informática', university: 'UAN',    status: 'Pendente',   submittedAt: '03 Jun', score: 17.2 },
  { id: 'ap2', name: 'Edmilson Cassule',  course: 'Medicina',          university: 'UKB',    status: 'Pendente',   submittedAt: '02 Jun', score: 18.1 },
  { id: 'ap3', name: 'Beatriz N. Capita', course: 'Direito',           university: 'UCAN',   status: 'Em análise', submittedAt: '01 Jun', score: 15.6 },
  { id: 'ap4', name: 'Iolanda Tchipango', course: 'Arquitectura',      university: 'UAN',    status: 'Em análise', submittedAt: '31 Mai', score: 16.4 },
  { id: 'ap5', name: 'Adérito M. Bunga',  course: 'Eng. Civil',        university: 'ISPTEC', status: 'Decidida',   decision: 'Aprovada', submittedAt: '28 Mai', score: 17.9 },
  { id: 'ap6', name: 'Helena Cazumba',    course: 'Economia',          university: 'UCAN',   status: 'Decidida',   decision: 'Rejeitada', submittedAt: '26 Mai', score: 11.8 },
];
