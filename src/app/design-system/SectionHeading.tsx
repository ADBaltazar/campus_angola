import { ReactNode } from 'react';
import { cn } from '../shared/cn';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  action,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(
      'flex items-end justify-between gap-6 flex-wrap',
      align === 'center' && 'flex-col items-center text-center',
      className
    )}>
      <div className={cn(align === 'center' && 'flex flex-col items-center')}>
        {eyebrow && (
          <div className="flex items-center gap-2 mb-3">
            <span className="ca-rule-gold" />
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[var(--ca-gold)]">{eyebrow}</span>
          </div>
        )}
        <h2 className="font-display text-[clamp(24px,3vw,36px)] font-bold tracking-[-0.02em] text-[var(--ca-ink)] leading-tight max-w-2xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-[15px] text-[var(--ca-gray-600)] max-w-2xl leading-relaxed">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}
