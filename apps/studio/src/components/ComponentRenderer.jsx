import * as Components from "@repo/components";
import { PreviewCanvas } from "./PreviewCanvas.jsx";
import { componentConfigs } from "../registry/componentConfigs.js";
import {
  renderButton,
  renderDialog,
  renderDrawer,
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
  renderDataTable,
  renderSwitch,
  renderSeparator,
  renderKbd,
  renderLabel,
  renderItem,
  renderMenubar,
  renderSkeleton,
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
      drawer: renderDrawer,
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
      switch: renderSwitch,
      separator: renderSeparator,
      kbd: renderKbd,
      label: renderLabel,
      item: renderItem,
      menubar: renderMenubar,
      skeleton: renderSkeleton,
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
