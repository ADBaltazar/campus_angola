import { useParams, Link } from 'react-router';
import { Clock, Users, ArrowRight, Check } from 'lucide-react';
import { courses } from '../../shared/mock/courses';
import { universities } from '../../shared/mock/universities';
import { Button } from '../../design-system/Button';
import { Badge } from '../../design-system/Badge';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function CourseDetail() {
  const { slug } = useParams();
  const c = courses.find(x => x.slug === slug);
  if (!c) return <div className="p-20">Curso não encontrado.</div>;
  const offered = universities.filter(u => c.universityIds.includes(u.id));

  return (
    <div className="max-w-[1280px] mx-auto px-5 lg:px-8 py-12 lg:py-16">
      <Link to="/cursos" className="text-[12px] text-[var(--ca-gray-500)] hover:text-[var(--ca-ink)]">← Voltar ao catálogo</Link>
      <div className="mt-6 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <Badge tone="red">{c.area}</Badge>
          <h1 className="mt-4 font-display font-bold tracking-[-0.025em] text-[clamp(32px,4.5vw,48px)] leading-[1.05]">{c.name}</h1>
          <p className="mt-5 text-[16px] leading-relaxed text-[var(--ca-gray-700)] max-w-2xl">{c.about}</p>
          <div className="mt-6 flex items-center gap-5 flex-wrap">
            <span className="inline-flex items-center gap-2 text-[13px] text-[var(--ca-gray-700)]"><Clock size={14} />{c.duration}</span>
            <span className="inline-flex items-center gap-2 text-[13px] text-[var(--ca-gray-700)]"><Users size={14} />{c.vacancies} vagas</span>
            <Badge tone="gold">{c.modality}</Badge>
          </div>

          <h2 className="font-display font-semibold text-[20px] mt-12">Plano curricular típico</h2>
          <div className="mt-5 space-y-2">
            {[
              ['1.º Ano', ['Introdução à área', 'Análise Matemática I', 'Comunicação Académica', 'Inglês Técnico']],
              ['2.º Ano', ['Métodos Quantitativos', 'Fundamentos Específicos', 'Investigação Aplicada I']],
              ['3.º Ano', ['Especialização I', 'Projecto Integrador', 'Estágio Curricular I']],
              ['4.º Ano', ['Especialização II', 'Estágio Profissional', 'Tese de Licenciatura']],
            ].map(([year, items]) => (
              <details key={year as string} className="bg-white border border-[var(--ca-gray-200)] rounded-[10px] open:shadow-sm">
                <summary className="px-5 h-14 flex items-center justify-between cursor-pointer list-none">
                  <span className="font-display font-semibold text-[15px]">{year as string}</span>
                  <span className="text-[12px] text-[var(--ca-gray-500)]">{(items as string[]).length} cadeiras</span>
                </summary>
                <ul className="px-5 pb-5 space-y-2">
                  {(items as string[]).map(it => (
                    <li key={it} className="flex items-center gap-2 text-[13px] text-[var(--ca-gray-700)]"><Check size={14} className="text-[var(--ca-success)]" />{it}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
        <aside className="lg:col-span-5 space-y-4">
          <div className="aspect-[4/3] rounded-[14px] overflow-hidden">
            <ImageWithFallback src={c.cover} alt={c.name} className="w-full h-full object-cover" />
          </div>
          <div className="bg-white border border-[var(--ca-gray-200)] rounded-[14px] p-6">
            <h3 className="font-display font-semibold text-[16px]">Universidades que oferecem</h3>
            <div className="mt-4 space-y-2">
              {offered.map(u => (
                <Link key={u.id} to={`/universidades/${u.slug}`} className="flex items-center gap-3 p-3 rounded-md hover:bg-[var(--ca-gray-100)]">
                  <span className="size-9 rounded-md bg-[var(--ca-ink)] text-[var(--ca-gold)] inline-flex items-center justify-center font-display font-bold text-[12px]">{u.acronym}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] font-medium truncate">{u.short}</div>
                    <div className="text-[11px] text-[var(--ca-gray-500)]">{u.city}, {u.province}</div>
                  </div>
                  <ArrowRight size={14} className="text-[var(--ca-gray-400)]" />
                </Link>
              ))}
            </div>
          </div>
          <Link to="/candidatura"><Button variant="primary" size="lg" fullWidth rightIcon={<ArrowRight size={16} />}>Candidatar-me a este curso</Button></Link>
        </aside>
      </div>
    </div>
  );
}
