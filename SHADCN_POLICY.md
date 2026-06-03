# Frost UI + shadcn policy

_Status: team-facing draft before implementation_

## Why I wrote this

Before we start changing components one by one, I wanted us to be clear on how we’re using shadcn in Frost.

Main thing: we should **learn from shadcn**, not blindly wire ourselves to it.

shadcn’s model is actually pretty simple:

- you copy the component source
- you own the code
- you edit it freely
- you turn it into your design system

That works well for Frost because we already have the right setup for it:

- components live in `packages/components/ui/`
- tokens live in `packages/config/tokens.css`
- theme config lives in `packages/config/theme.config.js`
- we already use a variant pattern similar to shadcn in files like `packages/components/ui/button.jsx`

So this doc is basically the rulebook for how we should use shadcn ideas inside Frost.

If you want the execution version of this, use `FROST_COMPONENT_MIGRATION_CHECKLIST.md`.

## What I understood from the shadcn docs

### 1. It is not really a normal npm component library

This is the biggest thing.

shadcn literally says this is **not a component library**, it is a way to build your own one.

So the mindset is:

- don’t depend on a black-box package for the top layer
- bring the code into your project
- own it from there

For Frost, that means shared components should be **our code in our repo**, not something we treat like vendor code.

### 2. The copy-paste model is intentional

This is not “copy-paste because there is no better option.”

It is the actual model.

Why it works:

- easier to customize
- easier to align with our design system
- easier to keep APIs consistent
- easier for future contributors to understand

So if we adopt something from shadcn, we should think of it as a **starting point**, not a dependency boundary.

### 3. Their theming model is based on semantic CSS variables

shadcn recommends CSS variables and semantic tokens like:

- `bg-background`
- `text-foreground`
- `bg-primary`
- `text-primary-foreground`
- `border-border`
- `ring-ring`

That part matches Frost really well.

Meaning:

- theme changes should mostly happen in tokens first
- dark mode should come from token overrides
- shared components should not be full of random hardcoded colors

### 4. Their variants are structured, not random

The good part of shadcn’s pattern is not the exact names.
It is the consistency.

Usually the structure is:

- base styles
- `variant`
- `size`
- defaults
- composability like `asChild`

That is useful because it keeps component APIs predictable.

So for Frost, the takeaway is simple:

- keep variants intent-based
- keep the API consistent
- don’t create weird one-off naming unless there is a real reason

### 5. They distribute code, but ownership stays local

Even when shadcn uses CLI config, registries, or install helpers, the end result is still local source code.

That maps cleanly to our monorepo:

- `packages/components` is the source of truth
- `apps/docs` and `apps/studio` are where we show and test the components

## Frost policy

### Default rule

Use shadcn as a **reference and starting point**, not as the thing we depend on directly.

If we use a shadcn-style component, we bring it into Frost, align it to Frost tokens and API conventions, and maintain it as Frost code.

### What “use shadcn as-is” means here

Important: in Frost, “as-is” does **not** mean installing and consuming shadcn as a runtime dependency.

It means we can keep the upstream structure mostly intact when all of this is true:

1. the component is a common primitive
2. the accessibility model is already solid
3. the API already fits Frost pretty well
4. our existing semantic tokens can style it cleanly
5. the behavior is generic, not product-specific

Typical examples:

- `button`
- `dialog`
- `tooltip`
- `popover`
- `separator`
- `checkbox`

In those cases:

- keep the structure simple
- keep composability like `asChild` if it makes sense
- swap styling over to Frost tokens
- don’t rename variants unless we actually need to

### When to customize

This will probably be the most common path.

Customize a shadcn-based component when the base idea is right, but it still needs Frost treatment.

That includes stuff like:

- remapping styles to Frost semantic tokens
- adding Frost-specific variants or sizes
- improving the API for how we actually use it
- aligning radius, spacing, motion, and typography with the system
- matching our package structure and exports

Examples:

- adding `isLoading`
- adding icon support
- expanding size options
- updating classes to use our token system

