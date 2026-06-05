import { cn } from '../shared/cn';

interface ProgressProps {
  value: number;
  tone?: 'gold' | 'red' | 'success' | 'ink';
  size?: 'sm' | 'md';
  className?: string;
}

const tones = {
  gold: 'bg-[var(--ca-gold)]',
  red: 'bg-[var(--ca-primary)]',
  success: 'bg-[var(--ca-success)]',
  ink: 'bg-[var(--ca-ink)]',
};

export function Progress({ value, tone = 'gold', size = 'sm', className }: ProgressProps) {
  return (
    <div
      className={cn('w-full bg-[var(--ca-gray-200)] rounded-full overflow-hidden', size === 'sm' ? 'h-1.5' : 'h-2.5', className)}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={cn('h-full rounded-full transition-[width] duration-500 ease-out', tones[tone])}
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}
