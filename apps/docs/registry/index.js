// Simplified demo registry - just export demo metadata
// The actual code strings are stored in the JSON files
export const demoRegistry = {
    "button-demo": () => import("./demos/button-demo"),
    "button-variants": () => import("./demos/button-variants"),
    "button-sizes": () => import("./demos/button-sizes"),
    "button-with-icon": () => import("./demos/button-with-icon"),

    "sidebar-demo": () => import("./demos/sidebar-demo"),
    "sidebar-groups": () => import("./demos/sidebar-groups"),

    "combobox-demo": () => import("./demos/combobox-demo"),
    "combobox-controlled": () => import("./demos/combobox-controlled"),
    "combobox-groups": () => import("./demos/combobox-groups"),

    "context-menu-demo": () => import("./demos/context-menu-demo"),
    "context-menu-sub": () => import("./demos/context-menu-sub"),
    "context-menu-checkbox": () => import("./demos/context-menu-checkbox"),
    "context-menu-radio": () => import("./demos/context-menu-radio"),

    "data-table-demo": () => import("./demos/data-table-demo"),
    "data-table-sorting": () => import("./demos/data-table-sorting"),
    "data-table-selection": () => import("./demos/data-table-selection"),
    "data-table-pagination": () => import("./demos/data-table-pagination"),
};