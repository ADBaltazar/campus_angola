import { applications } from '../../shared/mock/admin';
import { Avatar } from '../../design-system/Avatar';
import { Badge } from '../../design-system/Badge';

const columns: { key: 'Pendente' | 'Em análise' | 'Decidida'; tone: 'gold' | 'info' | 'success' }[] = [
  { key: 'Pendente',   tone: 'gold' },
  { key: 'Em análise', tone: 'info' },
  { key: 'Decidida',   tone: 'success' },
];

export function AdminCandidaturas() {
  return (
    <div className="space-y-8">
      <div>
        <span className="text-eyebrow">Gestão</span>
        <h1 className="font-display font-bold tracking-[-0.02em] text-[clamp(26px,3vw,36px)] mt-2 leading-tight">Candidaturas</h1>
        <p className="mt-2 text-[14px] text-[var(--ca-gray-600)]">{applications.length} candidaturas — fluxo de avaliação</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {columns.map(col => {
          const items = applications.filter(a => a.status === col.key);
          return (
            <section key={col.key} className="bg-[var(--ca-paper-2)] border border-[var(--ca-gray-200)] rounded-[14px] p-4">
              <header className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Badge tone={col.tone} dot>{col.key}</Badge>
                </div>
                <span className="text-[11px] text-[var(--ca-gray-500)]">{items.length}</span>
              </header>
              <div className="space-y-3">
                {items.map(a => (
                  <article key={a.id} className="bg-white border border-[var(--ca-gray-200)] rounded-[10px] p-4 hover:shadow-[0_4px_14px_rgba(14,14,16,0.06)] cursor-pointer transition-shadow">
                    <div className="flex items-center gap-3">
                      <Avatar name={a.name} size={32} />
                      <div className="flex-1 min-w-0">
                        <div className="text-[13px] font-medium truncate">{a.name}</div>
                        <div className="text-[11px] text-[var(--ca-gray-500)] truncate">{a.course} · {a.university}</div>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-[var(--ca-gray-200)] flex items-center justify-between">
                      <span className="text-[11px] text-[var(--ca-gray-500)]">Submetida {a.submittedAt}</span>
                      <span className="text-[12px] font-display font-semibold">Score {a.score.toFixed(1)}</span>
                    </div>
                    {a.decision && (
                      <Badge tone={a.decision === 'Aprovada' ? 'success' : 'red'} dot className="mt-3">{a.decision}</Badge>
                    )}
                  </article>
                ))}
                {items.length === 0 && <div className="text-[12px] text-[var(--ca-gray-400)] text-center py-6">Nenhuma candidatura</div>}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
