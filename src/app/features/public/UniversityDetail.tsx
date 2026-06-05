import { useParams, Link } from 'react-router';
import { MapPin, Calendar, Users, Star, ArrowRight, Building2, BookOpen, GraduationCap } from 'lucide-react';
import { universities } from '../../shared/mock/universities';
import { courses } from '../../shared/mock/courses';
import { Button } from '../../design-system/Button';
import { Badge } from '../../design-system/Badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../design-system/Tabs';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { CourseCard } from '../../components/CourseCard';

export function UniversityDetail() {
  const { slug } = useParams();
  const u = universities.find(x => x.slug === slug);
  if (!u) return <div className="max-w-[1280px] mx-auto px-5 py-20">Universidade não encontrada. <Link className="text-[var(--ca-primary)]" to="/universidades">Voltar</Link></div>;
  const uniCourses = courses.filter(c => c.universityIds.includes(u.id));

  return (
    <div>
      <div className="relative h-[320px] lg:h-[420px] overflow-hidden">
        <ImageWithFallback src={u.cover} alt={u.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ca-ink)] via-[var(--ca-ink)]/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-8 py-8 text-white">
            <div className="flex items-center gap-2 mb-4">
              <Badge tone={u.type === 'Pública' ? 'gold' : 'red'}>{u.type}</Badge>
              <Badge tone="ink">{u.acronym}</Badge>
            </div>
            <h1 className="font-display font-bold tracking-[-0.025em] text-[clamp(28px,4vw,48px)] text-white leading-[1.05] max-w-3xl">{u.name}</h1>
            <div className="mt-4 flex items-center gap-5 text-[13px] text-white/80 flex-wrap">
              <span className="inline-flex items-center gap-1.5"><MapPin size={14} />{u.city}, {u.province}</span>
              <span className="inline-flex items-center gap-1.5"><Calendar size={14} />Fundada em {u.founded}</span>
              <span className="inline-flex items-center gap-1.5"><Star size={14} className="fill-[var(--ca-gold)] text-[var(--ca-gold)]" />{u.rating.toFixed(1)} de avaliação</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 lg:px-8 py-10 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8">
          <Tabs defaultValue="sobre">
            <TabsList>
              <TabsTrigger value="sobre">Sobre</TabsTrigger>
              <TabsTrigger value="cursos">Cursos ({uniCourses.length})</TabsTrigger>
              <TabsTrigger value="campus">Campus</TabsTrigger>
              <TabsTrigger value="candidatura">Candidatura</TabsTrigger>
            </TabsList>
            <TabsContent value="sobre" className="pt-8">
              <h2 className="font-display font-semibold text-[20px] tracking-tight">Identidade da instituição</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--ca-gray-700)]">{u.about}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--ca-gray-700)]">
                A {u.short} mantém parcerias activas com instituições nacionais e internacionais, com programas
                de mobilidade, investigação aplicada e formação profissional contínua. O campus principal
                situa-se em {u.city} e acolhe {u.students.toLocaleString('pt-PT')} estudantes em {u.faculties} faculdades.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  ['Missão', 'Formar quadros qualificados para o desenvolvimento sustentável de Angola.'],
                  ['Visão',  'Ser referência regional em ensino, investigação e extensão universitária.'],
                  ['Valores', 'Excelência, identidade nacional, abertura ao mundo, ética e mérito.'],
                  ['Acreditação', 'Reconhecida pelo Ministério do Ensino Superior, Ciência e Inovação.'],
                ].map(([t, d]) => (
                  <div key={t} className="border-l-2 border-[var(--ca-gold)] pl-4 py-1">
                    <div className="text-[11px] tracking-[0.16em] uppercase text-[var(--ca-gray-500)]">{t}</div>
                    <div className="mt-1.5 text-[14px] text-[var(--ca-gray-700)] leading-relaxed">{d}</div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="cursos" className="pt-8">
              <div className="grid sm:grid-cols-2 gap-5">
                {uniCourses.map(c => <CourseCard key={c.id} c={c} />)}
              </div>
            </TabsContent>
            <TabsContent value="campus" className="pt-8">
              <div className="grid sm:grid-cols-2 gap-4">
                {[u.cover, 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=800&q=80'].map((src, i) => (
                  <div key={i} className="aspect-[4/3] rounded-[12px] overflow-hidden bg-[var(--ca-gray-100)]">
                    <ImageWithFallback src={src} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="candidatura" className="pt-8">
              <div className="border border-[var(--ca-gray-200)] rounded-[14px] p-8 bg-white">
                <h3 className="font-display font-semibold text-[20px]">Como candidatar-se à {u.short}</h3>
                <ol className="mt-6 space-y-5">
                  {['Crie conta no Campus Angola', 'Seleccione esta universidade no formulário de candidatura', 'Submeta os documentos exigidos', 'Acompanhe o resultado em tempo real'].map((step, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className="size-7 rounded-full bg-[var(--ca-primary)] text-white inline-flex items-center justify-center text-[12px] font-semibold shrink-0">{i+1}</span>
                      <div className="text-[14px] text-[var(--ca-gray-700)] pt-0.5">{step}</div>
                    </li>
                  ))}
                </ol>
                <Link to="/candidatura"><Button variant="primary" size="lg" className="mt-8" rightIcon={<ArrowRight size={16} />}>Iniciar candidatura</Button></Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <aside className="lg:col-span-4 space-y-4">
          <div className="bg-white border border-[var(--ca-gray-200)] rounded-[14px] p-6">
            <h3 className="font-display font-semibold text-[16px]">Em números</h3>
            <div className="mt-5 grid grid-cols-3 gap-3">
              <Stat icon={<Users size={14} />} label="Alunos" value={u.students.toLocaleString('pt-PT')} />
              <Stat icon={<Building2 size={14} />} label="Faculdades" value={String(u.faculties)} />
              <Stat icon={<BookOpen size={14} />} label="Cursos" value={String(u.courses)} />
            </div>
          </div>
          <div className="bg-[var(--ca-ink)] text-white rounded-[14px] p-6">
            <GraduationCap size={20} className="text-[var(--ca-gold)]" />
            <h3 className="font-display font-semibold text-[18px] mt-4 leading-snug">Pronto para se candidatar?</h3>
            <p className="text-[13px] text-white/70 mt-2 leading-relaxed">Candidaturas oficiais 2026/27 abertas até 30 de Julho.</p>
            <Link to="/candidatura"><Button variant="gold" size="md" fullWidth className="mt-5">Iniciar candidatura</Button></Link>
          </div>
          <div className="bg-white border border-[var(--ca-gray-200)] rounded-[14px] p-6">
            <h3 className="font-display font-semibold text-[16px]">Contacto institucional</h3>
            <ul className="mt-4 space-y-3 text-[13px] text-[var(--ca-gray-700)]">
              <li><span className="text-[var(--ca-gray-500)]">Endereço · </span>Campus principal, {u.city}, {u.province}</li>
              <li><span className="text-[var(--ca-gray-500)]">Telefone · </span>+244 222 000 000</li>
              <li><span className="text-[var(--ca-gray-500)]">Email · </span>info@{u.slug.split('-')[0]}.ao</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center size-9 rounded-md bg-[var(--ca-gray-100)] text-[var(--ca-gray-600)]">{icon}</div>
      <div className="font-display font-bold text-[18px] mt-2 leading-none">{value}</div>
      <div className="text-[10px] tracking-[0.14em] uppercase text-[var(--ca-gray-500)] mt-1">{label}</div>
    </div>
  );
}
