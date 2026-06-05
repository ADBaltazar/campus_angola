import { grades, studentStats } from '../../shared/mock/student';
import { Badge } from '../../design-system/Badge';
import { StatCard } from '../../design-system/StatCard';
import { Award, TrendingUp, BookOpen } from 'lucide-react';

export function StudentNotas() {
  const grouped = grades.reduce<Record<string, typeof grades>>((acc, g) => {
    (acc[g.period] ||= []).push(g);
    return acc;
  }, {});

  return (
    <div className="space-y-8">
      <div>
        <span className="text-eyebrow">Académico</span>
        <h1 className="font-display font-bold tracking-[-0.02em] text-[clamp(26px,3vw,36px)] mt-2 leading-tight">As suas notas</h1>
        <p className="mt-2 text-[14px] text-[var(--ca-gray-600)]">Histórico de avaliações por semestre. Escala 0–20.</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard label="Média geral" value={studentStats.media.toFixed(1)} suffix="/ 20" accent="red" icon={<TrendingUp size={16} />} />
        <StatCard label="Aprovação" value={`${studentStats.aprovacao}%`} accent="ink" icon={<Award size={16} />} />
        <StatCard label="Cadeiras concluídas" value={grades.length} accent="gold" icon={<BookOpen size={16} />} />
      </div>

      <div className="space-y-6">
        {Object.entries(grouped).map(([period, items]) => (
          <section key={period} className="bg-white border border-[var(--ca-gray-200)] rounded-[14px] overflow-hidden">
            <header className="px-6 py-4 border-b border-[var(--ca-gray-200)] flex items-center justify-between">
              <h2 className="font-display font-semibold text-[15px]">{period}</h2>
              <span className="text-[12px] text-[var(--ca-gray-500)]">Média: {(items.reduce((s, i) => s + i.grade, 0) / items.length).toFixed(1)}</span>
            </header>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead className="bg-[var(--ca-paper-2)] text-[11px] uppercase tracking-wider text-[var(--ca-gray-500)]">
                  <tr>
                    <th className="text-left px-6 py-3 font-medium">Código</th>
                    <th className="text-left px-3 py-3 font-medium">Disciplina</th>
                    <th className="text-left px-3 py-3 font-medium">Créditos</th>
                    <th className="text-left px-3 py-3 font-medium">Nota</th>
                    <th className="text-right px-6 py-3 font-medium">Estado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--ca-gray-200)]">
                  {items.map(g => (
                    <tr key={g.id} className="hover:bg-[var(--ca-paper-2)]">
                      <td className="px-6 py-3.5 font-mono text-[12px] text-[var(--ca-gray-600)]">{g.code}</td>
                      <td className="px-3 py-3.5 font-medium">{g.name}</td>
                      <td className="px-3 py-3.5">{g.credits}</td>
                      <td className="px-3 py-3.5">
                        <span className="font-display font-bold text-[16px] text-[var(--ca-ink)]">{g.grade}</span>
                        <span className="text-[11px] text-[var(--ca-gray-500)] ml-1">/20</span>
                      </td>
                      <td className="px-6 py-3.5 text-right">
                        <Badge tone={g.grade >= 14 ? 'success' : g.grade >= 10 ? 'gold' : 'red'} dot>{g.status}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
