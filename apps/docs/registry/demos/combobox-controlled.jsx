"use client";

import {
    Combobox,
    ComboboxTrigger,
    ComboboxContent,
    ComboboxSearch,
    ComboboxList,
    ComboboxItem,
    ComboboxEmpty,
} from "@repo/components";
import { useState } from "react";

export default function ComboboxControlled() {
    const [value, setValue] = useState("");

    const frameworks = [
        { value: "react", label: "React" },
        { value: "vue", label: "Vue" },
        { value: "angular", label: "Angular" },
        { value: "svelte", label: "Svelte" },
    ];

    return (
        <div className="w-64 space-y-2">
            <Combobox value={value} onValueChange={setValue}>
                <ComboboxTrigger placeholder="Choose framework..." />
                <ComboboxContent>
                    <ComboboxSearch placeholder="Search..." />
                    <ComboboxList>
                        <ComboboxEmpty />
                        {frameworks.map((framework) => (
                            <ComboboxItem
                                key={framework.value}
                                value={framework.value}
                            >
                                {framework.label}
                            </ComboboxItem>
                        ))}
                    </ComboboxList>
                </ComboboxContent>
            </Combobox>

            <p className="text-sm text-muted-foreground">
                Selected: {value || "None"}
            </p>
        </div>
    );
}