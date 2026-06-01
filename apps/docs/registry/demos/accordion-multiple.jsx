import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@repo/components";

export default function AccordionMultiple() {
    return (
        <Accordion
            type="multiple"
            defaultValue={["product", "support"]}
            className="w-full max-w-2xl"
        >
            <AccordionItem value="product">
                <AccordionTrigger>Product updates</AccordionTrigger>
                <AccordionContent>
                    Stay updated with the latest features and improvements across
                    the component library.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="support">
                <AccordionTrigger>Support and guides</AccordionTrigger>
                <AccordionContent>
                    Find setup guides, examples, and troubleshooting resources
                    to speed up implementation.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="license">
                <AccordionTrigger>License information</AccordionTrigger>
                <AccordionContent>
                    The library is open for use under its repository license.
                    Review terms before distributing.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
