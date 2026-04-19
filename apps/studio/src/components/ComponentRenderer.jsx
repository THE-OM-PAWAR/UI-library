import { useState, useEffect, useMemo } from 'react';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  Input,
  Alert,
  AlertTitle,
  AlertDescription,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  RadioGroup,
  RadioGroupItem,
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  DataTable,
} from '@repo/components';
import { toast } from 'sonner';
import { extractPropsFromVariants, getDefaultProps } from '../utils/extractComponentProps.js';
import { generateComponentCode } from '../utils/generateCode.js';
import { componentConfigs } from '../registry/componentConfigs.js';
import { PreviewCanvas } from './PreviewCanvas.jsx';
import { PropertiesPanel } from './PropertiesPanel.jsx';

export function ComponentRenderer({ componentId }) {
  const config = componentConfigs[componentId];
  const [propValues, setPropValues] = useState({});
  const [propsConfig, setPropsConfig] = useState([]);
  const [generatedCode, setGeneratedCode] = useState({ jsxCode: "", cssClasses: "" });
  const [customClassName, setCustomClassName] = useState("");

  useEffect(() => {
    if (!config) return;

    let extractedProps = [];


    // For simple components with CVA variants
    if (config.variantsConfigRaw) {
      extractedProps = extractPropsFromVariants(config.variantsConfigRaw);
    }

    // For compound components with demo props
    if (config.demoProps) {
      extractedProps = [...extractedProps, ...config.demoProps];
    }

    // Add manual props
    if (config.manualProps) {
      extractedProps = [...extractedProps, ...config.manualProps];
    }

    // Add additional props
    if (config.additionalProps) {
      extractedProps = [...extractedProps, ...config.additionalProps];
    }

    setPropsConfig(extractedProps);
    const defaults = getDefaultProps(extractedProps);
    setPropValues(defaults);
    setCustomClassName(""); // Reset custom class on component change

    updateGeneratedCode(defaults, "");
    setCustomClassName(''); // Reset custom class on component change

    updateGeneratedCode(defaults, '');
  }, [componentId, config]);

  const updateGeneratedCode = (values, customClass = customClassName) => {
    if (!config) return;

    const code = generateComponentCode(componentId, config.name, values, config.variantsConfig, customClass);

    setGeneratedCode(code);
  };

  const handlePropChange = (propName, value) => {
    const newValues = {
      ...propValues,
      [propName]: value,
    };


    setPropValues(newValues);
    updateGeneratedCode(newValues);
  };

  const handleCustomClassChange = (value) => {
    setCustomClassName(value);
    updateGeneratedCode(propValues, value);
  };

  if (!config) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-muted-foreground">Component not found</div>
      </div>
    );
  }

  // Render component based on type and ID
  const renderComponent = () => {
    const { children, className: _, ...restProps } = propValues;

    switch (componentId) {
      case "button":
        return (
          <Button {...restProps} className={customClassName || ""}>
            {children || "Button"}
          </Button>
        );

      case 'dialog':
        return <DialogDemo propValues={propValues} customClassName={customClassName} />;

      case 'dropdown-menu':
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className={customClassName}>
                {propValues.triggerText || "Open Menu"}
              </Button>
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
          </DropdownMenu>
        );

      case 'tooltip':
        return (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" className={customClassName}>
                {propValues.triggerText || "Hover me"}
              </Button>
            </TooltipTrigger>
            <TooltipContent side={propValues.side || "top"}>
              <p>{propValues.content || "Tooltip content"}</p>
            </TooltipContent>
          </Tooltip>
        );
      case 'input':
        return (
          <Input
            {...restProps}
            className={customClassName || ''}
          />
        );
      case 'alert':
        return (
          <Alert {...restProps} className={customClassName || ''}>
            <AlertTitle>{propValues.title || 'Alert Title '}</AlertTitle>
            <AlertDescription>
              {propValues.description || 'Alert description goes here.'}
            </AlertDescription>
          </Alert>
        );
      
      case 'sonner':
        return <SonnerDemo propValues={propValues} />;

      case "tabs":
         return (
          <Tabs defaultValue="tab1" className={customClassName}>
            <TabsList>
              <TabsTrigger value="tab1">{propValues.tab1}</TabsTrigger>
              <TabsTrigger value="tab2">{propValues.tab2}</TabsTrigger>
            </TabsList>

            <TabsContent value="tab1">{propValues.content1}</TabsContent>

            <TabsContent value="tab2">{propValues.content2}</TabsContent>
          </Tabs>
        );
      case 'radio':
        const radioOptions = Array.isArray(propValues.options)
          ? propValues.options
          : [
              { label: 'Option 1', value: 'option1' },
              { label: 'Option 2', value: 'option2' },
              { label: 'Option 3', value: 'option3' },
            ];
        const radioGroupKey = JSON.stringify({
          defaultValue: propValues.defaultValue,
          options: radioOptions.map((option, index) => ({
            value: String(option.value ?? `option${index + 1}`),
            label: option.label || '',
          })),
        });


      case 'badge':
        return (
          <Badge {...restProps} className={customClassName || ''}>
            {children || 'Badge'}
          </Badge>
        );

      case 'card':
        return (
          <div className="max-w-sm">
            <Card className={customClassName || ''}>
              <CardHeader>
                <CardTitle>
                  {propValues.title || 'Card Title'}
                </CardTitle>
                <CardDescription>
                  {propValues.description || 'Card description goes here.'}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {propValues.content || 'This is the main content area.'}
              </CardContent>

              <CardFooter>
                <Button>
                  {propValues.footerText || 'Action'}
                </Button>
              </CardFooter>
            </Card>
          </div>
        );


      case "radio-group" :
        return (
          <RadioGroup
            key={radioGroupKey}
            defaultValue={propValues.defaultValue}
            disabled={Boolean(propValues.disabled)}
            className={customClassName || ''}
          >
            {radioOptions.map((option, index) => {
              const optionValue = String(option.value ?? `option${index + 1}`);
              const optionLabel = option.label || optionValue;
              const optionId = `radio-${optionValue}-${index}`;

              return (
                <label key={`${optionValue}-${index}`} htmlFor={optionId} className="flex items-center gap-2">
                  <RadioGroupItem value={optionValue} id={optionId} />
                  <span>{optionLabel}</span>
                </label>
              );
            })}
          </RadioGroup>
        );

      case 'field':
        return <FieldDemoPreview propValues={propValues} customClassName={customClassName} />;

      case 'table':
        return <TableDemoPreview propValues={propValues} customClassName={customClassName} />;
      case 'data-table':
        return <DataTableDemoPreview propValues={propValues} customClassName={customClassName} />;

      default:
        return <div className="text-sm text-muted-foreground">Component preview not implemented</div>;
    }
  };

  return (
    <>
      <PreviewCanvas componentName={config.name}>{renderComponent()}</PreviewCanvas>

      <PropertiesPanel
        props={propsConfig}
        values={propValues}
        onChange={handlePropChange}
        jsxCode={generatedCode.jsxCode}
        cssClasses={generatedCode.cssClasses}
        componentName={config.name}
        customClassName={customClassName}
        onCustomClassChange={handleCustomClassChange}
      />
    </>
  );
}

