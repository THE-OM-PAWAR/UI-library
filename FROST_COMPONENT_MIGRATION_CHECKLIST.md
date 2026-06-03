# Frost component migration checklist

_Status: practical checklist for migrating components one by one_

This is the working doc.

`SHADCN_POLICY.md` is the why.  
This file is the how.

Use this every time we add, migrate, or refactor a Frost component using shadcn as reference.

## How to use this

For every component:

1. copy the relevant parts of this checklist into the issue or PR
2. decide the path first
3. migrate one component at a time
4. don’t call it done until demo, docs, and validation are done too

---

## 1. Pick the right path first

Before touching code, decide which path this component belongs to.

### Path A — use as-is

Pick this when:

- it is a common primitive
- the accessibility is already solid
- the API already fits Frost pretty well
- our existing tokens can style it without much trouble

Examples:

- `button`
- `checkbox`
- `dialog`
- `popover`
- `tooltip`
- `separator`

### Path B — customize

This will usually be the default path.

Pick this when:

- the primitive is right, but it needs Frost adjustments
- the styles need to be converted to Frost tokens
- the API needs a bit of cleanup
- we need extra variants, sizes, or states

Examples:

- adding `isLoading`
- adding icon support
- expanding size options
- aligning spacing / radius / typography to Frost

### Path C — build from scratch

Pick this when:

- the component is very product-specific
- the anatomy is quite different
- the interaction model is different
- adapting shadcn would be more painful than useful

Examples:

- branded composite blocks
- complex data patterns
- Frost-only APIs that deserve a clean native implementation

### What to write in the PR or task

Before starting, write one clear line:

- **Path A — use as-is (Frost-owned copy)**
- **Path B — customize shadcn-derived version**
- **Path C — build Frost-native from scratch**

If unsure, default to **Path B**.

---

## 2. Pre-work checklist

Before implementation starts:

- [ ] confirm the exact component name
- [ ] find the closest shadcn reference, or note that there isn’t one
- [ ] check whether Frost already has a version in `packages/components/ui/`
- [ ] write down Frost-specific requirements first
- [ ] confirm whether this belongs in the shared package or should stay app-level
- [ ] list any dependencies needed (Radix, icons, utils, etc.)
- [ ] check whether existing Frost tokens already cover the styling
- [ ] note any accessibility needs beyond the upstream baseline

### Minimum planning note

Record these before coding:

- reference source
- chosen path
- expected API
- expected variants
- expected sizes
- demo/docs impact

---

## 3. If using shadcn as reference

When adapting from shadcn:

- [ ] copy the useful structure, not the whole mindset blindly
- [ ] keep the accessibility/composition parts that already work well
- [ ] do **not** add shadcn as a runtime dependency for shared Frost components
- [ ] do **not** assume upstream classes are final
- [ ] decide clearly what stays and what becomes Frost-specific

Usually worth keeping:

- accessible structure
- Radix primitive usage
- sensible composition
- `asChild` behavior where useful
- good state handling

Usually worth replacing:

- raw styling classes
- direct palette assumptions
- awkward or one-off variant naming
- imports/aliases that don’t match our repo

---

## 4. Set up the files properly

Inside `packages/components/ui/[component-name]/`:

- [ ] `[component-name].jsx`
- [ ] `[component-name].styles.js` when the component has real variant logic
- [ ] `[component-name].demo.jsx`
- [ ] `index.js`

Also:

- [ ] export it from `packages/components/index.js`

If the component does not need `*.styles.js`, note why.

---

## 5. Normalize the API

Before finalizing, check the public API.

- [ ] prop names are predictable
- [ ] API follows Frost conventions
- [ ] low-level implementation details are not leaking out
- [ ] `className` still works as the escape hatch
- [ ] composability is preserved where useful
- [ ] refs are forwarded when appropriate
- [ ] naming matches nearby Frost components

### Smell check

Pause and rethink if:

- props describe styling hacks instead of intent
- consumers need wrappers for common usage
- the component API feels inconsistent next to sibling components
- shared code is exposing app-specific behavior

---

## 6. Align it with Frost theming

This part is non-negotiable for shared components.

- [ ] replace raw palette styles with Frost semantic tokens where possible
- [ ] use tokens like `bg-background`, `text-foreground`, `bg-primary`, `border-border`, `ring-ring`
- [ ] avoid hardcoded color names unless there is a strong reason
- [ ] keep dark mode token-driven
- [ ] check `packages/config/tokens.css` before inventing new tokens
- [ ] if adding a token, explain why it is reusable

### Token rule

Ask this in order:

