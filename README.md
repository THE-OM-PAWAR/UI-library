# UI Component Library

A production-grade React component library inspired by shadcn/ui, built with Radix UI primitives, design tokens, and Tailwind CSS. Add components to your project with a single CLI command — no lock-in, you own the code.

## Project Structure

```
├── apps/
│   ├── studio/               # Component development studio (port 3000)
│   └── docs/                 # Next.js documentation app (port 3001)
├── packages/
│   ├── cli/                  # shery-ui CLI (init, add, list)
│   ├── components/           # UI component library
│   │   ├── ui/              # Component implementations
│   │   │   ├── button.jsx
│   │   │   ├── dialog.jsx
│   │   │   ├── dropdown-menu.jsx
│   │   │   └── ...
│   │   ├── lib/             # Internal utilities
│   │   └── index.js         # Main entry point
│   ├── config/              # Shared Tailwind config & design tokens
│   └── utils/               # Helper utilities (cn)
└── package.json                 # Monorepo configuration (bun workspaces)
```

## Component Standards

Every component follows this structure:

1. **[component].jsx** - Component logic with Radix UI primitives wrapped
2. **[component].styles.js** - CVA variants for size, variant, state
3. **[component].demo.jsx** - Demo component for preview apps
4. **index.js** - Clean exports

## Getting Started

### Using the CLI (recommended)

The fastest way to get components into your project:

```bash
# Initialize shery-ui in your project
npx shery-ui@latest init

# Add a component
npx shery-ui@latest add button

# Add multiple components at once
npx shery-ui@latest add button card dialog

# Interactive picker — choose from all 51+ components
npx shery-ui@latest add

# List all available components
npx shery-ui@latest list
```

`init` auto-detects your framework (Next.js, Vite, Remix, Astro), sets up `lib/utils`, and creates a `shery-ui.json` config. See the [CLI docs](https://shery-ui.dev/docs/cli) for all options.

### Manual setup

1. Install dependencies:
```bash
bun install
```

2. Start the studio:
```bash
bun run dev
```

The studio will open at http://localhost:3000 with hot reload enabled.

3. Or start the documentation app:
```bash
bun run dev:docs
```

The docs app will open at http://localhost:3001.

## Features

- **CLI** — `npx shery-ui@latest init` + `add` to scaffold and copy components instantly
- **Copy & Paste** — Own your components, no package lock-in
- **Radix UI Foundation** - All interactive components built on Radix primitives
- **Radix Colors System** - Production-grade 12-step color scales with alpha variants
- **Complete Theming** - Radius, scaling, typography matching Radix Themes
  - **Colors**: 15 accent colors + 6 gray options
  - **Radius**: 5 presets (none → full) + 6-step CSS variable scale
  - **Scaling**: Global size multiplier (90%–110%)
  - **Typography**: Custom font family overrides
- **Dark Mode** - First-class dark mode via CSS variables, works with `next-themes`
- **Design Token System** - Semantic tokens mapped from Radix color scales
- **Variant Architecture** - CVA for flexible component variants
- **Full Accessibility** - WCAG AA/AAA compliant, keyboard & screen reader ready
- **Monorepo Structure** - bun workspaces for efficient management

## Available Components

- **Button** - Versatile button with 6 variants and 4 sizes
- **Dialog** - Modal dialog with overlay, header, and footer
- **Dropdown Menu** - Context menus with items, labels, separators
- **Tooltip** - Hover tooltips with positioning options

## Usage Example

```jsx
import { Button, Dialog, DropdownMenu, Tooltip } from '@shery-ui/components';

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

## Theming

All components are styled via CSS variables generated from `packages/config/theme.config.js`. Edit the config and regenerate:

```js
// packages/config/theme.config.js
export const themeConfig = {
  accent:  'indigo',  // 15 accent colors
  gray:    'slate',   // 6 gray palettes
  radius:  'medium',  // none | small | medium | large | full
  scaling: '100%',    // 90% | 95% | 100% | 105% | 110%
};
```

```bash
bun run generate:theme
```

See the [Theming docs](https://shery-ui.dev/docs/theming) for the full guide including dark mode, CSS variable overrides, and Tailwind token usage.

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
bun run generate:theme
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

- `bun run dev` - Start studio (port 3000)
- `bun run dev:docs` - Start documentation app (port 3001)
- `bun run build` - Build all packages
- `bun run clean` - Clean all build outputs
- `bun run generate:theme` - Regenerate CSS tokens from `theme.config.js`

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
