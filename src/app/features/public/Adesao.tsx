import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Building2, GraduationCap, Users, BookOpen, ClipboardList, FileSignature,
  Wallet, CreditCard, Receipt, BarChart3, ShieldCheck, Award, FileText,
  CheckCircle2, ArrowRight, Banknote, Smartphone, Building, Send, Sparkles,
} from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { Badge } from '../../design-system/Badge';
import { Button } from '../../design-system/Button';
import { SectionHeading } from '../../design-system/SectionHeading';
import { Input } from '../../design-system/Input';

const academicModules = [
  { icon: Building2,    title: 'Gestão de Faculdades',      desc: 'Cadastro e gestão centralizada de todas as faculdades, departamentos e unidades orgânicas.' },
  { icon: BookOpen,     title: 'Cursos & Planos Curriculares', desc: 'Estruturação de cursos, anos lectivos, grelhas curriculares e unidades curriculares.' },
  { icon: GraduationCap,title: 'Professores & Docência',    desc: 'Atribuição de docentes, regimes e ligação a disciplinas e turmas.' },
  { icon: Users,        title: 'Alunos & Matrícula',         desc: 'Inscrições, transferências, históricos académicos e gestão de turmas.' },
  { icon: ShieldCheck,  title: 'Utilizadores & Permissões',   desc: 'Perfis institucionais, papéis e auditoria por unidade orgânica.' },
  { icon: ClipboardList,title: 'Lançamento de Notas & Pautas', desc: 'Avaliações contínuas, exames, recursos e geração automática de pautas.' },
  { icon: BarChart3,    title: 'Aproveitamento & Análise',    desc: 'Indicadores por turma, faculdade e universidade — taxa de aprovação, médias e desistências.' },
  { icon: FileSignature,title: 'Publicação de Resultados',    desc: 'Divulgação oficial controlada, com versionamento e canais ao aluno.' },
];

const documents = [
  { name: 'Certificado de Habilitações',          fee: '15 000 Kz',  desc: 'Conclusão de licenciatura, mestrado ou doutoramento.' },
  { name: 'Declaração com Nota Final',            fee: '7 500 Kz',   desc: 'Declaração oficial com média e classificação por disciplina.' },
  { name: 'Declaração de Frequência',             fee: '3 500 Kz',   desc: 'Comprovativo de inscrição e situação académica activa.' },
  { name: 'Histórico Académico',                  fee: '6 000 Kz',   desc: 'Relação completa de disciplinas, créditos e classificações.' },
  { name: 'Programa Curricular Carimbado',        fee: '5 000 Kz',   desc: 'Programa oficial das unidades curriculares concluídas.' },
  { name: 'Carta de Recomendação Institucional',  fee: '4 500 Kz',   desc: 'Emissão pela direcção, com assinatura digital reconhecida.' },
  { name: 'Segunda Via de Documento',             fee: '2 500 Kz',   desc: 'Reemissão de qualquer documento já emitido.' },
];

const paymentMethods = [
  { icon: Banknote,   name: 'Multicaixa Express',   desc: 'Pagamentos imediatos com referência única por aluno.' },
  { icon: Smartphone, name: 'PayWay / E-Kwanza',     desc: 'Carteiras móveis para o estudante final.' },
  { icon: Building,   name: 'Transferência Bancária',desc: 'Conta institucional dedicada com conciliação automática.' },
  { icon: CreditCard, name: 'Cartão Visa / MC',      desc: 'Cobrança internacional para alunos e parcerias.' },
];

