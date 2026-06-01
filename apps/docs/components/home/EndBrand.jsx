import React from "react";
import styles from "@/css/home/EndBrand.module.css";

const EndBrand = () => {
    return (
        <section className={styles.wraper} aria-label="Frost UI">
            <h2 className={styles.brand}>FROST UI</h2>
            <div className={styles.fade} aria-hidden="true"></div>
        </section>
    );
};

export default EndBrand;
