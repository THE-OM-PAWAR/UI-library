"use client";

import { cn } from "@repo/utils";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import { Button, buttonVariants } from "./button.jsx";

function Calendar({
    className,
    classNames,
    showOutsideDays = true,
    captionLayout = "label",
    buttonVariant = "ghost",
    locale,
    formatters,
    components,
    ...props
}) {
    const defaultClassNames = getDefaultClassNames();

    return (
        <DayPicker
            showOutsideDays={showOutsideDays}
            captionLayout={captionLayout}
            locale={locale}
            className={cn(
                "group/calendar rounded-lg bg-background p-2",
                className
            )}
            formatters={{
                formatMonthDropdown: (date) =>
                    date.toLocaleString(locale?.code, { month: "short" }),
                ...formatters,
            }}
            classNames={{
                root: cn("w-fit", defaultClassNames.root),
                months: cn(
                    "relative flex flex-col gap-4 md:flex-row",
                    defaultClassNames.months
                ),
                month: cn(
                    "flex w-full flex-col gap-4",
                    defaultClassNames.month
                ),
                nav: cn(
                    "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
                    defaultClassNames.nav
                ),
                button_previous: cn(
                    buttonVariants({ variant: buttonVariant, size: "icon-sm" }),
                    "select-none aria-disabled:opacity-50",
                    defaultClassNames.button_previous
                ),
                button_next: cn(
                    buttonVariants({ variant: buttonVariant, size: "icon-sm" }),
                    "select-none aria-disabled:opacity-50",
                    defaultClassNames.button_next
                ),
                month_caption: cn(
                    "flex h-8 w-full items-center justify-center px-8",
                    defaultClassNames.month_caption
                ),
                dropdowns: cn(
                    "flex h-8 items-center justify-center gap-1.5 text-sm font-medium",
                    defaultClassNames.dropdowns
                ),
                dropdown_root: cn(
                    "relative rounded-md",
                    defaultClassNames.dropdown_root
                ),
                dropdown: cn(
                    "absolute inset-0 bg-popover opacity-0",
                    defaultClassNames.dropdown
                ),
                caption_label: cn(
                    "font-medium select-none",
                    captionLayout === "label"
                        ? "text-sm"
                        : "flex items-center gap-1 rounded-md text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground",
                    defaultClassNames.caption_label
                ),
                table: cn("w-full border-collapse", defaultClassNames.table),
                weekdays: cn("flex", defaultClassNames.weekdays),
                weekday: cn(
                    "flex-1 rounded-md text-[0.8rem] font-normal text-muted-foreground select-none",
                    defaultClassNames.weekday
                ),
                week: cn("mt-2 flex w-full", defaultClassNames.week),
                week_number_header: cn(
                    "w-8 select-none",
                    defaultClassNames.week_number_header
                ),
                week_number: cn(
                    "text-[0.8rem] text-muted-foreground select-none",
                    defaultClassNames.week_number
                ),
                day: cn(
                    "group/day relative aspect-square h-full w-full rounded-md p-0 text-center select-none",
                    defaultClassNames.day
                ),
                range_start: cn(
                    "rounded-l-md bg-muted",
                    defaultClassNames.range_start
                ),
                range_middle: cn(
                    "rounded-none bg-muted",
                    defaultClassNames.range_middle
                ),
                range_end: cn(
                    "rounded-r-md bg-muted",
                    defaultClassNames.range_end
                ),
                today: cn(
                    "rounded-md bg-muted text-foreground",
                    defaultClassNames.today
                ),
                outside: cn(
                    "text-muted-foreground aria-selected:text-muted-foreground",
                    defaultClassNames.outside
                ),
                disabled: cn(
                    "text-muted-foreground opacity-50",
                    defaultClassNames.disabled
                ),
                hidden: cn("invisible", defaultClassNames.hidden),
                ...classNames,
            }}
            components={{
                Root: ({ className: rootClassName, rootRef, ...rootProps }) => (
                    <div
                        data-slot="calendar"
                        ref={rootRef}
                        className={cn(rootClassName)}
                        {...rootProps}
                    />
                ),
                Chevron: ({
                    className: chevronClassName,
                    orientation,
                    ...chevronProps
                }) => {
                    if (orientation === "left") {
                        return (
                            <ChevronLeft
                                className={cn("size-4", chevronClassName)}
                                {...chevronProps}
                            />
                        );
                    }
                    if (orientation === "right") {
                        return (
                            <ChevronRight
                                className={cn("size-4", chevronClassName)}
                                {...chevronProps}
                            />
                        );
                    }
                    return (
                        <ChevronDown
                            className={cn("size-4", chevronClassName)}
                            {...chevronProps}
                        />
                    );
                },
                DayButton: (dayButtonProps) => (
                    <CalendarDayButton locale={locale} {...dayButtonProps} />
                ),
                WeekNumber: ({ children, ...weekProps }) => (
                    <td {...weekProps}>
                        <div className="flex h-8 w-8 items-center justify-center text-center">
                            {children}
                        </div>
                    </td>
                ),
                ...components,
            }}
            {...props}
        />
    );
}

function CalendarDayButton({ className, day, modifiers, locale, ...props }) {
    const defaultClassNames = getDefaultClassNames();
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (modifiers?.focused) {
            ref.current?.focus();
        }
    }, [modifiers?.focused]);

    return (
        <Button
            ref={ref}
            variant="ghost"
            size="icon-sm"
            data-day={day?.date?.toLocaleDateString(locale?.code)}
            data-selected-single={
                modifiers?.selected &&
                !modifiers?.range_start &&
                !modifiers?.range_end &&
                !modifiers?.range_middle
            }
            data-range-start={modifiers?.range_start}
            data-range-end={modifiers?.range_end}
            data-range-middle={modifiers?.range_middle}
            className={cn(
                "relative z-10 flex h-full w-full min-w-8 flex-col gap-1 border-0 leading-none font-normal",
                "group-data-[focused=true]/day:ring-2 group-data-[focused=true]/day:ring-ring group-data-[focused=true]/day:ring-offset-2 group-data-[focused=true]/day:ring-offset-background",
                "data-[range-end=true]:rounded-r-md data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground",
                "data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-muted data-[range-middle=true]:text-foreground",
                "data-[range-start=true]:rounded-l-md data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground",
                "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground",
                "[&>span]:text-xs [&>span]:opacity-70",
                defaultClassNames.day,
                className
            )}
            {...props}
        />
    );
}

export { Calendar, CalendarDayButton };
