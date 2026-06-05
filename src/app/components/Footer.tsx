import { Logo } from './Logo';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="border-t border-[var(--ca-gray-200)] bg-[var(--ca-ink)] text-white mt-24">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <Logo inverted />
          <p className="mt-4 text-[13px] text-white/60 leading-relaxed max-w-xs">
            O ecossistema digital do ensino superior em Angola. Universidades, cursos e candidaturas num só lugar.
          </p>
        </div>
        <FooterCol title="Plataforma" items={[
          ['Universidades', '/universidades'],
          ['Cursos', '/cursos'],
          ['Candidatura', '/candidatura'],
          ['Área do Aluno', '/aluno'],
        ]} />
        <FooterCol title="Instituições" items={[
          ['Painel Administrativo', '/admin'],
          ['Adesão', '#'],
          ['Documentação', '#'],
          ['Suporte', '#'],
        ]} />
        <FooterCol title="Sobre" items={[
          ['Quem somos', '#'],
          ['Imprensa', '#'],
          ['Privacidade', '#'],
          ['Contacto', '#'],
        ]} />
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-8 py-5 flex items-center justify-between flex-wrap gap-3">
          <span className="text-[12px] text-white/50">© 2026 Campus Angola — República de Angola.</span>
          <span className="text-[11px] tracking-[0.16em] uppercase text-white/40">Ministério do Ensino Superior</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <h4 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-white/50 mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {items.map(([label, href]) => (
          <li key={label}>
            <Link to={href} className="text-[13px] text-white/80 hover:text-[var(--ca-gold)] transition-colors">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
