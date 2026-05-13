# @shery-ui/components

Production-grade React UI component library built with Radix UI primitives and Tailwind CSS.

## Structure

```
packages/components/
├── ui/                      # UI components
│   ├── button/
│   │   ├── button.jsx       # Component logic
│   │   ├── button.styles.js # CVA variants
│   │   ├── button.demo.jsx  # Demo/preview
│   │   └── index.js         # Exports
│   ├── dialog/
│   ├── dropdown-menu/
│   └── tooltip/
├── lib/                     # Internal utilities
│   ├── utils.js            # Re-exports from @shery-ui/utils
│   └── index.js
└── index.js                # Main entry point
```

## Component Standards

Each component follows this structure:

1. **component.jsx** - Main component logic with Radix UI primitives
2. **component.styles.js** - CVA variants for size, variant, state
3. **component.demo.jsx** - Demo component for preview apps
4. **index.js** - Clean exports

## Usage

```jsx
import { Button, Dialog, DropdownMenu, Tooltip } from '@shery-ui/components';

function MyApp() {
  return (
    <div>
      <Button variant="default" size="lg">
        Click me
      </Button>
    </div>
  );
}
```

## Design Principles

- **Radix UI Foundation**: All interactive components use Radix primitives
- **No Direct Exposure**: Radix primitives are wrapped, never exposed directly
- **Design Tokens**: All styling uses CSS variables from @shery-ui/config
- **No Hardcoded Values**: No hardcoded colors or spacing
- **Class Merging**: All components use cn() utility
- **Compound Components**: Complex components follow compound pattern
- **Accessibility**: Full a11y support via Radix UI

## Adding New Components

1. Create component folder in `ui/[component-name]/`
2. Add required files:
   - `[component-name].jsx`
   - `[component-name].styles.js`
   - `[component-name].demo.jsx`
   - `index.js`
3. Export from main `index.js`
4. Update preview app with new route

## Development

Components work directly without build step. Hot reload is enabled for instant feedback during development.
