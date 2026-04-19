import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@repo/utils';
import { buttonVariants } from './button.styles.js';

export const Button = React.forwardRef(
  ({ 
    className, 
    variant, 
    size, 
    asChild = false,
    disabled = false,
    type = 'button',
    onClick,
    children,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : 'button';
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        type={!asChild ? type : undefined}
        disabled={!asChild ? disabled : undefined}
        onClick={onClick}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';
