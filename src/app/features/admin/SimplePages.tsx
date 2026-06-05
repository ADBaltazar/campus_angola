import { courses } from '../../shared/mock/courses';
import { studentsByFaculty, enrolmentsMonth } from '../../shared/mock/admin';
import { Badge } from '../../design-system/Badge';
import { Button } from '../../design-system/Button';
import { Plus } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, PieChart, Pie, Cell, Legend } from 'recharts';

export function AdminCursos() {
  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <span className="text-eyebrow">Gestão</span>
          <h1 className="font-display font-bold tracking-[-0.02em] text-[clamp(26px,3vw,36px)] mt-2 leading-tight">Cursos</h1>
        </div>
        <Button variant="primary" leftIcon={<Plus size={14} />}>Novo curso</Button>
      </div>
      <div className="bg-white border border-[var(--ca-gray-200)] rounded-[14px] overflow-hidden">
        <table className="w-full text-[13px]">
          <thead className="bg-[var(--ca-paper-2)] text-[10px] uppercase tracking-[0.14em] text-[var(--ca-gray-500)]">
            <tr>
              <th className="text-left px-6 py-3 font-medium">Curso</th>
              <th className="text-left px-3 py-3 font-medium">Área</th>
              <th className="text-left px-3 py-3 font-medium">Duração</th>
              <th className="text-left px-3 py-3 font-medium">Modalidade</th>
              <th className="text-right px-6 py-3 font-medium">Vagas</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--ca-gray-200)]">
            {courses.map(c => (
              <tr key={c.id} className="hover:bg-[var(--ca-paper-2)]">
                <td className="px-6 py-3.5 font-medium">{c.name}</td>
                <td className="px-3 py-3.5"><Badge tone="red">{c.area}</Badge></td>
                <td className="px-3 py-3.5 text-[var(--ca-gray-600)]">{c.duration}</td>
                <td className="px-3 py-3.5"><Badge tone="gray">{c.modality}</Badge></td>
                <td className="px-6 py-3.5 text-right font-display font-semibold">{c.vacancies}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const PIE_COLORS = ['#C0182A', '#C49A2A', '#1A5AA0', '#1A7A4A', '#0E0E10', '#B07A10'];

export function AdminAnalytics() {
  return (
    <div className="space-y-8">
      <div>
        <span className="text-eyebrow">Analítica</span>
        <h1 className="font-display font-bold tracking-[-0.02em] text-[clamp(26px,3vw,36px)] mt-2 leading-tight">Indicadores académicos</h1>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <section className="bg-white border border-[var(--ca-gray-200)] rounded-[14px] p-6">
          <h2 className="font-display font-semibold text-[16px] mb-5">Evolução das matrículas</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={enrolmentsMonth}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C0182A" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#C0182A" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#E6E5E0" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="m" stroke="#A8A79F" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis stroke="#A8A79F" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 10, border: '1px solid #E6E5E0', fontSize: 12 }} />
                <Area type="monotone" dataKey="v" stroke="#C0182A" strokeWidth={2.5} fill="url(#g1)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>
        <section className="bg-white border border-[var(--ca-gray-200)] rounded-[14px] p-6">
          <h2 className="font-display font-semibold text-[16px] mb-5">Distribuição por faculdade</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={studentsByFaculty} dataKey="total" nameKey="faculty" innerRadius={56} outerRadius={94} paddingAngle={2}>
                  {studentsByFaculty.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: 10, border: '1px solid #E6E5E0', fontSize: 12 }} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>
    </div>
  );
}
