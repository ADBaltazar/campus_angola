import { Link } from 'react-router';
import { cn } from '../shared/cn';

export function Logo({ inverted, className }: { inverted?: boolean; className?: string }) {
  return (
    <Link to="/" className={cn('inline-flex items-center gap-2.5 group', className)}>
      <span className="relative inline-flex items-center justify-center">
        <span className="size-9 rounded-[10px] bg-[var(--ca-primary)] flex items-center justify-center">
          <span className="font-display text-white font-bold text-[15px] leading-none tracking-tight">CA</span>
        </span>
        <span className="absolute -bottom-1 -right-1 size-3 rounded-full bg-[var(--ca-gold)] border-2 border-[var(--ca-paper)]" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn('font-display font-bold text-[15px] tracking-tight', inverted ? 'text-white' : 'text-[var(--ca-ink)]')}>
          Campus<span className="text-[var(--ca-primary)]">Angola</span>
        </span>
        <span className={cn('text-[10px] tracking-[0.18em] uppercase mt-0.5', inverted ? 'text-white/60' : 'text-[var(--ca-gray-500)]')}>
          Ensino Superior
        </span>
      </span>
    </Link>
  );
}
