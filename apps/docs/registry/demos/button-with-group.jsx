import {
    Button,
    ButtonGroup,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@shery-ui/components";
import {
    ArchiveIcon,
    ArrowLeftIcon,
    CalendarPlusIcon,
    ClockIcon,
    ListFilterIcon,
    MailCheckIcon,
    MoreHorizontalIcon,
    TagIcon,
    Trash2Icon,
} from "lucide-react";
import * as React from "react";

export default function ButtonGroupDemo({ customClassName }) {
    return (
        <ButtonGroup>
            <ButtonGroup className="hidden sm:flex">
                <Button variant="outline" size="icon" aria-label="Go Back">
                    <ArrowLeftIcon />
                </Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button variant="outline">Archive</Button>
                <Button variant="outline">Report</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button variant="outline">Snooze</Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className={customClassName}>
                            <MoreHorizontalIcon />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem className="flex gap-2">
                            <MailCheckIcon />
                            Mark as Read
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex gap-2">
                            <ArchiveIcon />
                            Archive
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="flex gap-2">
                            <ClockIcon />
                            Snooze
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex gap-2">
                            <CalendarPlusIcon />
                            Add to Calendar
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex gap-2">
                            <CalendarPlusIcon />
                            Add to Calendar
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex gap-2">
                            <ListFilterIcon />
                            Add to List
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </ButtonGroup>
        </ButtonGroup>
    );
}
