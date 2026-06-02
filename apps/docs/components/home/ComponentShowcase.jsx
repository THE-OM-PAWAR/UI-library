"use client";

import {
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
    DataTable,
    Input,
    Kbd,
    Label,
    Progress,
    Separator,
    Skeleton,
    Spinner,
    Switch,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    Textarea,
    Toggle,
} from "@repo/components";
import { Bell, Info, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";
import styles from "@/css/home/ComponentShowcase.module.css";

const dataTableColumns = [
    {
        accessorKey: "component",
        header: "Component",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "usage",
        header: "Usage",
    },
];

const dataTableData = [
    {
        component: "Button",
        status: "Ready",
        usage: "12k",
    },
    {
        component: "Tabs",
        status: "Ready",
        usage: "8.4k",
    },
    {
        component: "Card",
        status: "Beta",
        usage: "4.1k",
    },
    {
        component: "Input",
        status: "Ready",
        usage: "3.2k",
    },
];

const bentoItems = [
    {
        title: "Buttons",
        description: "Primary, secondary, and outline actions.",
        className: "",
        content: (
            <div className={styles.demoRow}>
                <Button size="xs">Get Started</Button>
                <Button size="xs" variant="outline">
                    View Docs
                </Button>
                <Button size="xs" variant="secondary">
                    Install
                </Button>
            </div>
        ),
    },
    {
        title: "Form Inputs",
        description: "Clean fields with calm focus states.",
        className: "",
        content: (
            <div className={styles.formDemo}>
                <Label htmlFor="bento-email">Email</Label>
                <Input id="bento-email" defaultValue="hello@frostui.dev" />
                <Label htmlFor="bento-search">Search</Label>
                <Input id="bento-search" defaultValue="Search components..." />
            </div>
        ),
    },
    {
        title: "Cards",
        description: "Compact containers for product content.",
        className: "",
        content: (
            <Card className={styles.cardDemo}>
                <CardHeader>
                    <CardTitle>Component Kit</CardTitle>
                    <CardDescription>
                        Ready-made primitives for product UI.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>
                        Build consistent forms, overlays, lists, and navigation.
                    </p>
                </CardContent>
                <CardFooter>
                    <Button size="xs">Open</Button>
                    <Button size="xs" variant="outline">
                        Preview
                    </Button>
                </CardFooter>
            </Card>
        ),
    },
    {
        title: "Tabs",
        description: "Swap between views without leaving context.",
        className: "",
        content: (
            <Tabs defaultValue="preview" className={styles.tabsDemo}>
                <TabsList className={styles.tabsListCompact}>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                    <TabsTrigger value="install">Install</TabsTrigger>
                </TabsList>
                <TabsContent value="preview">
                    Preview before shipping.
                </TabsContent>
                <TabsContent value="code">Copy examples quickly.</TabsContent>
                <TabsContent value="install">
                    Install what you need.
                </TabsContent>
            </Tabs>
        ),
    },
    {
        title: "Data Table",
        description: "Compact data overview.",
        className: "",
        content: (
            <DataTable
                className={styles.dataTableShell}
                columns={dataTableColumns}
                data={dataTableData}
                showFilter={false}
                showPagination={false}
                showColumnVisibility={false}
                showRowSelectionCount={false}
            />
        ),
    },
    {
        title: "Alerts",
        description: "Status updates that are easy to scan.",
        className: "",
        content: (
            <Alert className={styles.alertDemo}>
                <Info className="size-4" />
                <AlertTitle>Deployment complete</AlertTitle>
                <AlertDescription>
                    Your latest build is now live.
                </AlertDescription>
            </Alert>
        ),
    },
    {
        title: "Badges",
        description: "Quick context chips.",
        className: "",
        content: (
            <div className={styles.badgeRow}>
                <Badge>New</Badge>
                <Badge variant="secondary">Beta</Badge>
                <Badge variant="outline">Stable</Badge>
                <Badge variant="destructive">Deprecated</Badge>
            </div>
        ),
    },
    {
        title: "Avatars",
        description: "Team presence at a glance.",
        className: "",
        content: (
            <AvatarGroup>
                <Avatar>
                    <AvatarFallback>AK</AvatarFallback>
                </Avatar>
                <Avatar>
                    <AvatarFallback>UI</AvatarFallback>
                </Avatar>
                <Avatar>
                    <AvatarFallback>RS</AvatarFallback>
                </Avatar>
                <AvatarGroupCount>+4</AvatarGroupCount>
            </AvatarGroup>
        ),
    },
    {
        title: "Progress",
        description: "Async flow milestones at a glance.",
        className: "",
        content: (
            <div className={styles.progressDemo}>
                <div>
                    <span>Install progress</span>
                    <strong>72%</strong>
                </div>
                <Progress color="#111111" value={72} />
            </div>
        ),
    },
    {
        title: "Toggles",
        description: "Compact switches for modes.",
        className: "",
        content: (
            <div className={styles.toggleRow}>
                <Toggle size="sm" variant="outline">
                    Grid
                </Toggle>
                <Toggle size="sm" variant="outline">
                    Cards
                </Toggle>
                <Toggle size="sm" variant="outline">
                    List
                </Toggle>
            </div>
        ),
    },
    {
        title: "Shortcuts",
        description: "Keyboard hints for power users.",
        className: "",
        content: (
            <div className={styles.kbdStack}>
                <div className={styles.kbdRow}>
                    <Kbd>Ctrl</Kbd>
                    <Kbd>K</Kbd>
                    <span>Search</span>
                </div>
                <div className={styles.kbdRow}>
                    <Kbd>Shift</Kbd>
                    <Kbd>P</Kbd>
                    <span>Commands</span>
                </div>
            </div>
        ),
    },
    {
        title: "Textarea",
        description: "Quick notes with a soft surface.",
        className: "",
        content: (
            <Textarea
                className={styles.textareaCompact}
                placeholder="Leave a note..."
                rows={3}
            />
        ),
    },
    {
        title: "Loading",
        description: "Subtle progress feedback.",
        className: "",
        content: (
            <div className={styles.skeletonStack}>
                <div className={styles.loadingRow}>
                    <Spinner />
                    <span>Syncing tokens</span>
                </div>
                <Skeleton className={styles.skeletonLine} />
                <Skeleton className={styles.skeletonLineShort} />
            </div>
        ),
    },
    {
        title: "Switches",
        description: "Simple preferences with clear states.",
        className: "",
        content: (
            <div className={styles.switchDemo}>
                <div>
                    <Bell className="size-4" />
                    <Label htmlFor="bento-notifications">Notifications</Label>
                    <Switch id="bento-notifications" defaultChecked />
                </div>
                <div>
                    <Settings className="size-4" />
                    <Label htmlFor="bento-updates">Auto update</Label>
                    <Switch id="bento-updates" />
                </div>
            </div>
        ),
    },
    {
        title: "Quick Actions",
        description: "Small actions that stay handy.",
        className: "",
        content: (
            <div className={styles.demoRow}>
                <Button size="xs">Import</Button>
                <Button size="xs" variant="outline">
                    Copy
                </Button>
                <Button size="xs" variant="secondary">
                    Share
                </Button>
            </div>
        ),
    },
    {
        title: "Divider",
        description: "Separation between sections.",
        className: "",
        content: (
            <div className={styles.separatorStack}>
                <span>Overview</span>
                <Separator className={styles.separatorLine} />
                <span>Details</span>
                <Separator className={styles.separatorLine} />
                <span>Notes</span>
            </div>
        ),
    },
    {
        title: "Icon Buttons",
        description: "Quick tools in a tight row.",
        className: "",
        content: (
            <div className={styles.iconRow}>
                <Button
                    size="icon-xs"
                    variant="outline"
                    aria-label="Notifications"
                >
                    <Bell className="size-3" />
                </Button>
                <Button size="icon-xs" variant="outline" aria-label="Info">
                    <Info className="size-3" />
                </Button>
                <Button size="icon-xs" variant="outline" aria-label="Settings">
                    <Settings className="size-3" />
                </Button>
            </div>
        ),
    },
    {
        title: "Stats",
        description: "Small usage highlights.",
        className: "",
        content: (
            <div className={styles.statList}>
                <div>
                    <span>Active</span>
                    <strong>1.2k</strong>
                </div>
                <div>
                    <span>New</span>
                    <strong>86</strong>
                </div>
                <div>
                    <span>Issues</span>
                    <strong>4</strong>
                </div>
            </div>
        ),
    },
];

const ComponentShowcase = () => {
    return (
        <div className={styles.wraper}>
            <section className={styles.showcase}>
                <div className={styles.bentoSurface}>
                    <div className={styles.bentoHeader}>
                        <span>Components</span>
                        <h2>Preview the library from every angle.</h2>
                        <p>
                            Each tile spotlights a core building block, ready to
                            compose into real UI.
                        </p>
                    </div>
                    <div className={styles.bentoGrid}>
                        {bentoItems.map((item) => (
                            <div
                                className={`${styles.bentoCard} ${item.className}`}
                                key={item.title}
                            >
                                <div className={styles.bentoCardHeader}>
                                    <strong>{item.title}</strong>
                                    <p>{item.description}</p>
                                </div>
                                <div className={styles.bentoCardBody}>
                                    {item.content}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.moreActions}>
                        <Button size="sm" variant="outline" asChild>
                            <Link href="/docs/components">View more</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ComponentShowcase;
