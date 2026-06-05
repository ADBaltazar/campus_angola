import { Link } from 'react-router';
import { TrendingUp, BookOpen, Award, Clock4, ArrowRight, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { StatCard } from '../../design-system/StatCard';
import { Badge } from '../../design-system/Badge';
import { Progress } from '../../design-system/Progress';
import { Button } from '../../design-system/Button';
import { Alert } from '../../design-system/Alert';
import { currentStudent, studentStats, subjects, schedule, upcomingEvents } from '../../shared/mock/student';

export function StudentDashboard() {
  const today = schedule.filter(s => s.day === 'Segunda');
  return (
    <div className="space-y-8">
      {/* Greeting */}
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <span className="text-eyebrow">Início · {currentStudent.year}</span>
          <h1 className="font-display font-bold tracking-[-0.02em] text-[clamp(26px,3vw,36px)] mt-2 leading-tight">
            Bom dia, {currentStudent.name.split(' ')[0]}.
          </h1>
          <p className="mt-2 text-[14px] text-[var(--ca-gray-600)]">
            {currentStudent.course} · {currentStudent.faculty}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge tone="gold" dot>{currentStudent.semester}</Badge>
          <Badge tone="gray">Nº {currentStudent.numero}</Badge>
        </div>
      </div>

      <Alert tone="warning" title="Entrega próxima — Bases de Dados">
        Trabalho de grupo a entregar até 8 de Junho às 23:59. <Link to="/aluno/disciplinas" className="font-medium underline">Ver detalhes</Link>
      </Alert>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Média geral" value={studentStats.media.toFixed(1)} suffix="/ 20" delta={3} deltaLabel="vs. último semestre" accent="red" icon={<TrendingUp size={16} />} />
        <StatCard label="Disciplinas" value={subjects.length} suffix="activas" accent="ink" icon={<BookOpen size={16} />} />
        <StatCard label="Créditos" value={studentStats.creditos} suffix={`/ ${studentStats.totalCreditos}`} accent="gold" delta={5} deltaLabel="acumulados" icon={<Award size={16} />} />
        <StatCard label="Frequência" value={`${studentStats.frequencia}%`} delta={1} accent="ink" icon={<Clock4 size={16} />} />
      </div>

      {/* Two-col grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Subjects */}
        <section className="lg:col-span-2 bg-white border border-[var(--ca-gray-200)] rounded-[14px]">
          <header className="flex items-center justify-between px-6 pt-6 pb-4">
            <div>
              <h2 className="font-display font-semibold text-[18px] tracking-tight">Disciplinas em curso</h2>
              <span className="text-[12px] text-[var(--ca-gray-500)]">{subjects.length} cadeiras · semestre em curso</span>
            </div>
            <Link to="/aluno/disciplinas"><Button variant="ghost" size="sm" rightIcon={<ChevronRight size={14} />}>Ver todas</Button></Link>
          </header>
          <div className="divide-y divide-[var(--ca-gray-200)] border-t border-[var(--ca-gray-200)]">
            {subjects.map(s => (
              <Link to="/aluno/disciplinas" key={s.id} className="grid grid-cols-12 items-center gap-4 px-6 py-4 hover:bg-[var(--ca-paper-2)] transition-colors">
                <div className="col-span-1 hidden sm:block">
                  <span className="size-9 rounded-md bg-[var(--ca-primary-soft)] text-[var(--ca-primary-deep)] inline-flex items-center justify-center font-display font-semibold text-[12px]">
                    {s.code.split('-')[1]}
                  </span>
                </div>
                <div className="col-span-7 sm:col-span-5">
                  <div className="text-[14px] font-medium text-[var(--ca-ink)]">{s.name}</div>
                  <div className="text-[11px] text-[var(--ca-gray-500)] mt-0.5">{s.teacher} · {s.credits} créditos</div>
                </div>
                <div className="col-span-3 hidden sm:block">
                  <Progress value={s.progress} />
                  <div className="text-[10px] text-[var(--ca-gray-500)] mt-1">{s.progress}% concluído</div>
                </div>
                <div className="col-span-5 sm:col-span-3 flex items-center justify-end">
                  <Badge tone="gray">{s.status}</Badge>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Schedule + Events */}
        <aside className="space-y-6">
          <section className="bg-white border border-[var(--ca-gray-200)] rounded-[14px]">
            <header className="px-5 pt-5 pb-3 flex items-center justify-between">
              <div>
                <h2 className="font-display font-semibold text-[15px] tracking-tight">Hoje</h2>
                <span className="text-[11px] text-[var(--ca-gray-500)]">Segunda-feira</span>
              </div>
              <Link to="/aluno/horario" className="text-[12px] text-[var(--ca-primary)] hover:text-[var(--ca-primary-deep)] font-medium">Ver horário</Link>
            </header>
            <div className="px-5 pb-5 space-y-2">
              {today.map((s, i) => (
                <div key={i} className={`flex items-start gap-3 p-3 rounded-[10px] ${s.live ? 'bg-[var(--ca-primary-soft)] border border-[var(--ca-primary)]/15' : 'bg-[var(--ca-paper-2)]'}`}>
                  <div className="text-[11px] font-medium text-[var(--ca-gray-600)] tabular-nums w-12 shrink-0 pt-0.5">{s.time.split(' — ')[0]}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <div className="text-[13px] font-medium truncate">{s.subject}</div>
                      {s.live && <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[var(--ca-primary)]"><span className="size-1.5 rounded-full bg-[var(--ca-primary)] animate-pulse" />AGORA</span>}
                    </div>
                    <div className="text-[11px] text-[var(--ca-gray-500)] mt-0.5 truncate">{s.room} · {s.teacher}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-[var(--ca-ink)] text-white rounded-[14px] p-5">
            <div className="flex items-center justify-between">
              <h2 className="font-display font-semibold text-[15px]">Próximos eventos</h2>
              <Calendar size={15} className="text-[var(--ca-gold)]" />
            </div>
            <ul className="mt-4 space-y-3">
              {upcomingEvents.map(e => (
                <li key={e.id} className="flex items-start gap-3 pb-3 border-b border-white/10 last:border-0 last:pb-0">
                  <div className="text-center shrink-0 w-12">
                    <div className="font-display font-bold text-[16px] text-[var(--ca-gold)] leading-none">{e.date.split(' ')[0]}</div>
                    <div className="text-[10px] uppercase tracking-wider text-white/50 mt-1">{e.date.split(' ')[1]}</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] font-medium leading-snug">{e.title}</div>
                    <span className="inline-block mt-1.5 px-2 h-5 rounded-full text-[10px] font-medium bg-white/10 text-white/80">{e.tag}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>

      {/* Progress overview */}
      <section className="bg-gradient-to-br from-[var(--ca-paper-2)] to-white border border-[var(--ca-gray-200)] rounded-[14px] p-6 lg:p-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="font-display font-semibold text-[18px] tracking-tight">Progresso na licenciatura</h2>
            <p className="text-[13px] text-[var(--ca-gray-600)] mt-1">{studentStats.creditos} de {studentStats.totalCreditos} créditos concluídos</p>
          </div>
          <Link to="/aluno/historico"><Button variant="outline" size="sm" rightIcon={<ArrowRight size={14} />}>Ver histórico</Button></Link>
        </div>
        <div className="mt-5">
          <Progress value={(studentStats.creditos / studentStats.totalCreditos) * 100} tone="gold" size="md" />
          <div className="mt-2 flex justify-between text-[11px] text-[var(--ca-gray-500)]">
            <span>1.º Ano</span><span>2.º</span><span>3.º</span><span>4.º</span><span>Conclusão</span>
          </div>
        </div>
      </section>
    </div>
  );
}
