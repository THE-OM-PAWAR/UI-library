import * as Components from "@repo/components";
import { PreviewCanvas } from "./PreviewCanvas.jsx";
import { componentConfigs } from "../registry/componentConfigs.js";
import { 
  renderButton, 
  renderDialog, 
  renderDropdownMenu, 
  renderTooltip,
  renderInput,
  renderAlert,
  renderSonner,
  renderTabs,
  renderRadio,
  renderBadge,
  renderCard,
  renderField,
  renderTable,
  renderDataTable
} from "./renderers/index.jsx";

export function ComponentRenderer({ componentId }) {
  const config = componentConfigs[componentId];

  if (!config) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-muted-foreground">Component not found</div>
      </div>
    );
  }

  const renderComponent = () => {
    const renderers = {
      button: renderButton,
      dialog: renderDialog,
      "dropdown-menu": renderDropdownMenu,
      tooltip: renderTooltip,
      input: renderInput,
      alert: renderAlert,
      sonner: renderSonner,
      tabs: renderTabs,
      radio: renderRadio,
      badge: renderBadge,
      card: renderCard,
      field: renderField,
      table: renderTable,
      "data-table": renderDataTable,
    };

    const renderer = renderers[componentId];
    
    if (!renderer) {
      return <div className="text-sm text-muted-foreground">Component preview not implemented</div>;
    }

    return renderer(Components);
  };

  return (
    <PreviewCanvas componentName={config.name}>
      {renderComponent()}
    </PreviewCanvas>
  );
}
