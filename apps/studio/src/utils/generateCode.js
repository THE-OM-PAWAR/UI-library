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

    case 'radio':
      const options = Array.isArray(propValues.options)
        ? propValues.options
        : [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
          ];
      const radioDefaultValue = propValues.defaultValue;
      const escapeAttribute = (input) => String(input).replace(/"/g, '\\"');
      const optionsMarkup = options
        .map((option) => {
          const optionValue = String(option.value);
          const optionId = `option-${optionValue}`;
          const safeValue = escapeAttribute(optionValue);
          const safeId = escapeAttribute(optionId);
          const safeLabel = escapeAttribute(option.label);
          return `  <label className="flex items-center gap-2">
    <RadioGroupItem value="${safeValue}" id="${safeId}" />
    <span>${safeLabel}</span>
  </label>`;
        })
        .join('\n');

      const defaultValueProp = radioDefaultValue !== undefined && radioDefaultValue !== null
        ? ` defaultValue="${escapeAttribute(radioDefaultValue)}"`
        : '';
      return `<RadioGroup${defaultValueProp}${propValues.disabled ? ' disabled' : ''}${customClassName ? ` className="${customClassName}"` : ''}>
${optionsMarkup}
</RadioGroup>`;

    case 'field':
      const fieldOrientation = propValues.orientation || 'vertical';
      const fieldLegendVariant = propValues.legendVariant || 'legend';
      const fieldShowDescription = propValues.showDescription !== false;
      const fieldShowError = Boolean(propValues.showError);
      const fieldClassProp = customClassName ? ` className="${customClassName}"` : '';
      return `<FieldSet>
  <FieldLegend variant="${fieldLegendVariant}">${propValues.legendText || 'Profile Details'}</FieldLegend>
  <FieldGroup>
    <Field orientation="${fieldOrientation}"${fieldShowError ? ' data-invalid' : ''}${fieldClassProp}>
      <FieldLabel>
        <FieldTitle>${propValues.labelText || 'Email Address'}</FieldTitle>
      </FieldLabel>
      <FieldContent>
        <div data-slot="field-control" className="rounded-md border border-dashed border-input bg-muted/30 px-3 py-2 text-sm text-muted-foreground">
          ${propValues.controlText || 'Attach your form control here'}
        </div>
${fieldShowDescription ? `        <FieldDescription>${propValues.descriptionText || 'We will only use this for product updates.'}</FieldDescription>` : ''}
${fieldShowError ? `        <FieldError errors={[{ message: "${propValues.errorMessage || 'Please enter a valid email address.'}" }]} />` : ''}
      </FieldContent>
    </Field>
    <FieldSeparator>${propValues.separatorText || 'Optional'}</FieldSeparator>
  </FieldGroup>
</FieldSet>`;

    case 'table':
      return `<Table${customClassName ? ` className="${customClassName}"` : ''}>
  <TableCaption>${propValues.caption || 'A list of recent invoices.'}</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>${propValues.header1 || 'Invoice'}</TableHead>
      <TableHead>${propValues.header2 || 'Status'}</TableHead>
      <TableHead>${propValues.header3 || 'Method'}</TableHead>
      <TableHead className="text-right">${propValues.header4 || 'Amount'}</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">INV002</TableCell>
      <TableCell>Pending</TableCell>
      <TableCell>PayPal</TableCell>
      <TableCell className="text-right">$150.00</TableCell>
    </TableRow>
  </TableBody>
${propValues.showFooter !== false ? `  <TableFooter>
    <TableRow>
      <TableCell colSpan={3}>Total</TableCell>
      <TableCell className="text-right">$400.00</TableCell>
    </TableRow>
  </TableFooter>` : ''}
</Table>`;

    case 'data-table':
      return `const columns = [
  {
    accessorKey: "email",
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Email
      </Button>
    ),
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = Number(row.getValue("amount"));
      return <div className="text-right font-medium">{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount)}</div>;
    },
  },
];

const data = [
  { id: "pay_001", email: "olivia@example.com", amount: 250 },
  { id: "pay_002", email: "jack@example.com", amount: 150 },
];

<DataTable
  columns={columns}
  data={data}
  filterColumn="email"
  filterPlaceholder="${propValues.filterPlaceholder || 'Filter emails...'}"
  noResultsText="${propValues.noResultsText || 'No results.'}"
  showFilter={${propValues.showFilter !== false}}
  showPagination={${propValues.showPagination !== false}}
  showColumnVisibility={${propValues.showColumnVisibility !== false}}
  showRowSelectionCount={${propValues.showRowSelectionCount !== false}}
${customClassName ? `  className="${customClassName}"` : ''}
/>`;

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
  if (['dialog', 'dropdown-menu', 'tooltip', 'radio', 'table', 'data-table'].includes(componentId)) {
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
