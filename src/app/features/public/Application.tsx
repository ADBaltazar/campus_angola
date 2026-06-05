import { useState } from 'react';
import { Check, ArrowRight, ArrowLeft, GraduationCap, FileText, User as UserIcon } from 'lucide-react';
import { Button } from '../../design-system/Button';
import { Input, Textarea } from '../../design-system/Input';
import { Alert } from '../../design-system/Alert';
import { Badge } from '../../design-system/Badge';
import { universities } from '../../shared/mock/universities';
import { courses } from '../../shared/mock/courses';
import { cn } from '../../shared/cn';

const steps = [
  { n: 1, title: 'Identificação',     icon: UserIcon },
  { n: 2, title: 'Escolhas académicas', icon: GraduationCap },
  { n: 3, title: 'Documentos',        icon: FileText },
  { n: 4, title: 'Confirmação',       icon: Check },
];

export function Application() {
  const [step, setStep] = useState(1);
  return (
    <div className="max-w-[1100px] mx-auto px-5 lg:px-8 py-10 lg:py-14">
      <span className="text-eyebrow">Candidatura 2026/27</span>
      <h1 className="font-display font-bold tracking-[-0.025em] text-[clamp(28px,4vw,42px)] mt-3 leading-tight">Candidatura ao Ensino Superior</h1>
      <p className="mt-3 text-[15px] text-[var(--ca-gray-600)] max-w-2xl">Processo único, oficial e digital. Pode candidatar-se a até 5 cursos em diferentes universidades.</p>

      {/* Stepper */}
      <ol className="mt-10 grid grid-cols-4 gap-2">
        {steps.map((s, i) => {
          const done = step > s.n;
          const active = step === s.n;
          return (
            <li key={s.n} className="flex items-center gap-3">
              <span className={cn(
                'size-9 rounded-full inline-flex items-center justify-center text-[13px] font-semibold border-2 shrink-0',
                done && 'bg-[var(--ca-success)] border-[var(--ca-success)] text-white',
                active && 'bg-[var(--ca-primary)] border-[var(--ca-primary)] text-white',
                !done && !active && 'bg-white border-[var(--ca-gray-300)] text-[var(--ca-gray-500)]'
              )}>
                {done ? <Check size={15} /> : s.n}
              </span>
              <div className="hidden sm:block min-w-0">
                <div className="text-[10px] tracking-[0.14em] uppercase text-[var(--ca-gray-500)]">Passo {s.n}</div>
                <div className={cn('text-[13px] font-medium truncate', active ? 'text-[var(--ca-ink)]' : 'text-[var(--ca-gray-600)]')}>{s.title}</div>
              </div>
              {i < steps.length - 1 && <span className={cn('hidden md:block flex-1 h-px', done ? 'bg-[var(--ca-success)]' : 'bg-[var(--ca-gray-200)]')} />}
            </li>
          );
        })}
      </ol>

      <div className="mt-10 bg-white border border-[var(--ca-gray-200)] rounded-[16px] p-6 lg:p-10">
        {step === 1 && <StepIdent />}
        {step === 2 && <StepChoices />}
        {step === 3 && <StepDocs />}
        {step === 4 && <StepDone />}

        <div className="mt-10 flex items-center justify-between">
          <Button variant="ghost" leftIcon={<ArrowLeft size={14} />} onClick={() => setStep(s => Math.max(1, s - 1))} disabled={step === 1}>
            Voltar
          </Button>
          {step < 4 ? (
            <Button variant="primary" rightIcon={<ArrowRight size={14} />} onClick={() => setStep(s => Math.min(4, s + 1))}>
              Continuar
            </Button>
          ) : (
            <Button variant="gold" rightIcon={<Check size={14} />}>Submeter candidatura</Button>
          )}
        </div>
      </div>
    </div>
  );
}

