import React from 'react';
import { cn } from '@repo/utils';
import { badgeVariants } from './badge.styles.js';

export const Badge = React.forwardRef(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';