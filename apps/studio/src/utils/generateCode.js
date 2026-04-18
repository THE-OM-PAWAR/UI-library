/**
 * Generate JSX code and CSS classes for current component state
 */

export function generateJSXCode(componentId, componentName, propValues, customClassName = '') {
  // Handle compound components with custom templates
  switch (componentId) {
    case 'dialog':
      return `<Dialog>
  <DialogTrigger asChild>
    <Button${customClassName ? ` className="${customClassName}"` : ''}>${propValues.triggerText || 'Open Dialog'}</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>${propValues.title || 'Dialog Title'}</DialogTitle>
      <DialogDescription>
        ${propValues.description || 'Dialog description'}
      </DialogDescription>
    </DialogHeader>
    <div className="py-4">
      <p className="text-sm text-muted-foreground">
        ${propValues.bodyText || 'Dialog body content'}
      </p>
    </div>
    <DialogFooter>
      <Button variant="outline">${propValues.cancelText || 'Cancel'}</Button>
      <Button>${propValues.confirmText || 'Continue'}</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`;

    case 'dropdown-menu':
      return `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline"${customClassName ? ` className="${customClassName}"` : ''}>${propValues.triggerText || 'Open Menu'}</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`;

    case 'tooltip':
      return `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline"${customClassName ? ` className="${customClassName}"` : ''}>${propValues.triggerText || 'Hover me'}</Button>
    </TooltipTrigger>
    <TooltipContent side="${propValues.side || 'top'}">
      <p>${propValues.content || 'Tooltip content'}</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`;

    case 'input':
      const inputPropsArray = Object.entries(propValues)
        .filter(([key, value]) => 
          key !== 'className' && 
          value !== undefined && 
          value !== false && 
          value !== '' && 
          value !== 'text' // Don't show default type
        )
        .map(([key, value]) => {
          if (value === true) return key;
          if (typeof value === 'string') return `${key}="${value}"`;
          return `${key}={${JSON.stringify(value)}}`;
        });

      if (customClassName) {
        inputPropsArray.push(`className="${customClassName}"`);
      }

      const inputPropsString = inputPropsArray.length > 0 ? ' ' + inputPropsArray.join(' ') : '';
      return `<Input${inputPropsString} />`;

    case 'sonner':
      const toastType = propValues.type || 'default';
      const toastTitle = propValues.title || 'Event has been created';
      const toastDesc = propValues.description || 'Monday, January 3rd at 6:00pm';
      const hasAction = propValues.action;
      const hasCancel = propValues.cancel;

      let toastCode = '';
      if (toastType === 'promise') {
        toastCode = `const promise = () => new Promise((resolve) => setTimeout(resolve, 2000));
toast.promise(promise, {
  loading: 'Loading...',
  success: '${toastTitle}',
  error: 'Error',
});`;
      } else {
        const method = toastType === 'default' ? 'toast' : `toast.${toastType}`;
        const options = [];
        if (toastDesc) options.push(`description: '${toastDesc}'`);
        if (hasAction) options.push(`action: { label: 'Undo', onClick: () => console.log('Undo') }`);
        if (hasCancel) options.push(`cancel: { label: 'Cancel', onClick: () => console.log('Cancel') }`);
        
        const optionsStr = options.length > 0 ? `, {\n  ${options.join(',\n  ')}\n}` : '';
        toastCode = `${method}('${toastTitle}'${optionsStr});`;
      }

      return `// Add Toaster to your app root:
// <Toaster />

// Then trigger toast:
import { toast } from 'sonner';

<Button onClick={() => {
  ${toastCode}
}}>
  Show Toast
</Button>`;

    case 'button':
    default:
      // Simple component with props
      const { children, ...otherProps } = propValues;

      const propsArray = Object.entries(otherProps)
        .filter(([_, value]) => value !== undefined && value !== false && value !== '' && value !== 'default')
        .map(([key, value]) => {
          if (value === true) return key;
          if (typeof value === 'string') return `${key}="${value}"`;
          return `${key}={${JSON.stringify(value)}}`;
        });

      // Add custom className if provided
      if (customClassName) {
        propsArray.push(`className="${customClassName}"`);
      }

      const propsString = propsArray.length > 0 ? ' ' + propsArray.join(' ') : '';
      const childrenText = children || 'Button';

      return `<${componentName}${propsString}>\n  ${childrenText}\n</${componentName}>`;
  }
}

export function generateCSSClasses(componentId, variantsConfig, propValues, customClassName = '') {
  // Compound components don't have direct CSS classes
  if (['dialog', 'dropdown-menu', 'tooltip', 'sonner'].includes(componentId)) {
    return customClassName 
      ? `Custom classes:\n  ${customClassName.split(' ').join('\n  ')}\n\nCompound component - styles applied to sub-components`
      : 'Compound component - styles applied to sub-components';
  }

  if (!variantsConfig) {
    return customClassName 
      ? `Custom classes:\n  ${customClassName.split(' ').join('\n  ')}`
      : 'No CSS classes available';
  }

  try {
    // Call the CVA function with current props to get actual classes
    const actualClasses = variantsConfig(propValues);

    if (!actualClasses && !customClassName) return 'No classes generated';

    // Format for display - split by spaces and show each class on new line
    const classes = actualClasses ? actualClasses.split(' ').filter(Boolean) : [];
    const customClasses = customClassName ? customClassName.split(' ').filter(Boolean) : [];

    const allClasses = [...classes, ...customClasses];

    if (allClasses.length === 0) return 'No classes generated';

    return allClasses.map(cls => `  ${cls}`).join('\n');
  } catch (error) {
    return customClassName 
      ? `Custom classes:\n  ${customClassName.split(' ').join('\n  ')}`
      : 'Error generating classes';
  }
}

export function generateComponentCode(componentId, componentName, propValues, variantsConfig, customClassName = '') {
  const jsxCode = generateJSXCode(componentId, componentName, propValues, customClassName);
  const cssClasses = generateCSSClasses(componentId, variantsConfig, propValues, customClassName);

  return {
    jsxCode,
    cssClasses,
  };
}
