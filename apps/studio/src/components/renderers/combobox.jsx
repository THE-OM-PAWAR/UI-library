export function renderCombobox({
    Combobox,
    ComboboxInput,
    ComboboxContent,
    ComboboxList,
    ComboboxItem,
    ComboboxEmpty,
}) {
    const frameworks = [
        { value: "react", label: "React" },
        { value: "angular", label: "Angular" },
        { value: "vue", label: "Vue" },
        { value: "svelte", label: "Svelte" },
        { value: "express", label: "Express" },
        { value: "go", label: "Go" },
    ];

    return (
        <div className="w-64">
            <Combobox>
                <ComboboxInput placeholder="Select a framework…" />
                <ComboboxContent>
                    <ComboboxList>
                        <ComboboxEmpty />
                        {frameworks.map((f) => (
                            <ComboboxItem key={f.value} value={f.value}>
                                {f.label}
                            </ComboboxItem>
                        ))}
                    </ComboboxList>
                </ComboboxContent>
            </Combobox>
        </div>
    );
}
