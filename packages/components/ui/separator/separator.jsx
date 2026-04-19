import React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cn } from '@repo/utils';

const Separator = React.forwardRef(
  ({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => {
    return (
      <SeparatorPrimitive.Root
        ref={ref}
        data-slot="separator"
        decorative={decorative}
        orientation={orientation}
        className={cn(
          'shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
          className
        )}
        {...props}
      />
    );
  }
);

Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
