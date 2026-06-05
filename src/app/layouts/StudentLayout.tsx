import { Outlet, NavLink, Link } from 'react-router';
import { Home, BookOpen, Calendar, GraduationCap, FileText, User, Bell, Search } from 'lucide-react';
import { Logo } from '../components/Logo';
import { Avatar } from '../design-system/Avatar';
import { Badge } from '../design-system/Badge';
import { currentStudent } from '../shared/mock/student';
import { cn } from '../shared/cn';

const items = [
  { to: '/aluno',            label: 'Início',      icon: Home,         end: true },
  { to: '/aluno/notas',      label: 'Notas',       icon: GraduationCap },
  { to: '/aluno/horario',    label: 'Horário',     icon: Calendar },
  { to: '/aluno/disciplinas',label: 'Disciplinas', icon: BookOpen },
  { to: '/aluno/historico',  label: 'Histórico',   icon: FileText },
  { to: '/aluno/documentos', label: 'Documentos',  icon: FileText },
  { to: '/aluno/perfil',     label: 'Perfil',      icon: User },
];

export function StudentLayout() {
  return (
    <div className="min-h-screen bg-[var(--ca-paper)]">
      {/* Sidebar desktop */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 w-64 bg-white border-r border-[var(--ca-gray-200)] flex-col">
        <div className="h-16 px-5 flex items-center border-b border-[var(--ca-gray-200)]">
          <Logo />
        </div>
        <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
          <div className="px-3 pt-3 pb-2 text-[10px] font-semibold tracking-[0.16em] uppercase text-[var(--ca-gray-400)]">Académico</div>
          {items.map(it => (
            <NavLink key={it.to} to={it.to} end={it.end}
              className={({ isActive }) => cn(
                'flex items-center gap-3 px-3 h-10 rounded-md text-[13px] font-medium transition-colors',
                isActive ? 'bg-[var(--ca-primary-soft)] text-[var(--ca-primary-deep)]' : 'text-[var(--ca-gray-600)] hover:bg-[var(--ca-gray-100)] hover:text-[var(--ca-ink)]'
              )}>
              <it.icon size={16} />{it.label}
            </NavLink>
          ))}
        </nav>
        <div className="border-t border-[var(--ca-gray-200)] p-3">
          <Link to="/aluno/perfil" className="flex items-center gap-3 p-2 rounded-md hover:bg-[var(--ca-gray-100)]">
            <Avatar name={currentStudent.name} size={36} />
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-medium truncate">{currentStudent.name}</div>
              <div className="text-[11px] text-[var(--ca-gray-500)] truncate">Nº {currentStudent.numero}</div>
            </div>
          </Link>
        </div>
      </aside>

      {/* Topbar mobile + content */}
      <div className="lg:pl-64">
        <header className="h-16 sticky top-0 z-30 bg-[var(--ca-paper)]/90 backdrop-blur-md border-b border-[var(--ca-gray-200)] flex items-center justify-between px-5 lg:px-8 gap-4">
          <div className="lg:hidden"><Logo /></div>
          <div className="hidden lg:flex items-center gap-2 flex-1 max-w-md">
            <div className="flex items-center gap-2 h-10 px-3 bg-white border border-[var(--ca-gray-200)] rounded-[10px] flex-1">
              <Search size={15} className="text-[var(--ca-gray-400)]" />
              <input placeholder="Procurar disciplina, professor, sala…" className="flex-1 bg-transparent outline-none text-[13px]" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge tone="gold" dot>{currentStudent.semester}</Badge>
            <button className="relative size-10 inline-flex items-center justify-center rounded-md hover:bg-[var(--ca-gray-100)]" aria-label="Notificações">
              <Bell size={18} />
              <span className="absolute top-2 right-2 size-2 rounded-full bg-[var(--ca-primary)] ring-2 ring-[var(--ca-paper)]" />
            </button>
            <Avatar name={currentStudent.name} size={36} className="lg:hidden" />
          </div>
        </header>
        <main className="px-5 lg:px-8 pb-28 lg:pb-12 pt-6 lg:pt-8 max-w-[1280px] mx-auto"><Outlet /></main>
      </div>

      {/* Bottom nav mobile */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white border-t border-[var(--ca-gray-200)]">
        <div className="grid grid-cols-5 h-16">
          {items.slice(0, 5).map(it => (
            <NavLink key={it.to} to={it.to} end={it.end}
              className={({ isActive }) => cn(
                'flex flex-col items-center justify-center gap-1 text-[10px] font-medium tracking-tight',
                isActive ? 'text-[var(--ca-primary)]' : 'text-[var(--ca-gray-500)]'
              )}>
              <it.icon size={18} />{it.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
