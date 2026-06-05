import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Menu, X, GraduationCap, LayoutDashboard, LogIn } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from '../design-system/Button';
import { cn } from '../shared/cn';

const links = [
  { to: '/universidades', label: 'Universidades' },
  { to: '/cursos',         label: 'Cursos' },
  { to: '/candidatura',    label: 'Candidatura' },
  { to: '/adesao',         label: 'Adesão Institucional' },
];

export function PublicNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-[var(--ca-paper)]/85 backdrop-blur-md border-b border-[var(--ca-gray-200)]">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8 h-16 flex items-center justify-between gap-6">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <NavLink
              key={l.to} to={l.to}
              className={({ isActive }) => cn(
                'relative px-3 h-9 inline-flex items-center text-[13px] font-medium tracking-tight rounded-md transition-colors',
                isActive ? 'text-[var(--ca-ink)]' : 'text-[var(--ca-gray-600)] hover:text-[var(--ca-ink)]'
              )}
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && <span className="absolute left-3 right-3 -bottom-px h-[2px] bg-[var(--ca-primary)] rounded-full" />}
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <Link to="/aluno"><Button variant="ghost" size="sm" leftIcon={<LayoutDashboard size={14} />}>Dashboard</Button></Link>
          <Link to="/login"><Button variant="outline" size="sm" leftIcon={<LogIn size={14} />}>Entrar</Button></Link>
          <Link to="/registar"><Button variant="primary" size="sm" leftIcon={<GraduationCap size={14} />}>Registar-me</Button></Link>
        </div>
        <button onClick={() => setOpen(v => !v)} className="lg:hidden inline-flex items-center justify-center size-10 rounded-md hover:bg-[var(--ca-gray-100)]" aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-[var(--ca-gray-200)] bg-white">
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map(l => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
                className="px-3 h-11 inline-flex items-center text-[14px] font-medium rounded-md hover:bg-[var(--ca-gray-100)]">
                {l.label}
              </Link>
            ))}
            <Link to="/aluno" onClick={() => setOpen(false)}
              className="px-3 h-11 inline-flex items-center text-[14px] font-medium rounded-md hover:bg-[var(--ca-gray-100)]">
              Dashboard
            </Link>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <Link to="/login" onClick={() => setOpen(false)}>
                <Button variant="outline" size="md" fullWidth leftIcon={<LogIn size={16} />}>Entrar</Button>
              </Link>
              <Link to="/registar" onClick={() => setOpen(false)}>
                <Button variant="primary" size="md" fullWidth leftIcon={<GraduationCap size={16} />}>Registar</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
