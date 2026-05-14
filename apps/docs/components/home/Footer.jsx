import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Github } from "lucide-react";
import logoimg from "@/assets/images/logo.png";
import styles from "@/css/home/Footer.module.css";

const footerGroups = [
    {
        title: "Docs",
        links: [
            { label: "Components", href: "/docs/components" },
            { label: "Blocks", href: "/docs/blocks" },
            { label: "Charts", href: "/docs/charts" },
        ],
    },
    {
        title: "Build",
        links: [
            { label: "Directory", href: "/docs/directory" },
            { label: "Create", href: "/docs/create" },
            { label: "Installation", href: "/docs" },
        ],
    },
];

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.brand}>
                    <div className={styles.mark}>
                        <Image src={logoimg} alt="Frost UI" className={styles.logo} />
                    </div>
                    <div>
                        <h2>Frost UI</h2>
                        <p>Clean React components for fast, polished interfaces.</p>
                    </div>
                </div>

                <nav className={styles.links} aria-label="Footer">
                    {footerGroups.map((group) => (
                        <div className={styles.group} key={group.title}>
                            <h3>{group.title}</h3>
                            {group.links.map((link) => (
                                <Link href={link.href} key={link.label}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    ))}
                </nav>
            </div>

            <div className={styles.bottom}>
                <span>Made for crisp interfaces.</span>
                <a href="https://github.com/THE-OM-PAWAR/UI-library" rel="noreferrer" target="_blank">
                    <Github aria-hidden="true" />
                    GitHub
                </a>
            </div>
        </footer>
    );
};

export default Footer;
