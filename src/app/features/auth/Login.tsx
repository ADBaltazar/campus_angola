import { Link, useNavigate } from 'react-router';
import { Mail, Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '../../design-system/Button';
import { Input } from '../../design-system/Input';
import { Logo } from '../../components/Logo';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function Login() {
  const nav = useNavigate();
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-[var(--ca-paper)]">
      <div className="flex flex-col px-6 lg:px-16 py-8 lg:py-12">
        <Logo />
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-md mx-auto py-12">
            <span className="text-eyebrow">Área Académica</span>
            <h1 className="mt-3 font-display font-bold tracking-[-0.02em] text-[clamp(28px,3.4vw,40px)] leading-tight">Aceda à sua conta.</h1>
            <p className="mt-3 text-[14px] text-[var(--ca-gray-600)]">Bem-vindo de volta ao Campus Angola.</p>

            <form className="mt-8 space-y-4" onSubmit={(e) => { e.preventDefault(); nav('/aluno'); }}>
              <Input label="Email institucional" placeholder="nome@aluno.uan.ao" type="email" leftIcon={<Mail size={15} />} required />
              <Input label="Palavra-passe" placeholder="••••••••" type="password" leftIcon={<Lock size={15} />} required />
              <div className="flex items-center justify-between text-[12px]">
                <label className="inline-flex items-center gap-2 text-[var(--ca-gray-600)]">
                  <input type="checkbox" className="size-4 rounded border-[var(--ca-gray-300)] accent-[var(--ca-primary)]" />
                  Manter sessão iniciada
                </label>
                <a href="#" className="font-medium text-[var(--ca-primary)] hover:text-[var(--ca-primary-deep)]">Esqueci-me</a>
              </div>
              <Button type="submit" variant="primary" size="lg" fullWidth rightIcon={<ArrowRight size={16} />}>Entrar</Button>
            </form>

            <div className="my-7 flex items-center gap-3 text-[11px] tracking-[0.16em] uppercase text-[var(--ca-gray-400)]">
              <span className="flex-1 h-px bg-[var(--ca-gray-200)]" /> ou continuar com <span className="flex-1 h-px bg-[var(--ca-gray-200)]" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" size="md">BI Digital</Button>
              <Button variant="outline" size="md">Conta Gov.AO</Button>
            </div>

            <p className="mt-8 text-[13px] text-[var(--ca-gray-600)]">
              Ainda não tem conta? <Link to="/registar" className="font-medium text-[var(--ca-ink)] hover:text-[var(--ca-primary)] underline underline-offset-4">Registar-me</Link>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-[var(--ca-gray-500)]">
          <ShieldCheck size={13} className="text-[var(--ca-success)]" /> Conexão segura · Plataforma oficial
        </div>
      </div>

      <aside className="relative hidden lg:block">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1400&q=85"
          alt="Estudantes universitários"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--ca-ink)]/85 via-[var(--ca-ink)]/40 to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--ca-gold)]" />
        <div className="absolute inset-x-0 bottom-0 p-12 text-white">
          <span className="text-[11px] tracking-[0.18em] uppercase text-[var(--ca-gold)]">Plataforma Nacional</span>
          <p className="mt-3 font-display font-semibold text-[28px] leading-tight tracking-[-0.02em] max-w-md">
            "A primeira vez que senti que o sistema funciona para nós."
          </p>
          <div className="mt-4 text-[12px] text-white/70">Domingos Capemba · 3.º Ano · Eng. Civil · UAN</div>
        </div>
      </aside>
    </div>
  );
}
