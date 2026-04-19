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
  tooltip: {
    id: "tooltip",
    name: "Tooltip",
  },
  input: {
    id: 'input',
    name: 'Input',
  },
  alert: {
    id: 'alert',
    name: 'Alert',
  },
  tabs: {
    id: 'tabs',
    name: 'Tabs',
  },
  radio: {
    id: 'radio',
    name: 'Radio Group',
  },
  table: {
    id: 'table',
    name: 'Table',
  },
  'data-table': {
    id: 'data-table',
    name: 'Data Table',
  },
  field: {
    id: 'field',
    name: 'Field',
  },
  sonner: {
    id: 'sonner',
    name: 'Sonner',
  },
  badge: {
    id: 'badge',
    name: 'Badge',
  },
  card: {
    id: 'card',
    name: 'Card',
  },
  switch: {
    id: 'switch',
    name: 'Switch',
  },
};

export const componentList = Object.values(componentConfigs);
