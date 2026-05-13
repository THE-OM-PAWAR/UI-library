# @shery-ui/config

Production-grade design system configuration powered by Radix UI Colors.

## What's Included

- **Radix UI Colors**: 12-step color scales with alpha variants
- **Semantic Tokens**: Production-ready color tokens for components
- **Tailwind Config**: Pre-configured Tailwind setup
- **Dark Mode**: Automatic dark mode support
- **Theme Generator**: Utility for switching accent colors

## Installation

This package is already installed as part of the monorepo. To use it in your app:

```json
{
  "dependencies": {
    "@shery-ui/config": "workspace:*"
  }
}
```

## Quick Start

### 1. Import Tokens in Your CSS

```css
/* In your main CSS file */
@import '@shery-ui/config/tokens.css';

@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 2. Extend Tailwind Config

```js
// tailwind.config.js
import baseConfig from '@shery-ui/config/tailwind.config.js';

export default {
  ...baseConfig,
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../../packages/components/**/*.{js,jsx}',
  ],
};
```

### 3. Use Semantic Tokens in Components

```jsx
<button className="bg-primary hover:bg-primary-hover text-primary-foreground">
  Click me
</button>
```

## Color System

### Semantic Tokens (Use These!)

```jsx
// Primary actions
bg-primary hover:bg-primary-hover text-primary-foreground

// Secondary actions
bg-secondary hover:bg-secondary-hover text-secondary-foreground

// Destructive actions
bg-destructive hover:bg-destructive-hover text-destructive-foreground

// Muted elements
bg-muted text-muted-foreground

// Borders
border-border hover:border-border-hover

// Text
text-foreground text-muted-foreground

// Overlays
bg-overlay
```

### Color Scales (Advanced Use)

```jsx
// Gray scale (1-12)
bg-gray-1 bg-gray-2 ... bg-gray-12

// Accent scale (1-12)
bg-accent-scale-1 ... bg-accent-scale-12

// Alpha variants
bg-gray-a8 bg-accent-a6
```

## Dark Mode

Add the `dark` class to your root element:

```jsx
<html className="dark">
  {/* All colors automatically switch to dark variants */}
</html>
```

## Changing Accent Color

Current accent: **Indigo**

To change to a different color (e.g., Blue):

1. Edit `packages/config/tokens.css`
2. Replace `indigo` imports with `blue`:

```css
@import "@radix-ui/colors/blue.css";
@import "@radix-ui/colors/blue-alpha.css";
@import "@radix-ui/colors/blue-dark.css";
@import "@radix-ui/colors/blue-dark-alpha.css";
```

3. Update variable mappings:

```css
--accent-1: var(--blue-1);
--accent-2: var(--blue-2);
/* ... etc */
```

Or use the theme generator utility:

```js
import { generateColorImports, generateColorMappings } from '@shery-uiconfig/theme-generator.js';

console.log(generateColorImports('blue', 'slate'));
console.log(generateColorMappings('blue', 'slate'));
```

## Available Colors

### Accent Colors
- indigo (current)
- blue
- violet
- purple
- pink
- crimson
- red
- orange
- amber
- yellow
- lime
- green
- teal
- cyan
- sky

### Gray Colors
- slate (current)
- gray
- mauve
- sage
- olive
- sand

## Documentation

- [COLOR_SYSTEM.md](./COLOR_SYSTEM.md) - Complete color system documentation
- [EXAMPLES.md](./EXAMPLES.md) - Component examples and patterns
- [Radix Colors Docs](https://www.radix-ui.com/colors) - Official Radix Colors documentation

## Architecture

```
packages/config/
├── tokens.css              # Radix color imports + semantic tokens
├── tailwind.config.js      # Tailwind configuration
├── theme-generator.js      # Utility for generating themes
├── COLOR_SYSTEM.md         # Complete documentation
├── EXAMPLES.md             # Usage examples
└── package.json
```

## Features

✅ 12-step color scales for every color  
✅ Alpha variants for overlays and transparency  
✅ Automatic dark mode support  
✅ Semantic tokens for consistency  
✅ Accessible color combinations (WCAG AA/AAA)  
✅ Easy theme switching  
✅ Production-ready  

## Best Practices

1. **Always use semantic tokens** in components
2. **Test in dark mode** during development
3. **Use alpha variants** for overlays
4. **Leverage hover states** instead of opacity
5. **Keep custom tokens minimal** - use what's provided

## Migration from Old System

The old system used hardcoded HSL values:

```css
/* Old */
--primary: 222.2 47.4% 11.2%;
```

The new system uses Radix scales:

```css
/* New */
--primary: var(--accent-9);
```

All components automatically work with the new system. No changes needed!

## Support

For questions or issues:
1. Check [COLOR_SYSTEM.md](./COLOR_SYSTEM.md) for detailed documentation
2. Review [EXAMPLES.md](./EXAMPLES.md) for usage patterns
3. Refer to [Radix Colors docs](https://www.radix-ui.com/colors)

## License

MIT
