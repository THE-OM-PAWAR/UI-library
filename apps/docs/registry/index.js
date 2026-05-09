// Simplified demo registry - just export demo metadata
// The actual code strings are stored in the JSON files
export const demoRegistry = {
  "button-demo": () => import("./demos/button-demo"),
  "button-variants": () => import("./demos/button-variants"),
  "button-sizes": () => import("./demos/button-sizes"),
  "button-with-icon": () => import("./demos/button-with-icon"),
  "card-demo": () => import("./demos/card-demo"),
  "card-custom": () => import("./demos/card-custom"),
  "carousel-demo": () => import("./demos/carousel-demo"),
  "carousel-loop": () => import("./demos/carousel-loop"),
  "carousel-drag-free": () => import("./demos/carousel-drag-free"),
  "carousel-vertical": () => import("./demos/carousel-vertical"),
};