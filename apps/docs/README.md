# UI Library Documentation

Modern documentation site for the React UI component library.

## Structure

```
apps/docs/
├── app/                    # Next.js App Router
│   ├── page.jsx           # Landing page
│   ├── layout.jsx         # Root layout
│   ├── globals.css        # Global styles
│   └── docs/              # Documentation routes
│       ├── layout.jsx     # Docs layout with sidebar
│       ├── page.jsx       # Docs home
│       ├── installation/  # Installation guide
│       └── components/    # Component docs
│           └── [slug]/    # Dynamic component pages
├── components/            # React components
│   ├── providers.jsx      # Theme provider
│   └── docs/              # Documentation-specific components
│       ├── navbar.jsx     # Top navigation
│       ├── sidebar.jsx    # Sidebar navigation
│       ├── theme-toggle.jsx
│       ├── code-block.jsx
│       └── component-preview.jsx
├── content/               # MDX content
│   └── docs/
│       ├── installation.mdx
│       └── components/
│           └── button.mdx
├── config/
│   └── docs.js           # Navigation config
├── lib/
│   └── mdx.js            # MDX utilities
├── next.config.js
├── tailwind.config.js
└── package.json
```

## Features

- ✅ Next.js 14 App Router
- ✅ MDX for documentation
- ✅ Dark/Light mode
- ✅ Sidebar navigation (auto-generated from config)
- ✅ Code blocks with copy button
- ✅ Component preview with live rendering
- ✅ Responsive design
- ✅ Typography with @tailwindcss/typography

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Run development server:
```bash
pnpm dev:docs
```

3. Open [http://localhost:3001](http://localhost:3001)

## Adding New Components

1. Create MDX file in `content/docs/components/[component-name].mdx`
2. Add to sidebar config in `config/docs.js`
3. Write documentation with examples

Example MDX structure:
```mdx
---
title: Component Name
description: Brief description
---

# Component Name

Description here.

## Usage

\`\`\`jsx
import { Component } from "@shery-uicomponents";
\`\`\`

## Props

| Prop | Type | Description |
|------|------|-------------|
| prop1 | string | Description |
```

## Customization

- Update theme colors in `app/globals.css`
- Modify navigation in `config/docs.js`
- Customize components in `components/docs/`
