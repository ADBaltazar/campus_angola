import { schedule } from '../../shared/mock/student';
import { Badge } from '../../design-system/Badge';

const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

export function StudentHorario() {
  return (
    <div className="space-y-8">
      <div>
        <span className="text-eyebrow">Académico</span>
        <h1 className="font-display font-bold tracking-[-0.02em] text-[clamp(26px,3vw,36px)] mt-2 leading-tight">Horário semanal</h1>
        <p className="mt-2 text-[14px] text-[var(--ca-gray-600)]">Semana de 3 a 7 de Junho de 2026</p>
      </div>

      <div className="grid lg:grid-cols-5 gap-4">
        {days.map(day => {
          const items = schedule.filter(s => s.day === day);
          return (
            <section key={day} className="bg-white border border-[var(--ca-gray-200)] rounded-[14px]">
              <header className="px-4 py-3 border-b border-[var(--ca-gray-200)] flex items-center justify-between">
                <h2 className="font-display font-semibold text-[14px] tracking-tight">{day}</h2>
                <span className="text-[10px] tracking-[0.14em] uppercase text-[var(--ca-gray-500)]">{items.length} aulas</span>
              </header>
              <div className="p-3 space-y-2 min-h-32">
                {items.length === 0 && <div className="text-[12px] text-[var(--ca-gray-400)] text-center py-6">Sem aulas</div>}
                {items.map((s, i) => (
                  <div key={i} className={`p-3 rounded-[10px] border-l-[3px] ${s.live ? 'bg-[var(--ca-primary-soft)] border-[var(--ca-primary)]' : 'bg-[var(--ca-paper-2)] border-[var(--ca-gold)]'}`}>
                    <div className="text-[11px] font-medium text-[var(--ca-gray-600)] tabular-nums">{s.time}</div>
                    <div className="text-[13px] font-medium mt-1.5 leading-snug">{s.subject}</div>
                    <div className="text-[11px] text-[var(--ca-gray-500)] mt-1">{s.room}</div>
                    {s.live && <Badge tone="red" dot className="mt-2">Em curso</Badge>}
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
