import * as ScrollArea from '@radix-ui/react-scroll-area';
import * as Separator from '@radix-ui/react-separator';
import * as Collapsible from '@radix-ui/react-collapsible';
import { Settings, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { PropertyControl } from './preview/PropertyControl.jsx';

export function PropertiesPanel({ props, values, onChange, jsxCode, cssClasses, componentName, customClassName, onCustomClassChange }) {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  return (
    <aside className="w-80 border-l border-border bg-background flex flex-col">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          <Settings className="h-4 w-4 text-muted-foreground" />
          <h2 className="text-sm font-semibold">Properties</h2>
        </div>
      </div>

      {/* Properties Controls with ScrollArea */}
      <ScrollArea.Root className="flex-1 overflow-hidden">
        <ScrollArea.Viewport className="h-full w-full">
          <div className="p-4 space-y-4">
            {props && props.length > 0 ? (
              <>
                {props.map((prop) => (
                  <PropertyControl
                    key={prop.name}
                    prop={prop}
                    value={values[prop.name]}
                    onChange={(value) => onChange(prop.name, value)}
                  />
                ))}
              </>
            ) : (
              <div className="text-sm text-muted-foreground">
                No configurable properties
              </div>
            )}

            {/* Advanced Section - Custom CSS */}
            <Collapsible.Root open={isAdvancedOpen} onOpenChange={setIsAdvancedOpen}>
              <Separator.Root className="my-4 h-px bg-border" />
              
              <Collapsible.Trigger className="flex w-full items-center justify-between py-2 text-sm font-medium hover:text-foreground transition-colors">
                <span>Advanced</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isAdvancedOpen ? 'rotate-180' : ''
                  }`}
                />
              </Collapsible.Trigger>

              <Collapsible.Content className="space-y-3 pt-3">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-foreground">
                    Custom CSS Classes
                  </label>
                  <textarea
                    value={customClassName || ''}
                    onChange={(e) => onCustomClassChange(e.target.value)}
                    placeholder="e.g., shadow-lg hover:scale-105"
                    className="w-full min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors resize-none"
                  />
                  <p className="text-xs text-muted-foreground">
                    Add Tailwind classes to customize the component styling
                  </p>
                </div>
              </Collapsible.Content>
            </Collapsible.Root>
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="flex touch-none select-none p-0.5 bg-transparent transition-colors hover:bg-accent/50"
          orientation="vertical"
        >
          <ScrollArea.Thumb className="flex-1 bg-border rounded-full relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </aside>
  );
}
