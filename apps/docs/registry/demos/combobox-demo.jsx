import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@repo/components";

export default function ComboboxDemo() {
    const frameworks = [
        { value: "react", label: "React" },
        { value: "vue", label: "Vue" },
        { value: "angular", label: "Angular" },
        { value: "svelte", label: "Svelte" },
    ];

    return (
        <div className="w-64">
            <Combobox>
                <ComboboxInput placeholder="Select framework..." />
                <ComboboxContent>
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
        </div>
    );
}
