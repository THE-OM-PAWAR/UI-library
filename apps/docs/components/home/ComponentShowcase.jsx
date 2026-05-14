"use client";

import React, { useRef, useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    Alert,
    AlertDescription,
    AlertTitle,
    Avatar,
    AvatarFallback,
    AvatarGroup,
    AvatarGroupCount,
    Badge,
    Button,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    Input,
    Label,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Progress,
    Switch,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@repo/components";
import {
    Bell,
    Info,
    Mail,
    MoreHorizontal,
    Settings,
    UserRound,
} from "lucide-react";
import styles from "@/css/home/ComponentShowcase.module.css";

const components = [
    {
        name: "Button",
        title: "Buttons that feel crisp and responsive.",
        examples: [
            <div className={styles.demoRow} key="buttons">
                <Button>Get Started</Button>
                <Button variant="outline">View Docs</Button>
                <Button variant="secondary">Install</Button>
            </div>,
        ],
    },
    {
        name: "Input",
        title: "Inputs with calm focus states.",
        examples: [
            <div className={styles.formDemo} key="input">
                <Label htmlFor="showcase-email">Email</Label>
                <Input id="showcase-email" defaultValue="hello@frostui.dev" />
                <Label htmlFor="showcase-search">Search</Label>
                <Input id="showcase-search" defaultValue="Search components..." />
            </div>,
        ],
    },
    {
        name: "Card",
        title: "Cards for compact content blocks.",
        examples: [
            <Card className={styles.cardDemo} key="card">
                <CardHeader>
                    <CardTitle>Component Kit</CardTitle>
                    <CardDescription>Ready-made primitives for product UI.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Build consistent forms, overlays, lists, and navigation.</p>
                </CardContent>
                <CardFooter>
                    <Button size="sm">Open</Button>
                    <Button size="sm" variant="outline">Preview</Button>
                </CardFooter>
            </Card>,
        ],
    },
    {
        name: "Dialog",
        title: "Dialogs for focused decisions.",
        examples: [
            <Dialog key="dialog">
                <DialogTrigger asChild>
                    <Button variant="outline">Open dialog</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Publish changes?</DialogTitle>
                        <DialogDescription>Your updates will be visible instantly.</DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button>Publish</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>,
        ],
    },
    {
        name: "Tabs",
        title: "Tabs for switching between views.",
        examples: [
            <Tabs defaultValue="preview" className={styles.tabsDemo} key="tabs">
                <TabsList>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                    <TabsTrigger value="install">Install</TabsTrigger>
                </TabsList>
                <TabsContent value="preview">Preview your component before shipping.</TabsContent>
                <TabsContent value="code">Copy clean, production-ready examples.</TabsContent>
                <TabsContent value="install">Install only the pieces you need.</TabsContent>
            </Tabs>,
        ],
    },
    {
        name: "Accordion",
        title: "Accordions for tidy information stacks.",
        examples: [
            <Accordion type="single" collapsible className={styles.accordionDemo} key="accordion">
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is Frost UI?</AccordionTrigger>
                    <AccordionContent>A set of accessible React components for polished apps.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Can I customize it?</AccordionTrigger>
                    <AccordionContent>Yes. Compose it with your own tokens and layouts.</AccordionContent>
                </AccordionItem>
            </Accordion>,
        ],
    },
    {
        name: "Alert",
        title: "Alerts for important status messages.",
        examples: [
            <Alert className={styles.alertDemo} key="alert">
                <Info className="size-4" />
                <AlertTitle>Deployment complete</AlertTitle>
                <AlertDescription>Your latest build is now live.</AlertDescription>
            </Alert>,
        ],
    },
    {
        name: "Badge",
        title: "Badges for small pieces of context.",
        examples: [
            <div className={styles.demoRow} key="badges">
                <Badge>New</Badge>
                <Badge variant="secondary">Beta</Badge>
                <Badge variant="outline">Stable</Badge>
                <Badge variant="destructive">Deprecated</Badge>
            </div>,
        ],
    },
    {
        name: "Avatar",
        title: "Avatars for people and teams.",
        examples: [
            <AvatarGroup key="avatars">
                <Avatar><AvatarFallback>AK</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>UI</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>RS</AvatarFallback></Avatar>
                <AvatarGroupCount>+4</AvatarGroupCount>
            </AvatarGroup>,
        ],
    },
    {
        name: "Dropdown Menu",
        title: "Dropdown menus with clean grouping.",
        examples: [
            <DropdownMenu key="dropdown">
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                        Actions
                        <MoreHorizontal className="ml-2 size-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Rename</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuItem>Archive</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>,
        ],
    },
    {
        name: "Popover",
        title: "Popovers for lightweight details.",
        examples: [
            <Popover key="popover">
                <PopoverTrigger asChild>
                    <Button variant="outline">
                        <UserRound className="mr-2 size-4" />
                        Open profile
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-72">
                    <div className="grid gap-1">
                        <strong>Frost UI</strong>
                    <p className="text-sm text-muted-foreground">
                        Reusable components for React apps.
                    </p>
                    </div>
                </PopoverContent>
            </Popover>,
        ],
    },
    {
        name: "Tooltip",
        title: "Tooltips for quick guidance.",
        examples: [
            <TooltipProvider key="tooltip">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline">
                            <Mail className="mr-2 size-4" />
                            Hover target
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Copy component name</TooltipContent>
                </Tooltip>
            </TooltipProvider>,
        ],
    },
    {
        name: "Progress",
        title: "Progress states for async flows.",
        examples: [
            <div className={styles.progressDemo} key="progress">
                <div>
                    <span>Install progress</span>
                    <strong>72%</strong>
                </div>
                <Progress color="#4f8cff" value={72} />
            </div>,
        ],
    },
    {
        name: "Table",
        title: "Tables for readable data views.",
        examples: [
            <Table className={styles.tableDemo} key="table">
                <TableHeader>
                    <TableRow>
                        <TableHead>Component</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Button</TableCell>
                        <TableCell>Ready</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Dialog</TableCell>
                        <TableCell>Ready</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Table</TableCell>
                        <TableCell>Beta</TableCell>
                    </TableRow>
                </TableBody>
            </Table>,
        ],
    },
    {
        name: "Switch",
        title: "Switches for simple preferences.",
        examples: [
            <div className={styles.switchDemo} key="switch">
                <div>
                    <Bell className="size-4" />
                    <Label htmlFor="showcase-notifications">Notifications</Label>
                    <Switch id="showcase-notifications" defaultChecked />
                </div>
                <div>
                    <Settings className="size-4" />
                    <Label htmlFor="showcase-updates">Auto update</Label>
                    <Switch id="showcase-updates" />
                </div>
            </div>,
        ],
    },
];

const ComponentShowcase = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeComponent = components[activeIndex];
    const tabsRef = useRef(null);

    const handleTabsWheel = (event) => {
        const tabList = tabsRef.current;

        if (
            !tabList ||
            tabList.scrollWidth <= tabList.clientWidth ||
            Math.abs(event.deltaY) <= Math.abs(event.deltaX)
        ) {
            return;
        }

        event.preventDefault();
        tabList.scrollLeft += event.deltaY;
    };

    return (
        <div className={styles.wraper}>
            <section className={styles.showcase}>
                <div className={styles.frame}>
                    <div className={styles.topbar}>
                        <div className={styles.dots} aria-hidden="true">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div
                        className={styles.componentTabs}
                        onWheel={handleTabsWheel}
                        ref={tabsRef}
                    >
                        {components.map((component, index) => (
                            <button
                                className={`${styles.componentTab} ${index === activeIndex ? styles.activeTab : ""}`}
                                key={component.name}
                                onClick={() => setActiveIndex(index)}
                                type="button"
                            >
                                {component.name}
                            </button>
                        ))}
                    </div>

                    <div className={styles.stage}>
                        <div className={styles.examplePanel}>
                            <div className={styles.exampleHeader}>
                                <span>{activeComponent.name}</span>
                                <h2>{activeComponent.title}</h2>
                            </div>
                            <div className={styles.exampleGrid}>
                                {activeComponent.examples}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ComponentShowcase;
