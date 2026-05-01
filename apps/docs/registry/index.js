// Simplified demo registry - just export demo metadata
// The actual code strings are stored in the JSON files
export const demoRegistry = {
    "button-demo": () => import("./demos/button-demo"),
    "button-variants": () => import("./demos/button-variants"),
    "button-sizes": () => import("./demos/button-sizes"),
    "button-with-icon": () => import("./demos/button-with-icon"),
};
