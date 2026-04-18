import { useState } from 'react';
import { TooltipProvider, Toaster } from '@repo/components';
import { Navigation } from './components/Navigation.jsx';
import { ComponentRenderer } from './components/ComponentRenderer.jsx';
import { componentList } from './registry/componentConfigs.js';

function App() {
  const [activeComponent, setActiveComponent] = useState('button');

  return (
    <TooltipProvider>
      <div className="h-screen flex bg-background text-foreground overflow-hidden">
        {/* Left Sidebar - Navigation */}
        <Navigation
          components={componentList}
          activeComponent={activeComponent}
          onSelect={setActiveComponent}
        />

        {/* Main Content Area - Preview + Properties */}
        <main className="flex-1 flex overflow-hidden">
          <ComponentRenderer componentId={activeComponent} />
        </main>
      </div>
      
      {/* Toast notifications */}
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
