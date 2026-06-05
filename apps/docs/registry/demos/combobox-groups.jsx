import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxGroup,
    ComboboxInput,
    ComboboxItem,
    ComboboxLabel,
    ComboboxList,
    ComboboxSeparator,
} from "@repo/components";

export default function ComboboxGroups() {
    return (
        <div className="w-72">
            <Combobox>
                <ComboboxInput placeholder="Select technology..." />

                <ComboboxContent>
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
