import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@shery-ui/components";

export default function AccordionDemo() {
    return (
        <Accordion type="single" collapsible className="w-full max-w-2xl">
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    What is this component library?
                </AccordionTrigger>
                <AccordionContent>
                    It is a collection of accessible and customizable UI
                    components built with React, Radix UI, and Tailwind CSS.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Is it fully customizable?</AccordionTrigger>
                <AccordionContent>
                    Yes. You can customize styles, variants, and behavior to fit
                    your design system and product requirements.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Can I use it in production?</AccordionTrigger>
                <AccordionContent>
                    Absolutely. Components are designed for production use with
                    accessibility and composability in mind.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
