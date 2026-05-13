"use client";

import { Calendar } from "@shery-ui/components";
import { useState } from "react";

export default function CalendarDemo() {
    const [date, setDate] = useState(new Date(2026, 4, 12));

    return (
        <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-lg border"
        />
    );
}
