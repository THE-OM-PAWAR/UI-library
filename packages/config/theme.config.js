/**
 * Theme Configuration
 *
 * Complete theming system matching Radix Themes capabilities
 * Run `pnpm generate:theme` to regenerate tokens.css
 */

export const themeConfig = {
    /* ============================================
     COLORS
     ============================================ */

    // Accent color - used for primary buttons, links, focus rings
    accent: "crimson", // Options: blue, violet, purple, pink, crimson, red, orange, amber, yellow, lime, green, teal, cyan, sky, indigo

    // Gray color - used for backgrounds, borders, text
    gray: "slate", // Options: slate, gray, mauve, sage, olive, sand

    // Status colors (usually keep these as-is)
    error: "red",
    success: "green",
    warning: "amber",

    /* ============================================
     RADIUS
     ============================================ */

    // Border radius scale - affects all components
    // Options: 'none' | 'small' | 'medium' | 'large' | 'full'
    radius: "medium",

    /* ============================================
     SCALING
     ============================================ */

    // Global scale multiplier (affects all sizes)
    // Options: '90%' | '95%' | '100%' | '105%' | '110%'
    scaling: "100%",

    /* ============================================
     TYPOGRAPHY
     ============================================ */

    // Custom font families (optional)
    fontFamily: {
        sans: undefined, // Use default system font stack
        mono: undefined, // Use default monospace stack
    },
};

export default themeConfig;
