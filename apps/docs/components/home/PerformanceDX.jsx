import { Blocks, Code2, Gauge, Server, Sparkles } from "lucide-react";
import React from "react";
import styles from "@/css/home/PerformanceDX.module.css";

const features = [
    {
        icon: Gauge,
        title: "Tiny bundle",
        description: "Lean primitives keep production pages quick to load.",
    },
    {
        icon: Blocks,
        title: "Tree-shakeable",
        description: "Ship the components you import, not the whole library.",
    },
    {
        icon: Server,
        title: "SSR support",
        description: "Built for server-rendered React without hydration drama.",
    },
    {
        icon: Sparkles,
        title: "Next.js optimized",
        description: "Works naturally inside app router and docs workflows.",
    },
    {
        icon: Code2,
        title: "TypeScript support",
        description: "Typed APIs make props easier to discover and trust.",
    },
];

const PerformanceDX = () => {
    return (
        <section className={styles.wraper}>
            <div className={styles.section}>
                <div className={styles.heading}>
                    <span>Performance / DX</span>
                    <h2>
                        Built to feel light in production and clear in code.
                    </h2>
                </div>

                <div className={styles.grid}>
                    {features.map(({ icon: Icon, title, description }) => (
                        <article className={styles.card} key={title}>
                            <div className={styles.icon}>
                                <Icon aria-hidden="true" />
                            </div>
                            <div>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PerformanceDX;
