import { documents, grades, currentStudent } from '../../shared/mock/student';
import { Badge } from '../../design-system/Badge';
import { Button } from '../../design-system/Button';
import { Avatar } from '../../design-system/Avatar';
import { FileText, Download, Mail, Phone, MapPin } from 'lucide-react';

export function StudentHistorico() {
  return (
    <div className="space-y-8">
      <div>
        <span className="text-eyebrow">Académico</span>
        <h1 className="font-display font-bold tracking-[-0.02em] text-[clamp(26px,3vw,36px)] mt-2 leading-tight">Histórico académico</h1>
      </div>
      <div className="bg-white border border-[var(--ca-gray-200)] rounded-[14px] overflow-hidden">
        <table className="w-full text-[13px]">
          <thead className="bg-[var(--ca-paper-2)] text-[11px] uppercase tracking-wider text-[var(--ca-gray-500)]">
            <tr>
              <th className="text-left px-6 py-3 font-medium">Período</th>
              <th className="text-left px-3 py-3 font-medium">Cadeira</th>
              <th className="text-left px-3 py-3 font-medium">Créditos</th>
              <th className="text-left px-3 py-3 font-medium">Nota</th>
              <th className="text-right px-6 py-3 font-medium">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--ca-gray-200)]">
            {grades.map(g => (
              <tr key={g.id} className="hover:bg-[var(--ca-paper-2)]">
                <td className="px-6 py-3.5 text-[var(--ca-gray-600)]">{g.period}</td>
                <td className="px-3 py-3.5 font-medium">{g.name}</td>
                <td className="px-3 py-3.5">{g.credits}</td>
                <td className="px-3 py-3.5 font-display font-bold">{g.grade}<span className="text-[11px] font-sans text-[var(--ca-gray-500)] ml-1">/20</span></td>
                <td className="px-6 py-3.5 text-right"><Badge tone="success" dot>{g.status}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function StudentDocumentos() {
  return (
    <div className="space-y-8">
      <div>
        <span className="text-eyebrow">Documentos</span>
        <h1 className="font-display font-bold tracking-[-0.02em] text-[clamp(26px,3vw,36px)] mt-2 leading-tight">Os seus documentos</h1>
        <p className="mt-2 text-[14px] text-[var(--ca-gray-600)]">Declarações, comprovativos e ficheiros oficiais</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {documents.map(d => (
          <article key={d.id} className="bg-white border border-[var(--ca-gray-200)] rounded-[12px] p-5 flex items-start gap-4 hover:border-[var(--ca-gray-300)] transition-colors">
            <span className="size-11 rounded-md bg-[var(--ca-primary-soft)] text-[var(--ca-primary)] inline-flex items-center justify-center shrink-0"><FileText size={18} /></span>
            <div className="flex-1 min-w-0">
              <div className="text-[14px] font-medium leading-snug">{d.name}</div>
              <div className="text-[11px] text-[var(--ca-gray-500)] mt-1">{d.type} · {d.size} · {d.date}</div>
            </div>
            <Button variant="outline" size="sm" leftIcon={<Download size={13} />}>Baixar</Button>
          </article>
        ))}
      </div>
    </div>
  );
}

export function StudentPerfil() {
  return (
    <div className="space-y-8">
      <div>
        <span className="text-eyebrow">Conta</span>
        <h1 className="font-display font-bold tracking-[-0.02em] text-[clamp(26px,3vw,36px)] mt-2 leading-tight">Perfil</h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-white border border-[var(--ca-gray-200)] rounded-[14px] p-6 text-center">
          <Avatar name={currentStudent.name} size={88} className="mx-auto" />
          <h2 className="font-display font-semibold text-[18px] mt-4">{currentStudent.name}</h2>
          <p className="text-[12px] text-[var(--ca-gray-500)] mt-1">Nº {currentStudent.numero}</p>
          <Badge tone="gold" dot className="mt-3">{currentStudent.semester}</Badge>
        </div>
        <div className="lg:col-span-2 bg-white border border-[var(--ca-gray-200)] rounded-[14px] p-6">
          <h3 className="font-display font-semibold text-[15px]">Informações académicas</h3>
          <dl className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-4 text-[13px]">
            {[
              ['Universidade', currentStudent.university],
              ['Faculdade',    currentStudent.faculty],
              ['Curso',        currentStudent.course],
              ['Ano lectivo',  currentStudent.year],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-col gap-1">
                <dt className="text-[10px] tracking-[0.14em] uppercase text-[var(--ca-gray-500)]">{k}</dt>
                <dd className="text-[var(--ca-ink)] font-medium">{v}</dd>
              </div>
            ))}
          </dl>
          <h3 className="font-display font-semibold text-[15px] mt-8 pt-6 border-t border-[var(--ca-gray-200)]">Contacto</h3>
          <ul className="mt-4 space-y-3 text-[13px] text-[var(--ca-gray-700)]">
            <li className="flex items-center gap-3"><Mail size={14} className="text-[var(--ca-gray-400)]" /> nzinga.domingos@aluno.uan.ao</li>
            <li className="flex items-center gap-3"><Phone size={14} className="text-[var(--ca-gray-400)]" /> +244 923 000 000</li>
            <li className="flex items-center gap-3"><MapPin size={14} className="text-[var(--ca-gray-400)]" /> Bairro Maianga, Luanda</li>
          </ul>
          <div className="mt-6 flex gap-3">
            <Button variant="primary" size="md">Editar perfil</Button>
            <Button variant="outline" size="md">Alterar palavra-passe</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
