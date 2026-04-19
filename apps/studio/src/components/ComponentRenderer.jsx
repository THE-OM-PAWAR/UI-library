import { useState, useEffect } from "react";
import {
  Button,
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
} from "@repo/components";
import { extractPropsFromVariants, getDefaultProps } from "../utils/extractComponentProps.js";
import { generateComponentCode } from "../utils/generateCode.js";
import { componentConfigs } from "../registry/componentConfigs.js";
import { PreviewCanvas } from "./PreviewCanvas.jsx";
import { PropertiesPanel } from "./PropertiesPanel.jsx";

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

      case "dialog":

      case 'dialog':
        return <DialogDemo propValues={propValues} customClassName={customClassName} />;

      case "dropdown-menu":

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

      case "tooltip":

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
