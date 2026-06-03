import { demoRegistry } from "../registry";

// Get all available docs
export function getAllDocs() {
    return [
        "accordion",
        "alert",
        "aspect-ratio",
        "avatar",
        "badge",
        "breadcrumb",
        "button",
        "button-group",
        "calendar",
        "card",
        "carousel",
        "chart",
        "checkbox",
        "collapsible",
        "combobox",
        "context-menu",
        "data-table",
        "dialog",
        "drawer",
        "dropdown-menu",
        "empty",
        "field",
        "headings",
        "hover-card",
        "image",
        "input",
        "inputgroup",
        "inputotp",
        "item",
        "kbd",
        "label",
        "menubar",
        "navigation-menu",
        "pagination",
        "popover",
        "progress",
        "radio",
        "resizable",
        "scroll-area",
        "separator",
        "sheet",
        "sidebar",
        "skeleton",
        "sonner",
        "spinner",
        "switch",
        "table",
        "tabs",
        "textarea",
        "toggle",
        "tooltip",
    ];
}

// Get documentation data by slug
export async function getDocBySlug(slug) {
    try {
        const docData = await import(`../content/docs/${slug}.json`);
        return docData.default;
    } catch (_error) {
        return null;
    }
}

// Get demo component loader
export function getDemoLoader(demoName) {
    return demoRegistry[demoName] || null;
}
