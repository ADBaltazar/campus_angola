import { ReactNode, createContext, useContext, useState } from 'react';
import { cn } from '../shared/cn';

interface TabsCtx {
  value: string;
  setValue: (v: string) => void;
}
const Ctx = createContext<TabsCtx | null>(null);

export function Tabs({ value: controlled, defaultValue, onValueChange, children, className }: {
  value?: string;
  defaultValue?: string;
  onValueChange?: (v: string) => void;
  children: ReactNode;
  className?: string;
}) {
  const [internal, setInternal] = useState(defaultValue || '');
  const value = controlled ?? internal;
  const setValue = (v: string) => {
    if (controlled === undefined) setInternal(v);
    onValueChange?.(v);
  };
  return (
    <Ctx.Provider value={{ value, setValue }}>
      <div className={className}>{children}</div>
    </Ctx.Provider>
  );
}

export function TabsList({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('flex items-center gap-1 border-b border-[var(--ca-gray-200)]', className)} role="tablist">
      {children}
    </div>
  );
}

export function TabsTrigger({ value, children, className }: { value: string; children: ReactNode; className?: string }) {
  const ctx = useContext(Ctx)!;
  const active = ctx.value === value;
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={() => ctx.setValue(value)}
      className={cn(
        'relative px-4 h-10 text-[13px] font-medium tracking-tight transition-colors',
        active ? 'text-[var(--ca-ink)]' : 'text-[var(--ca-gray-500)] hover:text-[var(--ca-ink)]',
        className
      )}
    >
      {children}
      {active && (
        <span className="absolute left-3 right-3 -bottom-px h-[2px] bg-[var(--ca-primary)] rounded-full" />
      )}
    </button>
  );
}

export function TabsContent({ value, children, className }: { value: string; children: ReactNode; className?: string }) {
  const ctx = useContext(Ctx)!;
  if (ctx.value !== value) return null;
  return <div className={className}>{children}</div>;
}
