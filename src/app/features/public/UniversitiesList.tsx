import { useMemo, useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { universities, provinces } from '../../shared/mock/universities';
import { UniversityCard } from '../../components/UniversityCard';
import { Badge } from '../../design-system/Badge';

export function UniversitiesList() {
  const [q, setQ] = useState('');
  const [province, setProvince] = useState('Todas');
  const [type, setType] = useState<'Todas' | 'Pública' | 'Privada'>('Todas');

  const list = useMemo(() => universities.filter(u => {
    const matchQ = !q || (u.name + u.acronym + u.city).toLowerCase().includes(q.toLowerCase());
    const matchP = province === 'Todas' || u.province === province;
    const matchT = type === 'Todas' || u.type === type;
    return matchQ && matchP && matchT;
  }), [q, province, type]);

  return (
    <div>
      <div className="border-b border-[var(--ca-gray-200)]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-8 py-12 lg:py-16">
          <span className="text-eyebrow">Catálogo nacional</span>
          <h1 className="font-display font-bold tracking-[-0.025em] text-[clamp(32px,4.5vw,52px)] leading-[1.05] mt-3">Universidades de Angola</h1>
          <p className="mt-4 max-w-2xl text-[15px] text-[var(--ca-gray-600)]">
            {universities.length} instituições disponíveis · Públicas e privadas · 18 províncias
          </p>
          <div className="mt-8 grid md:grid-cols-12 gap-3">
            <div className="md:col-span-6 flex items-center gap-2 h-12 px-4 bg-white border border-[var(--ca-gray-300)] rounded-[10px]">
              <Search size={16} className="text-[var(--ca-gray-400)]" />
              <input value={q} onChange={e => setQ(e.target.value)} placeholder="Procurar por nome, sigla ou cidade…" className="flex-1 bg-transparent outline-none text-[14px]" />
            </div>
            <div className="md:col-span-3 flex items-center gap-2 h-12 px-4 bg-white border border-[var(--ca-gray-300)] rounded-[10px]">
              <MapPin size={16} className="text-[var(--ca-gray-400)]" />
              <select value={province} onChange={e => setProvince(e.target.value)} className="flex-1 bg-transparent outline-none text-[14px]">
                {provinces.map(p => <option key={p}>{p}</option>)}
              </select>
            </div>
            <div className="md:col-span-3 flex items-center gap-2">
              {(['Todas','Pública','Privada'] as const).map(t => (
                <button key={t} onClick={() => setType(t)}
                  className={`flex-1 h-12 rounded-[10px] text-[13px] font-medium tracking-tight border transition-colors ${type === t ? 'bg-[var(--ca-ink)] text-white border-[var(--ca-ink)]' : 'bg-white border-[var(--ca-gray-300)] text-[var(--ca-gray-600)]'}`}>
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <span className="text-[13px] text-[var(--ca-gray-500)]">{list.length} {list.length === 1 ? 'resultado' : 'resultados'}</span>
          <Badge tone="gold">Ordenado por relevância</Badge>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map(u => <UniversityCard key={u.id} u={u} />)}
        </div>
        {list.length === 0 && <div className="text-center py-20 text-[var(--ca-gray-500)]">Nenhuma universidade encontrada.</div>}
      </div>
    </div>
  );
}
