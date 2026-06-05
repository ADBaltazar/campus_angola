export const currentStudent = {
  id: 'st-001',
  name: 'Nzinga Domingos',
  numero: '20240314',
  course: 'Engenharia Informática',
  university: 'Universidade Agostinho Neto',
  faculty: 'Faculdade de Engenharia',
  semester: '4.º Semestre',
  year: '2025/2026',
  avatar: '',
};

export const studentStats = {
  media: 15.4,
  frequencia: 96,
  creditos: 84,
  totalCreditos: 240,
  aprovacao: 92,
};

export type Subject = {
  id: string; code: string; name: string; teacher: string;
  credits: number; progress: number; grade?: number; status: 'em curso' | 'aprovado' | 'pendente';
};

export const subjects: Subject[] = [
  { id: 's1', code: 'EI-401', name: 'Algoritmos Avançados',          teacher: 'Prof. João Mateus',   credits: 6, progress: 72, status: 'em curso' },
  { id: 's2', code: 'EI-402', name: 'Bases de Dados',                teacher: 'Prof.ª Aissa Pedro',   credits: 6, progress: 58, status: 'em curso' },
  { id: 's3', code: 'EI-403', name: 'Engenharia de Software',        teacher: 'Prof. Kiala Fernando', credits: 6, progress: 81, status: 'em curso' },
  { id: 's4', code: 'EI-404', name: 'Redes de Computadores',         teacher: 'Prof. Domingos Lopes', credits: 5, progress: 65, status: 'em curso' },
  { id: 's5', code: 'EI-405', name: 'Inteligência Artificial',       teacher: 'Prof.ª Esperança N.',  credits: 5, progress: 44, status: 'em curso' },
];

export const grades = [
  { id: 'g1', period: '1.º Sem 2024/25', code: 'EI-301', name: 'Estruturas de Dados',   grade: 16, credits: 6, status: 'Aprovado' },
  { id: 'g2', period: '1.º Sem 2024/25', code: 'EI-302', name: 'Sistemas Operativos',    grade: 14, credits: 6, status: 'Aprovado' },
  { id: 'g3', period: '1.º Sem 2024/25', code: 'EI-303', name: 'Análise Matemática II',  grade: 13, credits: 6, status: 'Aprovado' },
  { id: 'g4', period: '2.º Sem 2024/25', code: 'EI-311', name: 'Programação Web',         grade: 17, credits: 5, status: 'Aprovado' },
  { id: 'g5', period: '2.º Sem 2024/25', code: 'EI-312', name: 'Probabilidades',          grade: 12, credits: 5, status: 'Aprovado' },
  { id: 'g6', period: '2.º Sem 2024/25', code: 'EI-313', name: 'Arquitectura de Computadores', grade: 15, credits: 6, status: 'Aprovado' },
];

export const schedule = [
  { day: 'Segunda',  time: '08:00 — 10:00', subject: 'Algoritmos Avançados', room: 'Sala B-204', teacher: 'Prof. J. Mateus', live: false },
  { day: 'Segunda',  time: '10:30 — 12:30', subject: 'Bases de Dados',       room: 'Lab. Inf. 3', teacher: 'Prof.ª A. Pedro', live: true },
  { day: 'Terça',    time: '08:00 — 10:00', subject: 'Engenharia de Software', room: 'Sala B-110', teacher: 'Prof. K. Fernando', live: false },
  { day: 'Terça',    time: '14:00 — 16:00', subject: 'Redes de Computadores',  room: 'Lab. Redes', teacher: 'Prof. D. Lopes', live: false },
  { day: 'Quarta',   time: '10:30 — 12:30', subject: 'Inteligência Artificial', room: 'Sala C-301', teacher: "Prof.ª E. N.", live: false },
  { day: 'Quinta',   time: '08:00 — 10:00', subject: 'Algoritmos Avançados', room: 'Sala B-204', teacher: 'Prof. J. Mateus', live: false },
  { day: 'Sexta',    time: '14:00 — 17:00', subject: 'Projecto Integrado',     room: 'Lab. Inf. 1', teacher: 'Vários',         live: false },
];

export const upcomingEvents = [
  { id: 'e1', date: '08 Jun', title: 'Entrega — Trabalho de Bases de Dados', tag: 'Entrega', tone: 'warning' as const },
  { id: 'e2', date: '12 Jun', title: 'Frequência de Algoritmos Avançados',   tag: 'Avaliação', tone: 'danger' as const },
  { id: 'e3', date: '15 Jun', title: 'Workshop — IA Aplicada à Saúde',       tag: 'Evento', tone: 'info' as const },
  { id: 'e4', date: '20 Jun', title: 'Inscrição — 1.º Sem 2026/27',           tag: 'Académico', tone: 'success' as const },
];

export const documents = [
  { id: 'd1', name: 'Declaração de Matrícula 2025/26', type: 'PDF', size: '142 KB', date: '12 Out 2025' },
  { id: 'd2', name: 'Histórico Académico Provisório',  type: 'PDF', size: '298 KB', date: '03 Mar 2025' },
  { id: 'd3', name: 'Comprovativo de Pagamento — Mar', type: 'PDF', size: '88 KB',  date: '04 Mar 2025' },
  { id: 'd4', name: 'Plano Curricular — Eng. Informática', type: 'PDF', size: '512 KB', date: '01 Set 2024' },
];
