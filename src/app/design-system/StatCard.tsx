import { ReactNode } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '../shared/cn';

interface StatCardProps {
  label: string;
  value: string | number;
  delta?: number;
  deltaLabel?: string;
  icon?: ReactNode;
  accent?: 'red' | 'gold' | 'ink';
  suffix?: string;
}

const accentBars = {
  red: 'bg-[var(--ca-primary)]',
  gold: 'bg-[var(--ca-gold)]',
  ink: 'bg-[var(--ca-ink)]',
};

export function StatCard({ label, value, delta, deltaLabel, icon, accent = 'ink', suffix }: StatCardProps) {
  const trend = delta === undefined ? null : delta > 0 ? 'up' : delta < 0 ? 'down' : 'flat';
  return (
    <div className="relative bg-white border border-[var(--ca-gray-200)] rounded-[12px] p-5 overflow-hidden">
      <div className={cn('absolute left-0 top-0 bottom-0 w-[3px]', accentBars[accent])} />
      <div className="flex items-start justify-between">
        <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[var(--ca-gray-500)]">{label}</span>
        {icon && <span className="text-[var(--ca-gray-400)]">{icon}</span>}
      </div>
      <div className="mt-3 flex items-baseline gap-1.5">
        <span className="font-display text-[28px] font-bold tracking-[-0.02em] text-[var(--ca-ink)] leading-none">{value}</span>
        {suffix && <span className="text-[13px] text-[var(--ca-gray-500)]">{suffix}</span>}
      </div>
      {trend && (
        <div className="mt-2 flex items-center gap-1.5">
          <span
            className={cn(
              'inline-flex items-center gap-0.5 text-[11px] font-medium',
              trend === 'up' && 'text-[var(--ca-success)]',
              trend === 'down' && 'text-[var(--ca-danger)]',
              trend === 'flat' && 'text-[var(--ca-gray-500)]'
            )}
          >
            {trend === 'up' && <TrendingUp size={12} />}
            {trend === 'down' && <TrendingDown size={12} />}
            {trend === 'flat' && <Minus size={12} />}
            {Math.abs(delta!)}%
          </span>
          {deltaLabel && <span className="text-[11px] text-[var(--ca-gray-500)]">{deltaLabel}</span>}
        </div>
      )}
    </div>
  );
}
