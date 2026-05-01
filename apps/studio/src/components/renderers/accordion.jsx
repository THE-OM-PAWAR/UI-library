export function renderAccordion({
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
}) {
    return (
        <div className="w-full max-w-2xl space-y-4 rounded-lg border border-border bg-card p-4">
            <Accordion
                type="single"
                collapsible
                defaultValue="item-1"
                className="w-full"
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        Default single accordion
                    </AccordionTrigger>
                    <AccordionContent>
                        Only one item stays open at a time.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Token-based styles</AccordionTrigger>
                    <AccordionContent>
                        Uses foreground, muted foreground, border, ring tokens.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Accordion
                type="multiple"
                defaultValue={["item-a"]}
                className="w-full rounded-md border border-border px-3"
            >
                <AccordionItem value="item-a">
                    <AccordionTrigger>Multiple open - Item A</AccordionTrigger>
                    <AccordionContent>
                        Good for FAQs where more than one answer can stay open.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-b">
                    <AccordionTrigger>Multiple open - Item B</AccordionTrigger>
                    <AccordionContent>
                        This variant behaves independently per item.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-x">
                    <AccordionTrigger className="rounded-md bg-muted px-3">
                        Muted trigger style
                    </AccordionTrigger>
                    <AccordionContent className="px-3">
                        Custom class overrides can be used for different
                        surfaces.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