function StepIdent() {
  return (
    <div className="space-y-6">
      <h2 className="font-display font-semibold text-[20px]">Os seus dados pessoais</h2>
      <div className="grid md:grid-cols-2 gap-5">
        <Input label="Nome completo" placeholder="Ex.: Nzinga Domingos" />
        <Input label="Bilhete de Identidade" placeholder="000000000LA000" />
        <Input label="Data de nascimento" type="date" />
        <Input label="Província de naturalidade" placeholder="Luanda" />
        <Input label="Email" type="email" placeholder="nome@exemplo.ao" />
        <Input label="Telemóvel" placeholder="+244 9XX XXX XXX" />
      </div>
    </div>
  );
}

function StepChoices() {
  return (
    <div className="space-y-6">
      <h2 className="font-display font-semibold text-[20px]">Escolha até 5 cursos por ordem de preferência</h2>
      <Alert tone="info" title="Boa prática">Combine universidades públicas e privadas para aumentar as suas hipóteses.</Alert>
      <div className="space-y-3">
        {[1,2,3].map(i => (
          <div key={i} className="grid md:grid-cols-12 gap-3 items-end p-4 bg-[var(--ca-paper-2)] rounded-[12px]">
            <div className="md:col-span-1 font-display font-bold text-[24px] text-[var(--ca-primary)] tracking-tight">{i}.</div>
            <div className="md:col-span-5">
              <label className="text-[12px] font-medium text-[var(--ca-gray-600)]">Universidade</label>
              <select className="mt-1.5 w-full h-11 px-3 bg-white border border-[var(--ca-gray-300)] rounded-[10px] text-[14px]">
                {universities.map(u => <option key={u.id}>{u.short}</option>)}
              </select>
            </div>
            <div className="md:col-span-6">
              <label className="text-[12px] font-medium text-[var(--ca-gray-600)]">Curso</label>
              <select className="mt-1.5 w-full h-11 px-3 bg-white border border-[var(--ca-gray-300)] rounded-[10px] text-[14px]">
                {courses.map(c => <option key={c.id}>{c.name}</option>)}
              </select>
            </div>
          </div>
        ))}
      </div>
      <button className="text-[13px] font-medium text-[var(--ca-primary)] hover:text-[var(--ca-primary-deep)]">+ Adicionar mais um curso</button>
    </div>
  );
}

function StepDocs() {
  const docs = ['Certificado de habilitações', 'Bilhete de Identidade', 'Fotografia tipo passe', 'Comprovativo de morada'];
  return (
    <div className="space-y-6">
      <h2 className="font-display font-semibold text-[20px]">Documentos exigidos</h2>
      <div className="space-y-3">
        {docs.map(d => (
          <div key={d} className="flex items-center justify-between p-4 border border-[var(--ca-gray-200)] rounded-[10px] bg-white">
            <div>
              <div className="text-[14px] font-medium">{d}</div>
              <div className="text-[12px] text-[var(--ca-gray-500)] mt-0.5">PDF, JPG ou PNG · até 5 MB</div>
            </div>
            <Button variant="outline" size="sm">Carregar</Button>
          </div>
        ))}
      </div>
      <Textarea label="Carta de motivação (opcional)" placeholder="Em poucas palavras, o que o motiva?" />
    </div>
  );
}

function StepDone() {
  return (
    <div className="text-center py-6">
      <span className="size-16 rounded-full bg-[var(--ca-success-soft)] text-[var(--ca-success)] inline-flex items-center justify-center"><Check size={28} /></span>
      <h2 className="font-display font-bold text-[24px] mt-5">Tudo pronto para submeter</h2>
      <p className="mt-3 text-[14px] text-[var(--ca-gray-600)] max-w-md mx-auto">Reveja as suas escolhas. Após a submissão receberá uma notificação oficial em cada decisão.</p>
      <div className="mt-6 inline-flex items-center gap-2"><Badge tone="gold">Referência: CA-2026-7842</Badge></div>
    </div>
  );
}
