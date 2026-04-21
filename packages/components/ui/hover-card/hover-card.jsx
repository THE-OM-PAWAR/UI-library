import React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { hoverCardStyles } from './hover-card.styles';
import { cn } from '@repo/utils';

export const HoverCard = HoverCardPrimitive.Root;
export const HoverCardTrigger = HoverCardPrimitive.Trigger;

export const HoverCardContent = ({ className, align = "center", sideOffset = 4, ...props }) => (
  <HoverCardPrimitive.Content
    align={align}
    sideOffset={sideOffset}
    className={cn(hoverCardStyles(), className)}
    {...props}
  />
);