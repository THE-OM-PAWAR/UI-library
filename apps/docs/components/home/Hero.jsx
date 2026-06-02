import dynamic from "next/dynamic";
import React from "react";
import { div } from "three/tsl";
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
                        <button className={styles.primaryBtn}>
                            ✦ Get Started
                        </button>

                        <button className={styles.secondaryBtn}>
                            Explore Components
                        </button>
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
