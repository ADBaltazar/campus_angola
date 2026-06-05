import { forwardRef, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react';
import { cn } from '../shared/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  leftIcon?: ReactNode;
  rightSlot?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, hint, error, leftIcon, rightSlot, className, id, ...rest }, ref
) {
  const inputId = id || rest.name;
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-[12px] font-medium text-[var(--ca-gray-600)] tracking-wide">
          {label}
        </label>
      )}
      <div
        className={cn(
          'group flex items-center gap-2 h-11 px-3.5 bg-white border rounded-[10px] transition-colors duration-150',
          error ? 'border-[var(--ca-danger)]' : 'border-[var(--ca-gray-300)] focus-within:border-[var(--ca-ink)]'
        )}
      >
        {leftIcon && <span className="text-[var(--ca-gray-400)]">{leftIcon}</span>}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'flex-1 bg-transparent outline-none text-[14px] placeholder:text-[var(--ca-gray-400)] text-[var(--ca-ink)]',
            className
          )}
          {...rest}
        />
        {rightSlot}
      </div>
      {(hint || error) && (
        <span className={cn('text-[11px]', error ? 'text-[var(--ca-danger)]' : 'text-[var(--ca-gray-500)]')}>
          {error || hint}
        </span>
      )}
    </div>
  );
});

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, hint, error, className, id, ...rest }, ref
) {
  const inputId = id || rest.name;
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-[12px] font-medium text-[var(--ca-gray-600)] tracking-wide">{label}</label>
      )}
      <textarea
        ref={ref}
        id={inputId}
        className={cn(
          'min-h-24 px-3.5 py-3 bg-white border rounded-[10px] outline-none text-[14px] resize-none placeholder:text-[var(--ca-gray-400)] text-[var(--ca-ink)] transition-colors duration-150',
          error ? 'border-[var(--ca-danger)]' : 'border-[var(--ca-gray-300)] focus:border-[var(--ca-ink)]',
          className
        )}
        {...rest}
      />
      {(hint || error) && (
        <span className={cn('text-[11px]', error ? 'text-[var(--ca-danger)]' : 'text-[var(--ca-gray-500)]')}>
          {error || hint}
        </span>
      )}
    </div>
  );
});