function FieldDemoPreview({ propValues, customClassName }) {
  const showDescription = propValues.showDescription !== false;
  const showError = Boolean(propValues.showError);
  const legendVariant = propValues.legendVariant || 'legend';
  const orientation = propValues.orientation || 'vertical';
  const errorMessage = propValues.errorMessage || 'Please enter a valid email address.';

  return (
    <div className="w-full max-w-xl space-y-5">
      <FieldSet>
        <FieldLegend variant={legendVariant}>{propValues.legendText || 'Profile Details'}</FieldLegend>
        <FieldGroup>
          <Field orientation={orientation} data-invalid={showError || undefined} className={customClassName || ''}>
            <FieldLabel>
              <FieldTitle>{propValues.labelText || 'Email Address'}</FieldTitle>
            </FieldLabel>
            <FieldContent>
              <div
                data-slot="field-control"
                className="rounded-md border border-dashed border-input bg-muted/30 px-3 py-2 text-sm text-muted-foreground"
              >
                {propValues.controlText || 'Attach your form control here'}
              </div>
              {showDescription && (
                <FieldDescription>{propValues.descriptionText || 'We will only use this for product updates.'}</FieldDescription>
              )}
              {showError && <FieldError errors={[{ message: errorMessage }]} />}
            </FieldContent>
          </Field>

          <FieldSeparator>{propValues.separatorText || 'Optional'}</FieldSeparator>
        </FieldGroup>
      </FieldSet>

      <div className="rounded-md border border-border bg-card p-3 text-xs">
        <div className="mb-2 font-medium">Libraries and config used</div>
        <ul className="space-y-1 text-muted-foreground">
          <li>react: useMemo in FieldError for unique error rendering</li>
          <li>class-variance-authority: fieldVariants (orientation)</li>
          <li>@repo/utils: cn class merge helper</li>
          <li>@repo/components/ui/label + separator primitives</li>
          <li>Tailwind utility selectors for slot/state styling</li>
        </ul>
      </div>
    </div>
  );
}

