import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { courses, areas } from '../../shared/mock/courses';
import { CourseCard } from '../../components/CourseCard';

export function CoursesList() {
  const [q, setQ] = useState('');
  const [area, setArea] = useState<string>('Todas');
  const list = useMemo(() => courses.filter(c => {
    const mq = !q || c.name.toLowerCase().includes(q.toLowerCase());
    const ma = area === 'Todas' || c.area === area;
    return mq && ma;
  }), [q, area]);

  return (
    <div>
      <div className="border-b border-[var(--ca-gray-200)]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-8 py-12 lg:py-16">
          <span className="text-eyebrow">Catálogo de cursos</span>
          <h1 className="font-display font-bold tracking-[-0.025em] text-[clamp(32px,4.5vw,52px)] leading-[1.05] mt-3">Cursos do ensino superior</h1>
          <div className="mt-8 flex items-center gap-2 h-12 px-4 bg-white border border-[var(--ca-gray-300)] rounded-[10px] max-w-xl">
            <Search size={16} className="text-[var(--ca-gray-400)]" />
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="Procurar curso…" className="flex-1 bg-transparent outline-none text-[14px]" />
          </div>
          <div className="mt-6 flex items-center gap-2 overflow-x-auto no-scrollbar -mx-5 px-5 lg:mx-0 lg:px-0">
            {areas.map(a => (
              <button key={a} onClick={() => setArea(a)}
                className={`shrink-0 px-3.5 h-9 rounded-full text-[12px] font-medium tracking-tight border transition-colors ${area === a ? 'bg-[var(--ca-ink)] text-white border-[var(--ca-ink)]' : 'bg-white text-[var(--ca-gray-600)] border-[var(--ca-gray-200)]'}`}>{a}</button>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map(c => <CourseCard key={c.id} c={c} />)}
        </div>
        {list.length === 0 && <div className="text-center py-20 text-[var(--ca-gray-500)]">Nenhum curso encontrado.</div>}
      </div>
    </div>
  );
}
