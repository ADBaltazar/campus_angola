import { useState, useMemo } from 'react';
import { Search, Filter, Download } from 'lucide-react';
import { adminStudents } from '../../shared/mock/admin';
import { Badge } from '../../design-system/Badge';
import { Avatar } from '../../design-system/Avatar';
import { Button } from '../../design-system/Button';

export function AdminAlunos() {
  const [q, setQ] = useState('');
  const list = useMemo(() => adminStudents.filter(s =>
    !q || (s.name + s.numero + s.course).toLowerCase().includes(q.toLowerCase())
  ), [q]);

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <span className="text-eyebrow">Gestão</span>
          <h1 className="font-display font-bold tracking-[-0.02em] text-[clamp(26px,3vw,36px)] mt-2 leading-tight">Alunos</h1>
          <p className="mt-2 text-[14px] text-[var(--ca-gray-600)]">{adminStudents.length} alunos matriculados</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" leftIcon={<Filter size={14} />}>Filtros</Button>
          <Button variant="outline" leftIcon={<Download size={14} />}>Exportar</Button>
        </div>
      </div>

      <div className="bg-white border border-[var(--ca-gray-200)] rounded-[14px] overflow-hidden">
        <div className="px-6 py-4 border-b border-[var(--ca-gray-200)]">
          <div className="flex items-center gap-2 h-10 px-3 bg-[var(--ca-paper-2)] border border-[var(--ca-gray-200)] rounded-[10px] max-w-md">
            <Search size={15} className="text-[var(--ca-gray-400)]" />
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="Procurar por nome, número ou curso…" className="flex-1 bg-transparent outline-none text-[13px]" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead className="bg-[var(--ca-paper-2)] text-[10px] uppercase tracking-[0.14em] text-[var(--ca-gray-500)]">
              <tr>
                <th className="text-left px-6 py-3 font-medium">Aluno</th>
                <th className="text-left px-3 py-3 font-medium">Nº</th>
                <th className="text-left px-3 py-3 font-medium">Curso</th>
                <th className="text-left px-3 py-3 font-medium">Ano</th>
                <th className="text-left px-3 py-3 font-medium">Província</th>
                <th className="text-left px-3 py-3 font-medium">Média</th>
                <th className="text-right px-6 py-3 font-medium">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--ca-gray-200)]">
              {list.map(s => (
                <tr key={s.id} className="hover:bg-[var(--ca-paper-2)] cursor-pointer">
                  <td className="px-6 py-3.5">
                    <div className="flex items-center gap-3">
                      <Avatar name={s.name} size={32} />
                      <span className="font-medium">{s.name}</span>
                    </div>
                  </td>
                  <td className="px-3 py-3.5 font-mono text-[12px] text-[var(--ca-gray-600)]">{s.numero}</td>
                  <td className="px-3 py-3.5">{s.course}</td>
                  <td className="px-3 py-3.5 text-[var(--ca-gray-600)]">{s.year}</td>
                  <td className="px-3 py-3.5 text-[var(--ca-gray-600)]">{s.province}</td>
                  <td className="px-3 py-3.5 font-display font-semibold">{s.media.toFixed(1)}</td>
                  <td className="px-6 py-3.5 text-right">
                    <Badge tone={s.status === 'Activo' ? 'success' : s.status === 'Em risco' ? 'red' : 'gray'} dot>{s.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