function TableDemoPreview({ propValues, customClassName }) {
  const rows = [
    {
      invoice: 'INV001',
      paymentStatus: 'Paid',
      paymentMethod: 'Credit Card',
      totalAmount: '$250.00',
    },
    {
      invoice: 'INV002',
      paymentStatus: 'Pending',
      paymentMethod: 'PayPal',
      totalAmount: '$150.00',
    },
    {
      invoice: 'INV003',
      paymentStatus: 'Unpaid',
      paymentMethod: 'Bank Transfer',
      totalAmount: '$350.00',
    },
  ];

  return (
    <div className="w-full max-w-3xl">
      <Table className={customClassName || ''}>
        <TableCaption>{propValues.caption || 'A list of recent invoices.'}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>{propValues.header1 || 'Invoice'}</TableHead>
            <TableHead>{propValues.header2 || 'Status'}</TableHead>
            <TableHead>{propValues.header3 || 'Method'}</TableHead>
            <TableHead className="text-right">{propValues.header4 || 'Amount'}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.invoice}>
              <TableCell className="font-medium">{row.invoice}</TableCell>
              <TableCell>{row.paymentStatus}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell className="text-right">{row.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {propValues.showFooter !== false && (
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$750.00</TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </div>
  );
}

function DataTableDemoPreview({ propValues, customClassName }) {
  const data = useMemo(
    () => [
      { id: 'pay_001', email: 'olivia@example.com', status: 'paid', amount: 250 },
      { id: 'pay_002', email: 'jack@example.com', status: 'pending', amount: 150 },
      { id: 'pay_003', email: 'isabella@example.com', status: 'failed', amount: 350 },
      { id: 'pay_004', email: 'ethan@example.com', status: 'paid', amount: 420 },
      { id: 'pay_005', email: 'mia@example.com', status: 'pending', amount: 210 },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <input
            type="checkbox"
            aria-label="Select all"
            checked={table.getIsAllPageRowsSelected()}
            ref={(el) => {
              if (el) {
                el.indeterminate = table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected();
              }
            }}
            onChange={(event) => table.toggleAllPageRowsSelected(event.target.checked)}
          />
        ),
        cell: ({ row }) => (
          <input
            type="checkbox"
            aria-label="Select row"
            checked={row.getIsSelected()}
            onChange={(event) => row.toggleSelected(event.target.checked)}
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: 'email',
        header: ({ column }) => (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        ),
      },
      {
        accessorKey: 'status',
        header: 'Status',
      },
      {
        accessorKey: 'amount',
        header: () => <div className="text-right">Amount</div>,
        cell: ({ row }) => {
          const amount = Number(row.getValue('amount'));
          const formatted = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(amount);
          return <div className="text-right font-medium">{formatted}</div>;
        },
      },
      {
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => navigator.clipboard.writeText(row.original.id)}>
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
      },
    ],
    []
  );

  return (
    <div className="w-full max-w-5xl">
      <DataTable
        className={customClassName || ''}
        columns={columns}
        data={data}
        filterColumn="email"
        filterPlaceholder={propValues.filterPlaceholder || 'Filter emails...'}
        noResultsText={propValues.noResultsText || 'No results.'}
        showFilter={propValues.showFilter !== false}
        showPagination={propValues.showPagination !== false}
        showColumnVisibility={propValues.showColumnVisibility !== false}
        showRowSelectionCount={propValues.showRowSelectionCount !== false}
      />
    </div>
  );
}

// Dialog Demo Component with state management
function DialogDemo({ propValues, customClassName }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={customClassName}>{propValues.triggerText || "Open Dialog"}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{propValues.title || "Dialog Title"}</DialogTitle>
          <DialogDescription>{propValues.description || "Dialog description goes here."}</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            {propValues.bodyText || "This is the dialog body content. You can add any content here."}
          </p>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            {propValues.cancelText || "Cancel"}
          </Button>
          <Button onClick={() => setOpen(false)}>{propValues.confirmText || "Continue"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// Sonner Demo Component
function SonnerDemo({ propValues }) {
  const showToast = () => {
    const type = propValues.type || 'default';
    const title = propValues.title || 'Event has been created';
    const description = propValues.description || 'Monday, January 3rd at 6:00pm';
    const hasAction = propValues.action;
    const hasCancel = propValues.cancel;

    const options = {
      description: description,
    };

    if (hasAction) {
      options.action = {
        label: 'Undo',
        onClick: () => console.log('Undo'),
      };
    }

    if (hasCancel) {
      options.cancel = {
        label: 'Cancel',
        onClick: () => console.log('Cancel'),
      };
    }

    switch (type) {
      case 'success':
        toast.success(title, options);
        break;
      case 'error':
        toast.error(title, { description });
        break;
      case 'warning':
        toast.warning(title, { description });
        break;
      case 'info':
        toast.info(title, { description });
        break;
      case 'loading':
        toast.loading(title, { description });
        break;
      case 'promise':
        const promise = () => new Promise((resolve) => setTimeout(resolve, 2000));
        toast.promise(promise, {
          loading: 'Loading...',
          success: title,
          error: 'Error',
        });
        break;
      default:
        toast(title, options);
    }
  };

  return (
    <Button onClick={showToast}>
      Show Toast
    </Button>
  );
}
