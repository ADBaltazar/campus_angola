import { subjects } from '../../shared/mock/student';
import { Progress } from '../../design-system/Progress';
import { Badge } from '../../design-system/Badge';
import { ArrowRight } from 'lucide-react';

export function StudentDisciplinas() {
  return (
    <div className="space-y-8">
      <div>
        <span className="text-eyebrow">Académico</span>
        <h1 className="font-display font-bold tracking-[-0.02em] text-[clamp(26px,3vw,36px)] mt-2 leading-tight">Disciplinas</h1>
        <p className="mt-2 text-[14px] text-[var(--ca-gray-600)]">{subjects.length} disciplinas activas no semestre em curso</p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {subjects.map(s => (
          <article key={s.id} className="bg-white border border-[var(--ca-gray-200)] rounded-[14px] p-6 hover:shadow-[0_8px_24px_rgba(14,14,16,0.06)] transition-shadow">
            <div className="flex items-start justify-between gap-3">
              <Badge tone="red">{s.code}</Badge>
              <Badge tone="gray">{s.credits} créditos</Badge>
            </div>
            <h2 className="font-display font-semibold text-[18px] mt-4 tracking-tight leading-snug">{s.name}</h2>
            <p className="mt-1.5 text-[12px] text-[var(--ca-gray-500)]">{s.teacher}</p>
            <div className="mt-5">
              <div className="flex justify-between text-[11px] text-[var(--ca-gray-500)] mb-1.5">
                <span>Progresso do semestre</span>
                <span className="font-medium text-[var(--ca-ink)]">{s.progress}%</span>
              </div>
              <Progress value={s.progress} tone="gold" />
            </div>
            <button className="mt-5 inline-flex items-center gap-1 text-[12px] font-medium text-[var(--ca-primary)] hover:text-[var(--ca-primary-deep)]">
              Aceder à cadeira <ArrowRight size={12} />
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
