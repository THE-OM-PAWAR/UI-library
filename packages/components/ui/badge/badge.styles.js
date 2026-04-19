import { cva } from 'class-variance-authority';

export const badgeVariantsConfig = {
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
      destructive: 'bg-destructive text-destructive-foreground',
      outline: 'border border-input text-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};

export const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',
  badgeVariantsConfig
);