"use client";

import {
    Avatar,
    AvatarFallback,
    AvatarGroup,
    AvatarGroupCount,
    Badge,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Input,
    Progress,
    Switch,
} from "@repo/components";
import {
    Bell,
    Heart,
    Mail,
    Moon,
    Search,
    Star,
    Trash2,
    Wand2,
} from "lucide-react";
import { useState } from "react";

export function ComponentShowcase() {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Buttons */}
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                        Buttons
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                    <Button size="sm">Primary</Button>
                    <Button size="sm" variant="outline">
                        Outline
                    </Button>
                    <Button size="sm" variant="ghost">
                        Ghost
                    </Button>
                    <Button size="sm" variant="destructive">
                        <Trash2 />
                        Delete
                    </Button>
                    <Button size="sm" variant="secondary">
                        <Wand2 />
                        Generate
                    </Button>
                </CardContent>
            </Card>

            {/* Badges */}
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                        Badges
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap items-center gap-2">
                    <Badge>New</Badge>
                    <Badge variant="secondary">Beta</Badge>
                    <Badge variant="outline">v2.0</Badge>
                    <Badge variant="destructive">Breaking</Badge>
                    <Badge variant="secondary">
                        <Star className="size-3" />
                        Featured
                    </Badge>
                </CardContent>
            </Card>

            {/* Avatars */}
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                        Avatars
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                        <AvatarGroup>
                            <Avatar>
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <Avatar>
                                <AvatarFallback>AB</AvatarFallback>
                            </Avatar>
                            <Avatar>
                                <AvatarFallback>MK</AvatarFallback>
                            </Avatar>
                            <AvatarGroupCount count={42} />
                        </AvatarGroup>
                        <span className="text-sm text-muted-foreground">
                            45 members
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Avatar size="sm">
                            <AvatarFallback>SM</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarFallback>MD</AvatarFallback>
                        </Avatar>
                        <Avatar size="lg">
                            <AvatarFallback>LG</AvatarFallback>
                        </Avatar>
                    </div>
                </CardContent>
            </Card>

            {/* Input */}
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                        Inputs
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2 size-4 text-muted-foreground" />
                        <Input
                            placeholder="Search components..."
                            className="pl-8"
                        />
                    </div>
                    <div className="relative">
                        <Mail className="absolute left-2.5 top-2 size-4 text-muted-foreground" />
                        <Input
                            type="email"
                            placeholder="Enter email..."
                            className="pl-8"
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Toggles */}
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                        Toggles
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm">
                            <Bell className="size-4 text-muted-foreground" />
                            Notifications
                        </div>
                        <Switch
                            checked={notifications}
                            onCheckedChange={setNotifications}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm">
                            <Moon className="size-4 text-muted-foreground" />
                            Dark mode
                        </div>
                        <Switch
                            checked={darkMode}
                            onCheckedChange={setDarkMode}
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Profile card + progress */}
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                        Card
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                        <Avatar size="lg">
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium">Jane Doe</p>
                            <p className="text-xs truncate text-muted-foreground">
                                jane@example.com
                            </p>
                        </div>
                        <Button size="sm" variant="outline">
                            <Heart className="size-3.5" />
                            Follow
                        </Button>
                    </div>
                    <div className="space-y-1.5">
                        <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Profile complete</span>
                            <span>78%</span>
                        </div>
                        <Progress value={78} height={6} />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
