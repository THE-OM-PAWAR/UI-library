import { ScrollArea } from "@radix-ui/react-scroll-area";

/**
 * Simplified Component Registry
 * Just stores component metadata for navigation and display
 */
export const componentConfigs = {
  button: {
    id: "button",
    name: "Button",
  },
  dialog: {
    id: "dialog",
    name: "Dialog",
  },
  drawer: {
    id: "drawer",
    name: "Drawer",
  },
  "dropdown-menu": {
    id: "dropdown-menu",
    name: "Dropdown Menu",
  },
  "context-menu": {
    id: "context-menu",
    name: "Context Menu",
  },
  tooltip: {
    id: "tooltip",
    name: "Tooltip",
  },
  input: {
    id: "input",
    name: "Input",
  },
  alert: {
    id: "alert",
    name: "Alert",
  },
  tabs: {
    id: "tabs",
    name: "Tabs",
  },
  radio: {
    id: "radio",
    name: "Radio Group",
  },
  table: {
    id: "table",
    name: "Table",
  },
  "data-table": {
    id: "data-table",
    name: "Data Table",
  },
  field: {
    id: "field",
    name: "Field",
  },
  sonner: {
    id: "sonner",
    name: "Sonner",
  },
  badge: {
    id: "badge",
    name: "Badge",
  },
  card: {
    id: "card",
    name: "Card",
  },
  switch: {
    id: "switch",
    name: "Switch",
  },
  separator: {
    id: "separator",
    name: "Separator",
  },
  combobox: {
    id: "combobox",
    name: "Combobox",
  },
  kbd: {
    id: 'kbd',
    name: 'Kbd',
  },
  label: {
    id: 'label',
    name: 'Label',
  },
  item: {
    id: 'item',
    name: 'Item',
  },
  menubar: {
    id: 'menubar',
    name: 'Menubar',
  },
  skeleton: {
  id: "skeleton",
  name: "Skeleton",
},
  'scroll-area': {
    id: 'scroll-area',
    name: 'Scroll Area',
  },
  'hover-card': {
    id: 'hover-card',
    name: 'Hover Card',
  },
  buttongroup: {
    id: 'buttongroup',
    name: 'ButtonGroup',
  },
  empty:{
    id:'empty',
    name:'Empty',
  },
  collapsible:{
    id:'collapsible',
    name:'Collapsible'
  },
  accordion: {
    id: "accordion",
    name: "Accordion",
  },
  avatar: {
    id: "avatar",
    name: "Avatar",
  },
  calendar: {
    id: "calendar",
    name: "Calendar",
  },
  breadcrumb: {
    id: "breadcrumb",
    name: "Breadcrumb",
  },
  carousel: {
    id: "carousel",
    name: "Carousel",
  },
  "navigation-menu": {
    id: "navigation-menu",
    name: "Navigation Menu",
  },
  pagination: {
    id: "pagination",
    name: "Pagination",
  },
  sheet: {
    id: "sheet",
    name: "Sheet",
  },
  resizable: {
    id: "resizable",
    name: "Resizable",
  }
};

export const componentList = Object.values(componentConfigs);
