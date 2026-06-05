import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../shared/cn';

type Tone = 'red' | 'gold' | 'success' | 'warning' | 'info' | 'gray' | 'ink';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
  dot?: boolean;
  children?: ReactNode;
}

const tones: Record<Tone, string> = {
  red: 'bg-[var(--ca-primary-soft)] text-[var(--ca-primary-deep)]',
  gold: 'bg-[var(--ca-gold-soft)] text-[var(--ca-warning)]',
  success: 'bg-[var(--ca-success-soft)] text-[var(--ca-success)]',
  warning: 'bg-[var(--ca-warning-soft)] text-[var(--ca-warning)]',
  info: 'bg-[var(--ca-info-soft)] text-[var(--ca-info)]',
  gray: 'bg-[var(--ca-gray-100)] text-[var(--ca-gray-600)]',
  ink: 'bg-[var(--ca-ink)] text-white',
};

const dotColors: Record<Tone, string> = {
  red: 'bg-[var(--ca-primary)]',
  gold: 'bg-[var(--ca-gold)]',
  success: 'bg-[var(--ca-success)]',
  warning: 'bg-[var(--ca-warning)]',
  info: 'bg-[var(--ca-info)]',
  gray: 'bg-[var(--ca-gray-400)]',
  ink: 'bg-white',
};

export function Badge({ tone = 'gray', dot, className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 h-6 text-[11px] font-medium tracking-wide whitespace-nowrap',
        tones[tone],
        className
      )}
      {...rest}
    >
      {dot && <span className={cn('size-1.5 rounded-full', dotColors[tone])} />}
      {children}
    </span>
  );
}