1. Can an existing semantic token solve it?
2. Can the token mapping be improved centrally?
3. Only then, do we need a new token?

If the reason is basically “this one component needed one weird color,” that is usually not enough.

---

## 7. Keep variants clean

For variant-heavy components:

- [ ] separate base styles from variant styles
- [ ] use intent-based variant names (`default`, `secondary`, `outline`, `ghost`, `destructive`, etc.)
- [ ] keep size naming consistent (`xs`, `sm`, `default`, `lg`, `icon`, etc.)
- [ ] set `defaultVariants`
- [ ] use CVA when the component actually benefits from it
- [ ] make sure variants compose with tokens, not hardcoded colors
- [ ] add a shared variant only if it represents a real reusable concept

### Don’t add a shared variant if...

- it only exists for one demo or one page
- it is named after a color instead of intent
- it is basically a duplicate of another variant

In those cases, use `className` locally or create an app-level wrapper.

---

## 8. Accessibility pass

Before calling it done:

- [ ] keyboard interaction works correctly
- [ ] focus styles are visible and use Frost ring tokens
- [ ] disabled states are clear
- [ ] aria roles/attributes make sense
- [ ] composition does not break semantics
- [ ] icon-only usage has accessible naming where needed
- [ ] loading/pending states are communicated properly

If shadcn/Radix already solved this well, keep that behavior unless we have a real reason to change it.

---

## 9. Hook it into the repo properly

After the component itself is ready:

- [ ] update `packages/components/index.js`
- [ ] add or update the demo
- [ ] wire it into `apps/studio` if needed
- [ ] add or update docs in `apps/docs` if needed
- [ ] make sure imports match repo conventions (`@repo/*`)
- [ ] make sure nothing app-specific leaked into the shared package

---

## 10. Validation before PR or merge

### Behavior

- [ ] main use cases work
- [ ] edge states work
- [ ] variants behave correctly
- [ ] disabled / loading / interactive states are checked manually

### Visual consistency

- [ ] light mode looks right
- [ ] dark mode looks right
- [ ] spacing / radius / typography feel aligned with Frost
- [ ] token-driven theming still behaves correctly

### Developer experience

- [ ] import path is clean
- [ ] public API is understandable
- [ ] `className` overrides still behave predictably
- [ ] naming is consistent with sibling components

### Checks

- [ ] no new file errors
- [ ] repo checks pass for the changed files or workspace

---

## 11. When a migration is actually done

Do not mark the component done until all of this is true:

- [ ] chosen path was documented
- [ ] implementation lives in Frost-owned source
- [ ] styling is aligned with Frost tokens
- [ ] variants/sizes follow Frost conventions
- [ ] demo/docs are updated where needed
- [ ] accessibility was reviewed
- [ ] validation is done
- [ ] the component is good enough to act as a reference later

---

## 12. PR summary template

Use this in migration PRs.

### Frost migration summary

- **Component:**
- **Reference source:**
- **Chosen path:** Path A / Path B / Path C
- **Why this path:**
- **API changes:**
- **Token changes:** none / mapping update / new semantic token
- **Variant changes:**
- **Docs/demo updated:** yes / no
- **Validation done:** yes / no

---

## 13. Quick worksheet

Copy this for each component.

### Component worksheet

- [ ] Component name:
- [ ] shadcn reference:
- [ ] Chosen path: A / B / C
- [ ] Shared package or app-only?
- [ ] Required variants:
- [ ] Required sizes:
- [ ] Required states:
- [ ] New tokens needed? If yes, why?
- [ ] Demo needed?
- [ ] Docs needed?
- [ ] Validation complete?

---

## 14. Suggested migration order

To keep the system clean, do this in phases.

### Phase 1 — foundation primitives

- `button`
- `input`
- `textarea`
- `label`
- `separator`
- `spinner`

### Phase 2 — overlays and feedback

- `dialog`
- `popover`
- `tooltip`
- `sheet`
- `drawer`
- `alert`

### Phase 3 — form and choice controls

- `checkbox`
- `radio-group`
- `switch`
- `select` / `combobox`
- `calendar`
- `input-otp`

### Phase 4 — navigation and layout structure

- `tabs`
- `breadcrumb`
- `pagination`
- `navigation-menu`
- `sidebar`
- `menubar`

### Phase 5 — complex or Frost-native surfaces

- `data-table`
- `chart`
- `carousel`
- branded composite blocks
- anything that does not cleanly map to an upstream primitive

The goal is simple: set strong patterns early, then let later migrations copy the good decisions instead of inventing new ones every time.
