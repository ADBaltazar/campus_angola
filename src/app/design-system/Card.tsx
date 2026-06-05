import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '../shared/cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  flat?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, interactive, flat, ...rest }, ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        'bg-white border border-[var(--ca-gray-200)] rounded-[12px]',
        !flat && 'shadow-[0_1px_3px_rgba(14,14,16,0.04)]',
        interactive && 'transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(14,14,16,0.08)] hover:border-[var(--ca-gray-300)] cursor-pointer',
        className
      )}
      {...rest}
    />
  );
});

export function CardHeader({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('px-5 pt-5 pb-3', className)} {...rest} />;
}

export function CardBody({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('px-5 pb-5', className)} {...rest} />;
}

export function CardFooter({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('px-5 py-4 border-t border-[var(--ca-gray-200)]', className)} {...rest} />;
}
