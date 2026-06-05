import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Search, MapPin, ArrowRight, GraduationCap, Building2, BookOpen, Users, Quote, Sparkles, ChevronRight } from 'lucide-react';
import { Button } from '../../design-system/Button';
import { Badge } from '../../design-system/Badge';
import { SectionHeading } from '../../design-system/SectionHeading';
import { UniversityCard } from '../../components/UniversityCard';
import { CourseCard } from '../../components/CourseCard';
import { universities } from '../../shared/mock/universities';
import { courses, areas } from '../../shared/mock/courses';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { useState } from 'react';

export function Landing() {
  return (
    <>
      <Hero />
      <StatStrip />
      <FeaturedUniversities />
      <PopularCourses />
      <ApplicationCTA />
      <Testimonials />
      <NewsBand />
    </>
  );
}

function Hero() {
  return (
    <section>
      {/* Cover — mesmo padrão da página individual de universidade */}
      <div className="relative min-h-[560px] lg:min-h-[640px] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.12, x: '-1.5%', y: '1.5%' }}
          animate={{ scale: 1, x: '0%', y: '0%' }}
          transition={{ duration: 14, ease: [0.16, 1, 0.3, 1] }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=85"
            alt="Estudantes universitários angolanos no campus"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ca-ink)] via-[var(--ca-ink)]/65 to-[var(--ca-ink)]/30" />
        <div className="relative">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-8 pt-24 lg:pt-32 pb-14 lg:pb-16 text-white">
            <div className="flex items-center gap-2 mb-5">
              <Badge tone="gold">Plataforma Nacional</Badge>
              <Badge tone="ink">2026 / 27</Badge>
            </div>
            <h1 className="font-display font-bold tracking-[-0.025em] text-[clamp(32px,5vw,60px)] text-white leading-[1.04] max-w-3xl">
              O ensino superior de Angola, num só lugar.
            </h1>
            <div className="mt-7 max-w-3xl">
              <SearchBar />
            </div>
            <p className="mt-6 text-[15px] lg:text-[16px] text-white/80 leading-relaxed max-w-2xl">
              Descubra universidades, escolha o seu curso e candidate-se em minutos. A porta digital
              para a vida académica em todas as 18 províncias.
            </p>
            <div className="mt-7 flex items-center gap-5 text-[13px] text-white/70 flex-wrap">
              <span className="inline-flex items-center gap-1.5"><Building2 size={14} />47 universidades</span>
              <span className="inline-flex items-center gap-1.5"><BookOpen size={14} />380+ cursos</span>
              <span className="inline-flex items-center gap-1.5"><Users size={14} />210 mil estudantes</span>
              <span className="inline-flex items-center gap-1.5"><Sparkles size={14} className="text-[var(--ca-gold)]" />Candidaturas oficiais</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SearchBar() {
  const [q, setQ] = useState('');
  const [area, setArea] = useState<string>('Todas');
  return (
    <div className="mt-8 bg-white border border-[var(--ca-gray-200)] rounded-[14px] p-2 shadow-[0_4px_20px_rgba(14,14,16,0.04)] flex items-stretch gap-1 flex-col sm:flex-row">
      <div className="flex items-center gap-2 px-3 flex-1 min-w-0">
        <Search size={16} className="text-[var(--ca-gray-400)] shrink-0" />
        <input value={q} onChange={e => setQ(e.target.value)}
          placeholder="Procurar curso ou universidade…"
          className="flex-1 h-12 bg-transparent outline-none text-[14px] text-[var(--ca-ink)] placeholder:text-[var(--ca-gray-500)] caret-[var(--ca-primary)]" />
      </div>
      <div className="hidden sm:block w-px bg-[var(--ca-gray-200)]" />
      <div className="flex items-center gap-2 px-3">
        <MapPin size={16} className="text-[var(--ca-gray-400)]" />
        <select value={area} onChange={e => setArea(e.target.value)} className="h-12 bg-transparent outline-none text-[14px] text-[var(--ca-ink)]">
          {areas.map(a => <option key={a}>{a}</option>)}
        </select>
      </div>
      <Link to={`/cursos?q=${encodeURIComponent(q)}&area=${encodeURIComponent(area)}`}>
        <Button size="lg" className="rounded-[10px]" rightIcon={<ArrowRight size={16} />}>Procurar</Button>
      </Link>
    </div>
  );
}

function StatStrip() {
  const stats = [
    { icon: Building2, label: 'Universidades', value: '47', sub: 'Públicas e privadas' },
    { icon: BookOpen,  label: 'Cursos',         value: '380+', sub: '7 grandes áreas' },
    { icon: Users,     label: 'Alunos',         value: '210 mil', sub: 'Em todo o país' },
    { icon: GraduationCap, label: 'Candidaturas activas', value: '3 142', sub: 'Ano lectivo 2026/27' },
  ];
  return (
    <section className="bg-[var(--ca-ink)] text-white">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8 py-12 lg:py-14 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
        {stats.map(s => (
          <div key={s.label} className="flex items-start gap-4">
            <span className="size-11 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[var(--ca-gold)] shrink-0">
              <s.icon size={18} />
            </span>
            <div>
              <div className="text-[11px] tracking-[0.16em] uppercase text-white/50">{s.label}</div>
              <div className="font-display font-bold text-[28px] tracking-[-0.02em] mt-1 leading-none">{s.value}</div>
              <div className="text-[12px] text-white/60 mt-1.5">{s.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedUniversities() {
  return (
    <section className="max-w-[1280px] mx-auto px-5 lg:px-8 py-20 lg:py-28">
      <SectionHeading
        eyebrow="Universidades em destaque"
        title="Instituições que formam as próximas gerações angolanas."
        description="Selecção das principais universidades públicas e privadas, com perfis institucionais completos."
        action={<Link to="/universidades"><Button variant="ghost" size="md" rightIcon={<ChevronRight size={14} />}>Ver todas</Button></Link>}
      />
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {universities.map(u => <UniversityCard key={u.id} u={u} />)}
      </div>
    </section>
  );
}

function PopularCourses() {
  const [active, setActive] = useState<string>('Todas');
  const filtered = active === 'Todas' ? courses : courses.filter(c => c.area === active);
  return (
    <section className="bg-[var(--ca-paper-2)] border-y border-[var(--ca-gray-200)]">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <SectionHeading
          eyebrow="Cursos populares"
          title="Áreas mais procuradas pelos estudantes angolanos."
          description="Explore curriculums, modalidades e instituições que oferecem cada curso."
          action={<Link to="/cursos"><Button variant="ghost" size="md" rightIcon={<ChevronRight size={14} />}>Catálogo completo</Button></Link>}
        />
        <div className="mt-8 flex items-center gap-2 overflow-x-auto no-scrollbar -mx-5 px-5 lg:mx-0 lg:px-0">
          {areas.map(a => (
            <button key={a} onClick={() => setActive(a)}
              className={`shrink-0 px-3.5 h-9 rounded-full text-[12px] font-medium tracking-tight border transition-colors ${
                active === a
                  ? 'bg-[var(--ca-ink)] text-white border-[var(--ca-ink)]'
                  : 'bg-white text-[var(--ca-gray-600)] border-[var(--ca-gray-200)] hover:border-[var(--ca-ink)] hover:text-[var(--ca-ink)]'
              }`}>{a}</button>
          ))}
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map(c => <CourseCard key={c.id} c={c} />)}
        </div>
      </div>
    </section>
  );
}

function ApplicationCTA() {
  return (
    <section className="max-w-[1280px] mx-auto px-5 lg:px-8 py-20 lg:py-24">
      <div className="relative overflow-hidden rounded-[20px] bg-[var(--ca-primary)] text-white p-8 lg:p-14">
        <div className="absolute -right-20 -top-20 size-80 rounded-full bg-white/5 blur-2xl" />
        <div className="absolute right-10 bottom-0 hidden lg:block opacity-30">
          <div className="size-64 rounded-full border border-white/20" />
        </div>
        <div className="relative grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[var(--ca-gold)]">Candidaturas 2026/27</span>
            <h2 className="font-display font-bold tracking-[-0.02em] text-[clamp(28px,4vw,42px)] mt-3 leading-[1.05] text-white">
              Candidate-se uma vez. Concorra a múltiplas universidades.
            </h2>
            <p className="mt-4 text-white/80 leading-relaxed max-w-lg text-[15px]">
              Um único processo, totalmente digital, com acompanhamento em tempo real e validação oficial.
            </p>
            <div className="mt-7 flex items-center gap-3 flex-wrap">
              <Link to="/candidatura"><Button variant="gold" size="lg" rightIcon={<ArrowRight size={16} />}>Iniciar candidatura</Button></Link>
              <Link to="/universidades"><Button variant="ghost" size="lg" className="text-white hover:bg-white/10">Explorar universidades</Button></Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              ['1', 'Crie a sua conta', 'Em menos de 2 minutos'],
              ['2', 'Escolha cursos',    'Até 5 opções'],
              ['3', 'Submeta documentos', 'Validação automática'],
              ['4', 'Acompanhe',          'Notificações em tempo real'],
            ].map(([n, t, d]) => (
              <div key={n} className="bg-white/10 border border-white/15 rounded-[12px] p-4 backdrop-blur">
                <span className="font-display font-bold text-[var(--ca-gold)] text-[28px] leading-none">{n}</span>
                <div className="font-display font-semibold mt-2 text-white text-[14px]">{t}</div>
                <div className="text-[12px] text-white/65 mt-1">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { name: 'Domingos Capemba', role: '3.º Ano · Eng. Civil · UAN', quote: 'Acompanhei toda a minha candidatura pelo telemóvel. Foi a primeira vez que senti que o sistema funciona para nós.' },
    { name: 'Aissa Bumba',      role: '4.º Ano · Direito · UCAN',     quote: 'Comparei várias universidades e cursos no mesmo lugar. Em Luanda nunca tinha sido tão simples.' },
    { name: 'Mateus Kalunga',   role: '3.º Ano · Medicina · UKB',     quote: 'O acompanhamento das notas e do horário tornou-se parte da minha rotina. Recomendo a qualquer estudante.' },
  ];
  return (
    <section className="max-w-[1280px] mx-auto px-5 lg:px-8 py-20 lg:py-24">
      <SectionHeading
        eyebrow="Vozes de quem usa"
        title="A experiência dos estudantes angolanos."
        align="center"
      />
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {items.map(t => (
          <article key={t.name} className="bg-white border border-[var(--ca-gray-200)] rounded-[14px] p-6 flex flex-col gap-5">
            <Quote size={22} className="text-[var(--ca-gold)]" />
            <p className="text-[15px] leading-relaxed text-[var(--ca-gray-700)]">"{t.quote}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-[var(--ca-gray-200)] mt-auto">
              <span className="size-10 rounded-full bg-[var(--ca-ink)] text-white inline-flex items-center justify-center font-display font-medium text-[14px]">
                {t.name.split(' ').map(p => p[0]).slice(0,2).join('')}
              </span>
              <div>
                <div className="text-[13px] font-medium">{t.name}</div>
                <div className="text-[11px] text-[var(--ca-gray-500)] tracking-wide">{t.role}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function NewsBand() {
  const news = [
    { tag: 'Política', title: 'Ministério anuncia novo modelo unificado de candidaturas', date: '01 Jun 2026' },
    { tag: 'Bolsas',   title: 'Abertas 1 200 bolsas internas para o ano 2026/27',         date: '28 Mai 2026' },
    { tag: 'UAN',      title: 'Faculdade de Engenharia inaugura novo Laboratório de IA',  date: '24 Mai 2026' },
  ];
  return (
    <section className="max-w-[1280px] mx-auto px-5 lg:px-8 py-12 lg:py-16">
      <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
        <div>
          <span className="text-eyebrow">Notícias institucionais</span>
          <h2 className="font-display font-bold tracking-[-0.02em] text-[28px] mt-2">O que está a acontecer no ensino superior.</h2>
        </div>
        <Button variant="outline" size="sm" rightIcon={<ArrowRight size={14} />}>Sala de imprensa</Button>
      </div>
      <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--ca-gray-200)] border-y border-[var(--ca-gray-200)]">
        {news.map(n => (
          <article key={n.title} className="p-6 group cursor-pointer hover:bg-white transition-colors">
            <div className="flex items-center justify-between mb-4">
              <Badge tone="red">{n.tag}</Badge>
              <span className="text-[11px] text-[var(--ca-gray-500)] tracking-wide">{n.date}</span>
            </div>
            <h3 className="font-display font-semibold text-[17px] leading-snug tracking-tight group-hover:text-[var(--ca-primary)] transition-colors">{n.title}</h3>
            <span className="inline-flex items-center gap-1 text-[12px] text-[var(--ca-gray-600)] mt-4">Ler mais <ArrowRight size={12} /></span>
          </article>
        ))}
      </div>
    </section>
  );
}
