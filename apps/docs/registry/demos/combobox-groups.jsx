import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxGroup,
    ComboboxItem,
    ComboboxLabel,
    ComboboxList,
    ComboboxSearch,
    ComboboxSeparator,
    ComboboxTrigger,
} from "@shery-ui/components";

export default function ComboboxGroups() {
    return (
        <div className="w-72">
            <Combobox>
                <ComboboxTrigger placeholder="Select technology..." />

                <ComboboxContent>
                    <ComboboxSearch placeholder="Search..." />

                    <ComboboxList>
                        <ComboboxEmpty />

                        <ComboboxGroup>
                            <ComboboxLabel>Frontend</ComboboxLabel>

                            <ComboboxItem value="react">React</ComboboxItem>

                            <ComboboxItem value="vue">Vue</ComboboxItem>

                            <ComboboxItem value="svelte">Svelte</ComboboxItem>
                        </ComboboxGroup>

                        <ComboboxSeparator />

                        <ComboboxGroup>
                            <ComboboxLabel>Backend</ComboboxLabel>

                            <ComboboxItem value="node">Node.js</ComboboxItem>

                            <ComboboxItem value="express">Express</ComboboxItem>

                            <ComboboxItem value="go">Go</ComboboxItem>
                        </ComboboxGroup>
                    </ComboboxList>
                </ComboboxContent>
            </Combobox>
        </div>
    );
}
