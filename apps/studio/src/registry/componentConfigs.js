import { buttonVariants, buttonVariantsConfig } from '@repo/components/ui/button/button.styles.js';

/**
 * Component registry with auto-extracted props from CVA configs
 * 
 * For compound components (Dialog, Dropdown, Tooltip), we define:
 * - type: 'compound' to indicate it needs special rendering
 * - demoProps: configurable properties for the demo
 * - The actual demo rendering is handled in ComponentRenderer
 */
export const componentConfigs = {
  button: {
    id: 'button',
    name: 'Button',
    type: 'simple',
    path: '@repo/components',
    importName: 'Button',
    variantsConfig: buttonVariants,
    variantsConfigRaw: buttonVariantsConfig,
    additionalProps: [
      {
        name: 'BUTTON VALUE ',
        type: 'text',
        defaultValue: 'Button',
        placeholder: 'Button text',
        description: 'The content of the button',
      },
      {
        name: 'disabled',
        type: 'boolean',
        defaultValue: false,
        description: 'Disables the button',
      },
      {
        name: 'type',
        type: 'select',
        options: ['button', 'submit', 'reset'],
        defaultValue: 'button',
        description: 'HTML button type',
      },
      {
        name: 'asChild',
        type: 'boolean',
        defaultValue: false,
        description: 'Render as child element (Slot)',
      },
    ],
  },
  dialog: {
    id: 'dialog',
    name: 'Dialog',
    type: 'compound',
    path: '@repo/components',
    importName: 'Dialog',
    description: 'A modal dialog that interrupts the user with important content',
    demoProps: [
      {
        name: 'triggerText',
        type: 'text',
        defaultValue: 'CLOSE Dialog ',
        placeholder: 'Trigger button text',
        description: 'Text for the trigger button',
      },
      {
        name: 'title',
        type: 'text',
        defaultValue: 'Are you absolutely sure?',
        placeholder: 'Dialog title',
        description: 'The title of the dialog',
      },
      {
        name: 'description',
        type: 'text',
        defaultValue: 'This action cannot be undone.',
        placeholder: 'Dialog description',
        description: 'The description text',
      },
      {
        name: 'bodyText',
        type: 'text',
        defaultValue: 'This will HAMESHA KE LIYE delete your account and remove your data from our servers.',
        placeholder: 'Body content',
        description: 'Main body content of the dialog',
      },
      {
        name: 'cancelText',
        type: 'text',
        defaultValue: 'Cancel',
        placeholder: 'Cancel button text',
        description: 'Text for the cancel button',
      },
      {
        name: 'confirmText',
        type: 'text',
        defaultValue: 'Continue',
        placeholder: 'Confirm button text',
        description: 'Text for the confirm button',
      },
    ],
  },
  'dropdown-menu': {
    id: 'dropdown-menu',
    name: 'Dropdown Menu',
    type: 'compound',
    path: '@repo/components',
    importName: 'DropdownMenu',
    description: 'A menu that appears when triggered, containing a list of actions',
    demoProps: [
      {
        name: 'triggerText',
        type: 'text',
        defaultValue: 'Open Menu',
        placeholder: 'Trigger button text',
        description: 'Text for the trigger button',
      },
    ],
  },
  tooltip: {
    id: 'tooltip',
    name: 'Tooltip',
    type: 'compound',
    path: '@repo/components',
    importName: 'Tooltip',
    description: 'A popup that displays information related to an element',
    demoProps: [
      {
        name: 'content',
        type: 'text',
        defaultValue: 'Helpful information',
        placeholder: 'Tooltip content',
        description: 'The content shown in the tooltip',
      },
      {
        name: 'triggerText',
        type: 'text',
        defaultValue: 'Hover me',
        placeholder: 'Trigger text',
        description: 'Text for the trigger element',
      },
      {
        name: 'side',
        type: 'select',
        options: ['top', 'right', 'bottom', 'left'],
        defaultValue: 'top',
        description: 'The side of the trigger to show the tooltip',
      },
    ],
  },

  input: {
    id: 'input',
    name: 'Input bhai',
    type: 'simple',
    path: '@repo/components',
    importName: 'Input',
    // additionalProps: [
    //   {
    //     name: 'type',
    //     type: 'select',
    //     options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
    //     defaultValue: 'text',
    //     description: 'HTML input type',
    //   },
    //   {
    //     name: 'placeholder',
    //     type: 'text',
    //     defaultValue: 'bhai Enter text ...',
    //     placeholder: 'Placeholder text',
    //     description: 'Placeholder text shown when empty',
    //   },
    //   {
    //     name: 'disabled',
    //     type: 'boolean',
    //     defaultValue: false,
    //     description: 'Disables the input',
    //   }
    // ],
  },


};

export const componentList = Object.values(componentConfigs);