export function Adesao() {
  return (
    <>
      <Hero />
      <Why />
      <AcademicModules />
      <FinancialModule />
      <DocumentsTable />
      <ProcessSteps />
      <ApplicationForm />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[520px] lg:min-h-[600px] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, x: '1.5%', y: '-1%' }}
        animate={{ scale: 1, x: '0%', y: '0%' }}
        transition={{ duration: 14, ease: [0.16, 1, 0.3, 1] }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=2000&q=85"
          alt="Edifício institucional universitário"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--ca-ink)] via-[var(--ca-ink)]/70 to-[var(--ca-ink)]/40" />
      <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8 pt-24 lg:pt-32 pb-14 lg:pb-16 text-white">
        <div className="flex items-center gap-2 mb-5">
          <Badge tone="gold">Programa Institucional</Badge>
          <Badge tone="ink">Para Universidades</Badge>
        </div>
        <h1 className="font-display font-bold tracking-[-0.025em] text-[clamp(32px,5vw,56px)] text-white leading-[1.05] max-w-3xl">
          Adira ao Campus Angola e digitalize a sua instituição.
        </h1>
        <p className="mt-6 text-[15px] lg:text-[16px] text-white/80 leading-relaxed max-w-2xl">
          Solicite a adesão da sua universidade ao ecossistema nacional. Receberá uma área dedicada
          para gerir faculdades, cursos, planos curriculares, professores, alunos, notas, certificados
          e toda a sua operação financeira académica num único sistema.
        </p>
        <div className="mt-8 flex items-center gap-3 flex-wrap">
          <a href="#formulario"><Button variant="gold" size="lg" rightIcon={<ArrowRight size={16} />}>Solicitar adesão</Button></a>
          <a href="#modulos"><Button variant="ghost" size="lg" className="text-white hover:bg-white/10">Ver módulos incluídos</Button></a>
        </div>
      </div>
    </section>
  );
}

