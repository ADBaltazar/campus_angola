import { ReactNode } from 'react';
import { CheckCircle2, AlertTriangle, AlertCircle, Info } from 'lucide-react';
import { cn } from '../shared/cn';

type Tone = 'success' | 'warning' | 'danger' | 'info';

const styles: Record<Tone, { bg: string; border: string; text: string; icon: ReactNode }> = {
  success: { bg: 'bg-[var(--ca-success-soft)]', border: 'border-[var(--ca-success)]', text: 'text-[var(--ca-success)]', icon: <CheckCircle2 size={16} /> },
  warning: { bg: 'bg-[var(--ca-warning-soft)]', border: 'border-[var(--ca-warning)]', text: 'text-[var(--ca-warning)]', icon: <AlertTriangle size={16} /> },
  danger:  { bg: 'bg-[var(--ca-primary-soft)]', border: 'border-[var(--ca-danger)]',  text: 'text-[var(--ca-primary-deep)]', icon: <AlertCircle size={16} /> },
  info:    { bg: 'bg-[var(--ca-info-soft)]',    border: 'border-[var(--ca-info)]',    text: 'text-[var(--ca-info)]', icon: <Info size={16} /> },
};

export function Alert({ tone = 'info', title, children, className }: {
  tone?: Tone; title?: string; children?: ReactNode; className?: string;
}) {
  const s = styles[tone];
  return (
    <div className={cn('flex gap-3 px-4 py-3 rounded-[10px] border-l-[3px]', s.bg, s.border, className)}>
      <span className={cn('mt-0.5', s.text)}>{s.icon}</span>
      <div className="flex-1">
        {title && <div className={cn('font-medium text-[13px]', s.text)}>{title}</div>}
        {children && <div className="text-[13px] text-[var(--ca-gray-700)] mt-0.5">{children}</div>}
      </div>
    </div>
  );
}
