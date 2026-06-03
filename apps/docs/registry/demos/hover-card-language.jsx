"use client";

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@repo/components";
import { AlertCircle } from "lucide-react";
import React, { useState } from "react";

export default function HoverCardLanguage() {
  const [language, setLanguage] = useState("english");

  const translations = {
    english: {
      left: "Left",
      top: "Top",
      bottom: "Bottom",
      right: "Right",
      langSelect: "English",
      title: "Hover Card",
      desc: (side) => `This hover card appears on the ${side} side of the trigger.`,
    },
    sanskrit: {
      left: "वामम्",
      top: "उपरि",
      bottom: "अधः",
      right: "दक्षिणम्",
      langSelect: "Sanskrit (संस्कृतम्)",
      title: "होवर कार्ड",
      desc: (side) => `इदं होवर कार्ड ${side} भागे दृश्यते।`,
    },
    hindi: {
      left: "बायां",
      top: "ऊपर",
      bottom: "नीचे",
      right: "दायां",
      langSelect: "Hindi (हिन्दी)",
      title: "होवर कार्ड",
      desc: (side) => `यह होवर कार्ड ट्रिगर के ${side} तरफ दिखाई देता है।`,
    },
  };

  const t = translations[language];

  // Map the visual buttons to their actual logical Radix UI sides.
  const sides = [
    { logical: "left", label: t.left },
    { logical: "top", label: t.top },
    { logical: "bottom", label: t.bottom },
    { logical: "right", label: t.right },
  ];

  return (
    <div 
      className="flex flex-col justify-between w-full min-h-[350px] p-6 rounded-lg border bg-background text-foreground shadow-sm"
    >
      {/* Top Header with Language Dropdown and Info Icon */}
      <div className="flex items-start justify-between w-full">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-[200px] justify-between text-muted-foreground shadow-none">
              {t.langSelect}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[200px]">
            <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
              <DropdownMenuRadioItem value="english">English</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="sanskrit">Sanskrit (संस्कृतम्)</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="hindi">Hindi (हिन्दी)</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <AlertCircle className="size-5" />
          <span className="sr-only">Info</span>
        </Button>
      </div>

      {/* Centered Hover Cards at the bottom */}
      <div className="mt-auto flex items-center justify-center pt-20 pb-10">
        <div className="flex flex-wrap justify-center gap-3">
          {sides.map(({ logical, label }) => (
            <HoverCard key={logical} openDelay={150} closeDelay={100}>
              <HoverCardTrigger asChild>
                <Button variant="outline" className="capitalize w-[80px]">
                  {label}
                </Button>
              </HoverCardTrigger>
              <HoverCardContent side={logical} className="w-64">
                <div className="flex flex-col gap-1 text-start">
                  <h4 className="font-medium">{t.title}</h4>
                  <p className="text-sm text-muted-foreground">{t.desc(label)}</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </div>
  );
}
