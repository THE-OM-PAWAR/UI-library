import { Toaster, TooltipProvider } from "@repo/components";
import { useState } from "react";
import { ComponentRenderer } from "./components/ComponentRenderer.jsx";
import { Navigation } from "./components/Navigation.jsx";
import { componentList } from "./registry/componentConfigs.js";

function App() {
    const [activeComponent, setActiveComponent] = useState("progress");

    return (
        <TooltipProvider>
            <div className="flex h-screen overflow-hidden bg-background text-foreground">
                {/* Left Sidebar - Navigation */}
                <Navigation
                    components={componentList}
                    activeComponent={activeComponent}
                    onSelect={setActiveComponent}
                />

                {/* Main Content Area - Preview + Properties */}
                <main className="flex flex-1 overflow-hidden">
                    <ComponentRenderer componentId={activeComponent} />
                </main>
            </div>

            {/* Toast notifications */}
            <Toaster />
        </TooltipProvider>
    );
}

export default App;
