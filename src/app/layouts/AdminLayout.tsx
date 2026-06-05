import { Outlet, NavLink, Link } from 'react-router';
import { LayoutDashboard, Users, BookOpen, FileCheck, BarChart3, Bell, Search, ArrowLeft } from 'lucide-react';
import { Logo } from '../components/Logo';
import { Avatar } from '../design-system/Avatar';
import { Badge } from '../design-system/Badge';
import { cn } from '../shared/cn';

const items = [
  { to: '/admin',              label: 'Visão Geral',    icon: LayoutDashboard, end: true },
  { to: '/admin/alunos',       label: 'Alunos',         icon: Users },
  { to: '/admin/cursos',       label: 'Cursos',         icon: BookOpen },
  { to: '/admin/candidaturas', label: 'Candidaturas',   icon: FileCheck },
  { to: '/admin/analytics',    label: 'Analítica',      icon: BarChart3 },
];

export function AdminLayout() {
  return (
    <div className="min-h-screen bg-[var(--ca-paper-2)]">
      <aside className="hidden lg:flex fixed inset-y-0 left-0 w-64 bg-[var(--ca-ink)] text-white flex-col">
        <div className="h-16 px-5 flex items-center border-b border-white/10">
          <Logo inverted />
        </div>
        <nav className="flex-1 p-3 space-y-0.5">
          <div className="px-3 pt-3 pb-2 text-[10px] font-semibold tracking-[0.16em] uppercase text-white/40">Gestão</div>
          {items.map(it => (
            <NavLink key={it.to} to={it.to} end={it.end}
              className={({ isActive }) => cn(
                'flex items-center gap-3 px-3 h-10 rounded-md text-[13px] font-medium transition-colors',
                isActive ? 'bg-[var(--ca-primary)] text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'
              )}>
              <it.icon size={16} />{it.label}
            </NavLink>
          ))}
        </nav>
        <div className="border-t border-white/10 p-3">
          <Link to="/" className="flex items-center gap-2 px-3 h-9 text-[12px] text-white/60 hover:text-white">
            <ArrowLeft size={14} /> Voltar ao portal
          </Link>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="h-16 sticky top-0 z-30 bg-[var(--ca-paper-2)]/90 backdrop-blur-md border-b border-[var(--ca-gray-200)] flex items-center justify-between px-5 lg:px-8 gap-4">
          <div className="lg:hidden"><Logo /></div>
          <div className="hidden lg:flex items-center gap-2 flex-1 max-w-md">
            <div className="flex items-center gap-2 h-10 px-3 bg-white border border-[var(--ca-gray-200)] rounded-[10px] flex-1">
              <Search size={15} className="text-[var(--ca-gray-400)]" />
              <input placeholder="Procurar aluno, candidatura, curso…" className="flex-1 bg-transparent outline-none text-[13px]" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge tone="ink">UAN · Reitoria</Badge>
            <button className="size-10 inline-flex items-center justify-center rounded-md hover:bg-[var(--ca-gray-100)]" aria-label="Notificações">
              <Bell size={18} />
            </button>
            <Avatar name="Reitoria" size={36} />
          </div>
        </header>
        <main className="px-5 lg:px-8 py-8 max-w-[1440px] mx-auto"><Outlet /></main>
      </div>
    </div>
  );
}
