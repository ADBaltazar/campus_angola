import { Link, useNavigate } from 'react-router';
import { Mail, Lock, User as UserIcon, IdCard, ArrowRight, Check } from 'lucide-react';
import { Button } from '../../design-system/Button';
import { Input } from '../../design-system/Input';
import { Logo } from '../../components/Logo';

export function Register() {
  const nav = useNavigate();
  const benefits = [
    'Candidate-se a até 5 cursos com um único processo',
    'Acompanhe notas, horário e disciplinas em tempo real',
    'Receba comunicações oficiais das universidades',
    'Documentos digitais com selo institucional',
  ];

  return (
    <div className="min-h-screen grid lg:grid-cols-12 bg-[var(--ca-paper)]">
      <aside className="hidden lg:flex lg:col-span-5 bg-[var(--ca-ink)] text-white p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute -right-24 -top-24 size-96 rounded-full bg-[var(--ca-primary)]/10 blur-3xl" />
        <div className="absolute right-12 bottom-12 size-72 rounded-full border border-white/5" />
        <Logo inverted />
        <div className="relative">
          <span className="text-[11px] tracking-[0.18em] uppercase text-[var(--ca-gold)]">Junte-se à plataforma</span>
          <h2 className="mt-4 font-display font-bold tracking-[-0.02em] text-[40px] leading-[1.05]">
            O seu percurso académico, sem fricção.
          </h2>
          <ul className="mt-10 space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 size-5 rounded-full bg-[var(--ca-gold)] text-[var(--ca-ink)] inline-flex items-center justify-center shrink-0"><Check size={12} strokeWidth={3} /></span>
                <span className="text-[14px] text-white/80 leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative flex items-center gap-4 pt-8 border-t border-white/10">
          <div>
            <div className="font-display font-bold text-[24px] tracking-tight text-[var(--ca-gold)] leading-none">210 mil</div>
            <div className="text-[11px] text-white/60 mt-1.5">Estudantes em todo o país</div>
          </div>
          <span className="w-px h-10 bg-white/10" />
          <div>
            <div className="font-display font-bold text-[24px] tracking-tight text-[var(--ca-gold)] leading-none">47</div>
            <div className="text-[11px] text-white/60 mt-1.5">Universidades</div>
          </div>
        </div>
      </aside>

      <div className="lg:col-span-7 flex flex-col px-6 lg:px-16 py-8 lg:py-12">
        <div className="lg:hidden mb-6"><Logo /></div>
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-xl mx-auto py-8">
            <span className="text-eyebrow">Criar conta</span>
            <h1 className="mt-3 font-display font-bold tracking-[-0.02em] text-[clamp(28px,3.4vw,40px)] leading-tight">Comece o seu percurso académico.</h1>
            <p className="mt-3 text-[14px] text-[var(--ca-gray-600)]">Em menos de 2 minutos. Sem papel.</p>

            <form className="mt-8 space-y-4" onSubmit={(e) => { e.preventDefault(); nav('/aluno'); }}>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input label="Primeiro nome" placeholder="Nzinga" leftIcon={<UserIcon size={15} />} required />
                <Input label="Apelido" placeholder="Domingos" required />
              </div>
              <Input label="Bilhete de Identidade" placeholder="000000000LA000" leftIcon={<IdCard size={15} />} required />
              <Input label="Email" placeholder="nome@exemplo.ao" type="email" leftIcon={<Mail size={15} />} required />
              <div className="grid sm:grid-cols-2 gap-4">
                <Input label="Palavra-passe" placeholder="Mínimo 8 caracteres" type="password" leftIcon={<Lock size={15} />} required />
                <Input label="Confirmar" placeholder="Repita a palavra-passe" type="password" leftIcon={<Lock size={15} />} required />
              </div>
              <label className="flex items-start gap-3 text-[12px] text-[var(--ca-gray-600)] mt-2">
                <input type="checkbox" required className="mt-0.5 size-4 rounded border-[var(--ca-gray-300)] accent-[var(--ca-primary)]" />
                <span>Concordo com os <a className="text-[var(--ca-ink)] underline underline-offset-2" href="#">Termos</a> e a <a className="text-[var(--ca-ink)] underline underline-offset-2" href="#">Política de Privacidade</a> do Campus Angola.</span>
              </label>
              <Button type="submit" variant="primary" size="lg" fullWidth rightIcon={<ArrowRight size={16} />}>Criar conta</Button>
            </form>

            <p className="mt-8 text-[13px] text-[var(--ca-gray-600)]">
              Já tem conta? <Link to="/login" className="font-medium text-[var(--ca-ink)] hover:text-[var(--ca-primary)] underline underline-offset-4">Entrar</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
