import { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Copy, Check } from 'lucide-react';
import { cn } from '@repo/utils';

export function CodePanel({ jsxCode, cssClasses, componentName }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('jsx');

  const handleCopy = async () => {
    const textToCopy = activeTab === 'jsx' ? jsxCode : cssClasses;
    await navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="flex flex-col">
      {/* Tabs Header */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2">
        <Tabs.List className="flex gap-1">
          <Tabs.Trigger
            value="jsx"
            className={cn(
              'px-3 py-1 text-xs font-medium rounded transition-colors',
              'data-[state=active]:bg-accent data-[state=active]:text-accent-foreground',
              'data-[state=inactive]:text-muted-foreground hover:text-foreground'
            )}
          >
            JSX
          </Tabs.Trigger>
          <Tabs.Trigger
            value="css"
            className={cn(
              'px-3 py-1 text-xs font-medium rounded transition-colors',
              'data-[state=active]:bg-accent data-[state=active]:text-accent-foreground',
              'data-[state=inactive]:text-muted-foreground hover:text-foreground'
            )}
          >
            CSS
          </Tabs.Trigger>
        </Tabs.List>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded text-xs hover:bg-accent transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Display */}
      <Tabs.Content value="jsx" className="p-4 overflow-x-auto">
        <pre className="text-xs">
          <code className="block text-foreground">{jsxCode}</code>
        </pre>
      </Tabs.Content>

      <Tabs.Content value="css" className="p-4 overflow-x-auto">
        <pre className="text-xs">
          <code className="block text-muted-foreground">{cssClasses}</code>
        </pre>
      </Tabs.Content>
    </Tabs.Root>
  );
}
