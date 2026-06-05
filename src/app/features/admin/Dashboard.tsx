import { Users, FileCheck, Check, Clock, ArrowRight } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import { StatCard } from '../../design-system/StatCard';
import { Badge } from '../../design-system/Badge';
import { Button } from '../../design-system/Button';
import { adminStats, enrolmentsMonth, studentsByFaculty, applications } from '../../shared/mock/admin';
import { Avatar } from '../../design-system/Avatar';

export function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <span className="text-eyebrow">Painel · Universidade Agostinho Neto</span>
          <h1 className="font-display font-bold tracking-[-0.02em] text-[clamp(26px,3vw,36px)] mt-2 leading-tight">Visão geral institucional</h1>
          <p className="mt-2 text-[14px] text-[var(--ca-gray-600)]">Indicadores em tempo real · Ano lectivo 2025/26</p>
        </div>
        <Button variant="primary" rightIcon={<ArrowRight size={14} />}>Publicar comunicação</Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Alunos activos" value={adminStats.alunos.toLocaleString('pt-PT')} delta={4} accent="ink" icon={<Users size={16} />} />
        <StatCard label="Candidaturas" value={adminStats.candidaturas.toLocaleString('pt-PT')} delta={12} accent="red" icon={<FileCheck size={16} />} />
        <StatCard label="Aprovadas" value={adminStats.aprovadas.toLocaleString('pt-PT')} delta={8} accent="gold" icon={<Check size={16} />} />
        <StatCard label="Pendentes" value={adminStats.pendentes.toLocaleString('pt-PT')} delta={-3} accent="ink" icon={<Clock size={16} />} />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 bg-white border border-[var(--ca-gray-200)] rounded-[14px] p-6">
          <header className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-display font-semibold text-[16px] tracking-tight">Matrículas por mês</h2>
              <span className="text-[11px] text-[var(--ca-gray-500)]">Últimos 12 meses</span>
            </div>
            <Badge tone="success" dot>+18% YoY</Badge>
          </header>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={enrolmentsMonth}>
                <CartesianGrid stroke="#E6E5E0" strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="m" stroke="#A8A79F" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis stroke="#A8A79F" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 10, border: '1px solid #E6E5E0', fontSize: 12 }} />
                <Line type="monotone" dataKey="v" stroke="#C0182A" strokeWidth={2.5} dot={{ r: 3, fill: '#C0182A' }} activeDot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="bg-white border border-[var(--ca-gray-200)] rounded-[14px] p-6">
          <header className="mb-6">
            <h2 className="font-display font-semibold text-[16px] tracking-tight">Alunos por faculdade</h2>
            <span className="text-[11px] text-[var(--ca-gray-500)]">Distribuição actual</span>
          </header>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={studentsByFaculty} layout="vertical" margin={{ left: 10 }}>
                <CartesianGrid stroke="#E6E5E0" strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" stroke="#A8A79F" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="faculty" stroke="#0E0E10" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} width={80} />
                <Tooltip contentStyle={{ borderRadius: 10, border: '1px solid #E6E5E0', fontSize: 12 }} />
                <Bar dataKey="total" fill="#C49A2A" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>

      <section className="bg-white border border-[var(--ca-gray-200)] rounded-[14px]">
        <header className="px-6 py-4 border-b border-[var(--ca-gray-200)] flex items-center justify-between">
          <h2 className="font-display font-semibold text-[16px] tracking-tight">Candidaturas recentes</h2>
          <Button variant="ghost" size="sm" rightIcon={<ArrowRight size={14} />}>Ver todas</Button>
        </header>
        <ul className="divide-y divide-[var(--ca-gray-200)]">
          {applications.slice(0, 5).map(a => (
            <li key={a.id} className="grid grid-cols-12 items-center gap-4 px-6 py-4 hover:bg-[var(--ca-paper-2)]">
              <div className="col-span-5 flex items-center gap-3">
                <Avatar name={a.name} size={36} />
                <div className="min-w-0">
                  <div className="text-[13px] font-medium truncate">{a.name}</div>
                  <div className="text-[11px] text-[var(--ca-gray-500)]">Submetida {a.submittedAt}</div>
                </div>
              </div>
              <div className="col-span-3 text-[12px] text-[var(--ca-gray-700)]">{a.course}</div>
              <div className="col-span-2 text-[12px] text-[var(--ca-gray-500)]">{a.university}</div>
              <div className="col-span-2 flex justify-end">
                <Badge tone={a.status === 'Pendente' ? 'gold' : a.status === 'Em análise' ? 'info' : a.decision === 'Aprovada' ? 'success' : 'red'} dot>
                  {a.status === 'Decidida' ? a.decision : a.status}
                </Badge>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