### When to build from scratch

Build from scratch when adapting shadcn would be more annoying than helpful.

Use that path when:

1. the component is very Frost-specific
2. the anatomy is significantly different
3. the interaction/state model is different
4. we’d end up rewriting most of it anyway
5. the upstream structure would force awkward APIs or wrappers

Examples:

- branded composite blocks
- very specific product workflows
- complex data-heavy patterns
- Frost-native utilities that should have their own API contract

Simple rule: if we are changing most of the component already, we should stop pretending it is a shadcn adaptation and just build it properly for Frost.

## Theming rules

### Semantic tokens first

For shared components, use semantic tokens before anything else.

Prefer things like:

- `bg-background`
- `text-foreground`
- `bg-primary`
- `text-primary-foreground`
- `bg-secondary`
- `border-border`
- `ring-ring`

Avoid hardcoding colors in reusable components unless there is a clear reason.

### Theme changes should happen in tokens first

If a visual change can be solved in:

- `packages/config/theme.config.js` (source of truth)
- regenerated tokens (`pnpm generate:theme` updates `packages/config/tokens.css` — avoid editing `tokens.css` by hand)
- shared semantic token mappings

then do that before editing a bunch of component class strings.

### Dark mode should come from token overrides

The normal expectation is:

- tokens change between `:root` and `.dark`
- components keep mostly the same classes
- we don’t duplicate full styling branches unless necessary

### New tokens should have a real reason

Add a token only if it represents something reusable.

Good reasons:

- a new surface type
- a reusable status/feedback tone
- a cross-component need

Bad reason:

- one component needed one custom color and we didn’t want to think more about it

## Variant rules

### Use intent-based names

Variant names should say what the component means, not describe the class hack behind it.

Good:

- `default`
- `secondary`
- `outline`
- `ghost`
- `destructive`

Avoid stuff like:

- `grayFill`
- `borderedAlt2`
- `pinkButton`

### Keep the variant shape predictable

Most shared components should follow this structure:

- base classes
- `variant`
- `size`
- `defaultVariants`
- `className` as an escape hatch

If we add more axes like `tone`, `density`, or `orientation`, there should be a proper reason.

### Variants should work with tokens

Variants should mostly be built from semantic tokens and state rules.

That makes theming easier and keeps the system cleaner long-term.

### Shared variants should earn their place

If a new variant only exists for one screen or one experiment, it probably does not belong in the shared package.

In that case:

- use `className`
- or make a local wrapper at the app level

## Decision flow we should follow

Before building or migrating a component, ask this in order:

1. Is there already a solid shadcn pattern for this?
2. Can Frost tokens style it cleanly?
3. Do we only need API/theme refinements?
4. If yes, customize it.
5. If not, build it from scratch.

## Repo-specific rules

- do **not** add `shadcn-ui` as a runtime dependency for shared Frost components
- do **not** hardcode theme colors when a semantic token already exists
- prefer CVA for shared variant-heavy components
- keep Radix primitives where they help accessibility and composition
- use `packages/components/ui/button.jsx` as one of the reference patterns for interactive component structure

## Final call

This is the direction:

- use shadcn as a reference
- own the code locally
- theme through tokens
- keep variants intentional
- customize where needed
- build from scratch when the component is clearly Frost-native

So the policy is:

- **use as-is** when the primitive already fits Frost well
- **customize** for most shared components
- **build from scratch** when the component is too specific or too different

Once we align on this, use `FROST_COMPONENT_MIGRATION_CHECKLIST.md` for actual component-by-component migration.

## References reviewed

- `https://ui.shadcn.com/docs`
- `https://ui.shadcn.com/docs/installation`
- `https://ui.shadcn.com/docs/components-json`
- `https://ui.shadcn.com/docs/package-imports`
- `https://ui.shadcn.com/docs/theming`
- `https://ui.shadcn.com/docs/components/radix/button`
- `https://ui.shadcn.com/docs/registry`
