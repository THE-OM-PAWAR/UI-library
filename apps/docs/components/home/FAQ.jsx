import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@repo/components";
import React from "react";
import styles from "@/css/home/FAQ.module.css";

const faqs = [
    {
        question: "What is Frost UI?",
        answer: "Frost UI is a collection of reusable React components designed for clean, modern interfaces.",
    },
    {
        question: "Can I customize the components?",
        answer: "Yes. The components are built to be styled and adjusted so they can fit your product theme.",
    },
    {
        question: "Is it responsive?",
        answer: "Yes. The examples and layout are designed to work across desktop, tablet, and mobile screens.",
    },
    {
        question: "Do I need to write CSS from scratch?",
        answer: "No. Frost UI gives you ready component patterns so you can move faster and refine only what you need.",
    },
    {
        question: "Where should I start?",
        answer: "Start with the docs and pick the component you need. Each component can be copied into your workflow.",
    },
];

const FAQ = () => {
    return (
        <section className={styles.wraper}>
            <div className={styles.faq}>
                <div className={styles.heading}>
                    <span>FAQ</span>
                    <h2>Questions, answered simply.</h2>
                </div>

                <Accordion
                    className={styles.items}
                    collapsible
                    defaultValue="faq-0"
                    type="single"
                >
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            className={styles.item}
                            key={faq.question}
                            value={`faq-${index}`}
                        >
                            <AccordionTrigger className={styles.trigger}>
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className={styles.content}>
                                <p>{faq.answer}</p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default FAQ;
