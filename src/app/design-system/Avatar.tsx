import { cn } from '../shared/cn';

export function Avatar({ name, src, size = 36, className }: { name: string; src?: string; size?: number; className?: string }) {
  const initials = name.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase();
  return (
    <span
      className={cn('inline-flex items-center justify-center rounded-full bg-[var(--ca-ink)] text-white font-medium overflow-hidden flex-shrink-0', className)}
      style={{ width: size, height: size, fontSize: Math.round(size * 0.36) }}
    >
      {src ? <img src={src} alt={name} className="w-full h-full object-cover" /> : initials}
    </span>
  );
}
