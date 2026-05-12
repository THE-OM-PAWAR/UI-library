import {
    Combobox,
    ComboboxTrigger,
    ComboboxContent,
    ComboboxSearch,
    ComboboxList,
    ComboboxItem,
    ComboboxEmpty,
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
                <ComboboxTrigger placeholder="Select framework..." />
                <ComboboxContent>
                    <ComboboxSearch placeholder="Search framework..." />
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