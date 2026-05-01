import * as Components from "@repo/components";
import { componentConfigs } from "../registry/componentConfigs.js";
import { PreviewCanvas } from "./PreviewCanvas.jsx";
import {
    renderAccordion,
    renderAlert,
    renderAvatar,
    renderBadge,
    renderBreadcrumb,
    renderButton,
    renderButtonGroup,
    renderCalendar,
    renderCard,
    renderCarousel,
    renderCollapsible,
    renderCombobox,
    renderContextMenu,
    renderDataTable,
    renderDialog,
    renderDrawer,
    renderDropdownMenu,
    renderEmpty,
    renderField,
    renderHoverCard,
    renderImage,
    renderInput,
    renderItem,
    renderKbd,
    renderLabel,
    renderMenubar,
    renderNavigationMenu,
    renderPagination,
    renderProgress,
    renderRadio,
    renderResizable,
    renderScrollArea,
    renderSeparator,
    renderSheet,
    renderSkeleton,
    renderSonner,
    renderSwitch,
    renderTable,
    renderTabs,
    renderTooltip,
} from "./renderers/index.jsx";

export function ComponentRenderer({ componentId }) {
    const config = componentConfigs[componentId];

    if (!config) {
        return (
            <div className="flex items-center justify-center flex-1">
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
            "context-menu": renderContextMenu,
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
            "scroll-area": renderScrollArea,
            "hover-card": renderHoverCard,
            "button-group": renderButtonGroup,
            empty: renderEmpty,
            collapsible: renderCollapsible,
            combobox: renderCombobox,
            accordion: renderAccordion,
            avatar: renderAvatar,
            calendar: renderCalendar,
            breadcrumb: renderBreadcrumb,
            carousel: renderCarousel,
            "navigation-menu": renderNavigationMenu,
            pagination: renderPagination,
            sheet: renderSheet,
            resizable: renderResizable,
            progress: renderProgress,
            image: renderImage,
        };

        const renderer = renderers[componentId];

        if (!renderer) {
            return (
                <div className="text-sm text-muted-foreground">
                    Component preview not implemented
                </div>
            );
        }

        return renderer(Components);
    };

    return (
        <PreviewCanvas componentName={config.name}>
            {renderComponent()}
        </PreviewCanvas>
    );
}
