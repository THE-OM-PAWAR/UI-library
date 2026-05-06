# UI Component Library

A production-grade React component library inspired by shadcn/ui, built with Radix UI primitives, design tokens, and Tailwind CSS.

## Project Structure

```
├── apps/
│   ├── studio/               # Component development studio (port 3000)
│   └── docs/                 # Next.js documentation app (port 3001)
├── packages/
│   ├── components/           # UI component library
│   │   ├── ui/              # Component implementations
│   │   │   ├── button/
│   │   │   │   ├── button.jsx         # Component logic
│   │   │   │   ├── button.styles.js   # CVA variants
│   │   │   │   ├── button.demo.jsx    # Preview demo
│   │   │   │   └── index.js           # Exports
│   │   │   ├── dialog/
│   │   │   ├── dropdown-menu/
│   │   │   └── tooltip/
│   │   ├── lib/             # Internal utilities
│   │   └── index.js         # Main entry point
│   ├── config/              # Shared Tailwind config & design tokens
│   └── utils/               # Helper utilities (cn)
└── pnpm-workspace.yaml      # Monorepo configuration
```

## Component Standards

Every component follows this structure:

1. **[component].jsx** - Component logic with Radix UI primitives wrapped
2. **[component].styles.js** - CVA variants for size, variant, state
3. **[component].demo.jsx** - Demo component for preview apps
4. **index.js** - Clean exports

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Start the studio:
```bash
pnpm dev
```

The studio will open at http://localhost:3000 with hot reload enabled.

3. Or start the documentation app:
```bash
pnpm dev:docs
```

The docs app will open at http://localhost:3001.

## Features

- **Radix UI Foundation** - All interactive components built on Radix primitives
- **Radix Colors System** - Production-grade 12-step color scales with alpha variants
- **Complete Theming** - Radius, scaling, typography matching Radix Themes
  - **Colors**: 15 accent colors + 6 gray options
  - **Radius**: 5 presets (none to full) + 6-step scale
  - **Scaling**: Global size multiplier (90%-110%)
  - **Typography**: 9-step type scale + custom fonts
- **Dynamic Theme Switching** - Change entire UI with one command
- **Design Token System** - Semantic tokens mapped from Radix color scales
- **Dark Mode Support** - Automatic dark mode via Radix Colors
- **Variant Architecture** - CVA for flexible component variants
- **Monorepo Structure** - pnpm workspaces for efficient management
- **Path Aliases** - Clean imports with @repo/* namespace
- **Hot Reload** - Instant feedback during development
- **Full Accessibility** - WCAG AA/AAA compliant color combinations

## Available Components

- **Button** - Versatile button with 6 variants and 4 sizes
- **Dialog** - Modal dialog with overlay, header, and footer
- **Dropdown Menu** - Context menus with items, labels, separators
- **Tooltip** - Hover tooltips with positioning options

## Usage Example

```jsx
import { Button, Dialog, DropdownMenu, Tooltip } from '@repo/components';

function MyApp() {
  return (
    <div>
      <Button variant="default" size="lg">
        Click me
      </Button>
      
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
```

## Adding New Components

1. Create component folder in `packages/components/ui/[component-name]/`
2. Add required files:
   - `[component-name].jsx` - Main component
   - `[component-name].styles.js` - CVA variants
   - `[component-name].demo.jsx` - Preview demo
   - `index.js` - Exports
3. Export from `packages/components/index.js`
4. Add page in `apps/studio/src/pages/[component-name]/index.jsx`
5. Update component registry in `apps/studio/src/registry/components.js`
6. Add lazy import in `apps/studio/src/App.jsx`

## Design Tokens

The library uses **Radix UI Colors** - a production-grade color system with 12-step scales.

### Quick Color Change

Want to change from Indigo to Blue? It's super simple:

1. Edit `packages/config/theme.config.js`:
```js
export const themeConfig = {
  accent: 'blue',  // Change this!
  gray: 'slate',
  // ...
};
```

2. Run:
```bash
pnpm generate:theme
```

3. Restart dev server - Done! 🎉

**See [CHANGE_COLORS.md](./CHANGE_COLORS.md) for the complete guide.**

### Available Colors

**Accent:** indigo • blue • violet • purple • pink • crimson • red • orange • amber • yellow • lime • green • teal • cyan • sky

**Gray:** slate • gray • mauve • sage • olive • sand

### Semantic Tokens

All components use semantic tokens for consistency:
- `bg-primary` → Accent color step 9
- `bg-primary-hover` → Accent color step 10
- `text-foreground` → Gray step 12
- `border-border` → Gray step 6
- `bg-overlay` → Gray alpha step 8 (translucent)

See `packages/config/COLOR_SYSTEM.md` for complete documentation.

## Scripts

- `pnpm dev` - Start studio (port 3000)
- `pnpm dev:docs` - Start documentation app (port 3001)
- `pnpm build` - Build all packages
- `pnpm clean` - Clean all build outputs
- `pnpm generate:theme` - Generate theme from config (change colors)

## Architecture

See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed documentation on:
- Package structure and conventions
- Component design patterns
- Radix UI integration strategy
- Styling system and design tokens
- Development workflow
- Best practices

## Design Principles

- **No Direct Radix Exposure** - Radix primitives are wrapped, never exposed
- **No Hardcoded Values** - All styling uses design tokens
- **Class Merging** - All components use cn() utility
- **Compound Components** - Complex components follow compound pattern
- **Consistent API** - Predictable component interfaces
