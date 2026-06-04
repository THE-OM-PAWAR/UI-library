import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import styles from "@/css/home/Hero.module.css";

const ReindeerModel = dynamic(() => import("./ReindeerModel"), {
    ssr: false,
});

const Hero = () => {
    return (
        <div className={styles.wraper}>
            <section className={styles.hero}>
                <div className={styles.content}>
                    <div className={styles.heading}>
                        Make Your UI look Cool With Frost UI.
                    </div>

                    <div className={styles.description}>
                        Don&apos;t waste time on writing css when we had did it.
                    </div>

                    <div className={styles.actions}>
                        <Link href="/docs">
                            <button className={styles.primaryBtn}>
                                ✦ Get Started
                            </button>
                        </Link>

                        <Link href="/docs/components">
                            <button className={styles.secondaryBtn}>
                                Explore Components
                            </button>
                        </Link>
                    </div>
                </div>

                <div className={styles.model}>
                    <ReindeerModel />
                </div>
            </section>
        </div>
    );
};

export default Hero;