function Why() {
  const points = [
    { icon: ShieldCheck, t: 'Validação institucional', d: 'Selo oficial e integração com o Ministério do Ensino Superior.' },
    { icon: Sparkles,    t: 'Implementação assistida', d: 'Equipa de onboarding dedicada — migração de dados em até 30 dias.' },
    { icon: BarChart3,   t: 'Inteligência académica',  d: 'Painéis executivos para reitoria, decanos e direcção financeira.' },
    { icon: Award,       t: 'Reconhecimento nacional', d: 'A sua universidade fica visível no portal público e no motor de pesquisa.' },
  ];
  return (
    <section className="max-w-[1280px] mx-auto px-5 lg:px-8 py-16 lg:py-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {points.map(p => (
          <div key={p.t} className="bg-white border border-[var(--ca-gray-200)] rounded-[14px] p-6">
            <span className="size-10 rounded-md bg-[var(--ca-primary-soft)] text-[var(--ca-primary)] flex items-center justify-center">
              <p.icon size={18} />
            </span>
            <div className="font-display font-semibold text-[16px] mt-4 tracking-tight">{p.t}</div>
            <p className="text-[13px] text-[var(--ca-gray-600)] mt-2 leading-relaxed">{p.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AcademicModules() {
  return (
    <section id="modulos" className="bg-[var(--ca-paper-2)] border-y border-[var(--ca-gray-200)]">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8 py-20 lg:py-24">
        <SectionHeading
          eyebrow="Gestão Académica"
          title="Tudo o que a sua universidade precisa, num só sistema."
          description="Da estrutura organizativa à publicação dos resultados — cobertura completa do ciclo académico."
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {academicModules.map(m => (
            <div key={m.title} className="bg-white border border-[var(--ca-gray-200)] rounded-[14px] p-5 hover:border-[var(--ca-ink)] transition-colors">
              <span className="size-10 rounded-md bg-[var(--ca-gold-soft)] text-[var(--ca-warning)] flex items-center justify-center">
                <m.icon size={18} />
              </span>
              <div className="font-display font-semibold text-[15px] mt-4 tracking-tight">{m.title}</div>
              <p className="text-[12.5px] text-[var(--ca-gray-600)] mt-2 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {[
            { icon: Award,    t: 'Emissão de Certificados',      d: 'Geração e assinatura digital com QR de validação pública.' },
            { icon: FileText, t: 'Declaração de Frequência',     d: 'Solicitação pelo aluno e emissão automática validada.' },
            { icon: FileSignature, t: 'Declaração com Nota',     d: 'Inclui média final e classificação detalhada por disciplina.' },
          ].map(b => (
            <div key={b.t} className="bg-[var(--ca-ink)] text-white rounded-[14px] p-6">
              <span className="size-10 rounded-md bg-white/10 text-[var(--ca-gold)] flex items-center justify-center">
                <b.icon size={18} />
              </span>
              <div className="font-display font-semibold text-[16px] mt-4">{b.t}</div>
              <p className="text-[13px] text-white/70 mt-2 leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinancialModule() {
  return (
    <section className="max-w-[1280px] mx-auto px-5 lg:px-8 py-20 lg:py-24">
      <SectionHeading
        eyebrow="Gestão Financeira"
        title="Receba, controle e concilie todos os pagamentos académicos."
        description="A sua universidade configura os métodos de pagamento aceites e monitoriza as entradas em tempo real — emolumentos, certificados, declarações e segundas vias."
      />
      <div className="mt-10 grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
          {paymentMethods.map(m => (
            <div key={m.name} className="bg-white border border-[var(--ca-gray-200)] rounded-[14px] p-5">
              <span className="size-10 rounded-md bg-[var(--ca-primary-soft)] text-[var(--ca-primary)] flex items-center justify-center">
                <m.icon size={18} />
              </span>
              <div className="font-display font-semibold text-[15px] mt-4 tracking-tight">{m.name}</div>
              <p className="text-[12.5px] text-[var(--ca-gray-600)] mt-2 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="lg:col-span-5 bg-[var(--ca-ink)] text-white rounded-[14px] p-7">
          <div className="flex items-center gap-3">
            <span className="size-10 rounded-md bg-[var(--ca-gold)] text-[var(--ca-ink)] flex items-center justify-center">
              <Wallet size={18} />
            </span>
            <span className="text-[11px] tracking-[0.16em] uppercase text-white/50">Painel financeiro</span>
          </div>
          <h3 className="font-display font-bold text-[22px] mt-5 leading-snug tracking-tight">
            Tesouraria académica em tempo real.
          </h3>
          <ul className="mt-5 space-y-3">
            {[
              'Conciliação automática de entradas por método de pagamento',
              'Referências únicas por aluno, documento e serviço',
              'Relatórios diários, mensais e por unidade orgânica',
              'Tabela de preços editável de documentos e emolumentos',
              'Histórico completo de recibos e facturas emitidas',
            ].map(l => (
              <li key={l} className="flex items-start gap-2.5 text-[13.5px] text-white/80">
                <CheckCircle2 size={16} className="text-[var(--ca-gold)] shrink-0 mt-0.5" />
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function DocumentsTable() {
  return (
    <section className="bg-[var(--ca-paper-2)] border-y border-[var(--ca-gray-200)]">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8 py-20 lg:py-24">
        <SectionHeading
          eyebrow="Tabela de Documentos"
          title="Cada documento emitido tem um valor configurável."
          description="A universidade define a sua tabela de preços. Os valores apresentados são uma referência institucional média."
        />
        <div className="mt-10 bg-white border border-[var(--ca-gray-200)] rounded-[14px] overflow-hidden">
          <div className="hidden md:grid grid-cols-12 px-6 py-4 bg-[var(--ca-gray-100)] border-b border-[var(--ca-gray-200)]">
            <div className="col-span-5 text-[11px] font-semibold tracking-[0.14em] uppercase text-[var(--ca-gray-600)]">Documento</div>
            <div className="col-span-5 text-[11px] font-semibold tracking-[0.14em] uppercase text-[var(--ca-gray-600)]">Descrição</div>
            <div className="col-span-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[var(--ca-gray-600)] text-right">Valor de referência</div>
          </div>
          {documents.map((d, i) => (
            <div key={d.name} className={`grid md:grid-cols-12 gap-2 md:gap-4 px-6 py-5 ${i !== 0 ? 'border-t border-[var(--ca-gray-200)]' : ''}`}>
              <div className="md:col-span-5 flex items-center gap-3">
                <span className="size-9 rounded-md bg-[var(--ca-gold-soft)] text-[var(--ca-warning)] flex items-center justify-center shrink-0">
                  <Receipt size={15} />
                </span>
                <div className="font-display font-semibold text-[14px] tracking-tight">{d.name}</div>
              </div>
              <div className="md:col-span-5 text-[13px] text-[var(--ca-gray-600)] leading-relaxed">{d.desc}</div>
              <div className="md:col-span-2 md:text-right">
                <span className="font-display font-bold text-[16px] tracking-tight text-[var(--ca-ink)]">{d.fee}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-5 text-[12px] text-[var(--ca-gray-500)] max-w-2xl">
          Cada universidade tem autonomia total para configurar a sua tabela. Os valores acima representam médias praticadas no sistema nacional e servem apenas como referência inicial.
        </p>
      </div>
    </section>
  );
}

function ProcessSteps() {
  const steps = [
    { n: '01', t: 'Submissão',         d: 'A universidade preenche o pedido oficial de adesão com dados institucionais.' },
    { n: '02', t: 'Validação',         d: 'A equipa Campus Angola valida a documentação junto do MES e responde em até 10 dias.' },
    { n: '03', t: 'Onboarding',        d: 'Configuração da área institucional, importação de dados e formação dos utilizadores.' },
    { n: '04', t: 'Activação Pública', d: 'A universidade fica visível no portal e disponível para candidaturas e gestão.' },
  ];
  return (
    <section className="max-w-[1280px] mx-auto px-5 lg:px-8 py-20 lg:py-24">
      <SectionHeading
        eyebrow="Processo de Adesão"
        title="Quatro passos. Acompanhamento institucional dedicado."
      />
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map(s => (
          <div key={s.n} className="bg-white border border-[var(--ca-gray-200)] rounded-[14px] p-6 relative overflow-hidden">
            <span className="font-display font-bold text-[44px] leading-none text-[var(--ca-gold)] tracking-[-0.03em]">{s.n}</span>
            <div className="font-display font-semibold text-[16px] mt-4 tracking-tight">{s.t}</div>
            <p className="text-[13px] text-[var(--ca-gray-600)] mt-2 leading-relaxed">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="formulario" className="bg-[var(--ca-ink)]">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5 text-white">
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[var(--ca-gold)]">Solicitar adesão</span>
            <h2 className="font-display font-bold tracking-[-0.02em] text-[clamp(28px,4vw,40px)] mt-4 leading-[1.05] text-white">
              Pronta para fazer parte do ecossistema nacional?
            </h2>
            <p className="mt-5 text-[14px] text-white/70 leading-relaxed">
              Preencha o formulário institucional. Será contactado por um representante Campus Angola
              em até 48 horas úteis para iniciar o processo formal.
            </p>
            <div className="mt-8 space-y-3">
              {['Análise sem custo de adesão', 'Reunião de alinhamento institucional', 'Migração de dados acompanhada', 'Formação de equipas incluída'].map(l => (
                <div key={l} className="flex items-start gap-2.5 text-[13.5px] text-white/80">
                  <CheckCircle2 size={16} className="text-[var(--ca-gold)] shrink-0 mt-0.5" />
                  {l}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
              className="bg-white rounded-[16px] p-6 lg:p-8 border border-white/10"
            >
              {submitted ? (
                <div className="text-center py-10">
                  <span className="inline-flex size-14 rounded-full bg-[var(--ca-success-soft)] text-[var(--ca-success)] items-center justify-center">
                    <CheckCircle2 size={26} />
                  </span>
                  <h3 className="font-display font-bold text-[22px] mt-5 tracking-tight">Pedido recebido</h3>
                  <p className="text-[13.5px] text-[var(--ca-gray-600)] mt-2 max-w-md mx-auto">
                    A equipa Campus Angola entrará em contacto com a sua instituição em até 48h úteis. Obrigado pela confiança.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input label="Nome da instituição" placeholder="Ex.: Universidade Agostinho Neto" required />
                    <Input label="Sigla" placeholder="UAN" required />
                    <Input label="Província" placeholder="Luanda" required />
                    <Input label="Natureza" placeholder="Pública / Privada" required />
                    <Input label="Reitor / Representante" placeholder="Nome completo" required />
                    <Input label="Cargo" placeholder="Reitor, Vice-Reitor…" required />
                    <Input label="Email institucional" type="email" placeholder="reitoria@instituicao.ao" required />
                    <Input label="Telefone" placeholder="+244 9XX XXX XXX" required />
                  </div>
                  <div className="mt-4">
                    <label className="block text-[12px] font-medium tracking-tight text-[var(--ca-gray-700)] mb-1.5">Mensagem institucional</label>
                    <textarea
                      rows={4}
                      placeholder="Descreva brevemente a estrutura actual da universidade, número de faculdades e expectativas com a adesão."
                      className="w-full bg-white border border-[var(--ca-gray-300)] rounded-[10px] px-3.5 py-3 text-[14px] text-[var(--ca-ink)] placeholder:text-[var(--ca-gray-400)] outline-none focus:border-[var(--ca-ink)] focus:ring-2 focus:ring-[var(--ca-ink)]/10"
                    />
                  </div>
                  <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
                    <p className="text-[11.5px] text-[var(--ca-gray-500)] max-w-md">
                      Ao submeter, autoriza a verificação dos dados institucionais junto do Ministério do Ensino Superior.
                    </p>
                    <Button type="submit" variant="primary" size="lg" rightIcon={<Send size={15} />}>
                      Submeter pedido
                    </Button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
