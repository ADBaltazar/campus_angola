import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../shared/cn';

type Variant = 'primary' | 'secondary' | 'ghost' | 'gold' | 'outline' | 'danger';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
}

const variants: Record<Variant, string> = {
  primary: 'bg-[var(--ca-primary)] text-white hover:bg-[var(--ca-primary-deep)] active:bg-[var(--ca-primary-deep)] shadow-[0_1px_2px_rgba(192,24,42,0.3)]',
  secondary: 'bg-[var(--ca-ink)] text-white hover:bg-[var(--ca-gray-700)]',
  ghost: 'bg-transparent text-[var(--ca-ink)] hover:bg-[var(--ca-gray-100)]',
  gold: 'bg-[var(--ca-gold)] text-[var(--ca-ink)] hover:brightness-95',
  outline: 'bg-transparent text-[var(--ca-ink)] border border-[var(--ca-gray-300)] hover:border-[var(--ca-ink)] hover:bg-[var(--ca-gray-100)]',
  danger: 'bg-[var(--ca-danger)] text-white hover:bg-[var(--ca-primary-deep)]',
};

const sizes: Record<Size, string> = {
  sm: 'h-8 px-3 text-[13px] gap-1.5',
  md: 'h-10 px-4 text-[13px] gap-2',
  lg: 'h-12 px-6 text-[14px] gap-2',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', leftIcon, rightIcon, loading, fullWidth, className, children, disabled, ...rest },
  ref
) {
  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium tracking-tight transition-[background-color,color,box-shadow,transform] duration-150 ease-out disabled:opacity-50 disabled:cursor-not-allowed select-none whitespace-nowrap',
        'active:scale-[0.99]',
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      {...rest}
    >
      {loading ? (
        <span className="inline-block size-3.5 rounded-full border-2 border-current border-r-transparent animate-spin" />
      ) : leftIcon}
      {children}
      {rightIcon}
    </button>
  );
});
