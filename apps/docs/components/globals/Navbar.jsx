"use client";
import React, { useRef, useEffect, useState } from "react";
import styles from '@/css/globals/Navbar.module.css';
import Image from "next/image";
import logoimg from "@/assets/images/logo.png";
import Link from "next/link";
import { Howl, Howler } from "howler";
import { useRouter } from "next/navigation";
import { useSound } from "@/context/SoundContext";

const Navbar = () => {

    const navLinks = [
        {
            name: "Docs",
            path: "/docs",
        },
        {
            name: "Components",
            path: "/docs/components",
        },
        {
            name: "Blocks",
            path: "/docs/blocks",
        },
        {
            name: "Charts",
            path: "/docs/charts",
        },
        {
            name: "Directory",
            path: "/docs/directory",
        },
        {
            name: "Create",
            path: "/docs/create",
        },
    ];

    const [isOpen, setIsOpen] = useState(false);

    const soundRef = useRef(null);
    const hoverSoundTimeoutRef = useRef(null);
    const isUnlockedRef = useRef(false);
    const lastScrollYRef = useRef(0);
    const [isDetached, setIsDetached] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    const router = useRouter();
    const { soundEnabled } = useSound();

    useEffect(() => {
        const sound = new Howl({
            src: ["/sounds/freeze.mp3"],
            volume: 1,
            preload: true,
            html5: false,
        });

        sound.load();
        soundRef.current = sound;

        const unlockAudio = () => {
            if (isUnlockedRef.current || Howler.ctx.state === "running") {
                isUnlockedRef.current = true;
                return;
            }

            Howler.ctx.resume().then(() => {
                isUnlockedRef.current = true;
            });
        };

        window.addEventListener("pointerdown", unlockAudio, { passive: true });
        window.addEventListener("keydown", unlockAudio, { passive: true });
        window.addEventListener("touchstart", unlockAudio, { passive: true });

        return () => {
            if (hoverSoundTimeoutRef.current) {
                window.clearTimeout(hoverSoundTimeoutRef.current);
                hoverSoundTimeoutRef.current = null;
            }
            window.removeEventListener("pointerdown", unlockAudio);
            window.removeEventListener("keydown", unlockAudio);
            window.removeEventListener("touchstart", unlockAudio);
            sound.unload();
            soundRef.current = null;
        };
    }, []);

    useEffect(() => {
        const getCurrentScrollY = () =>
            Math.max(
                window.scrollY || 0,
                document.documentElement?.scrollTop || 0,
                document.body?.scrollTop || 0
            );

        const handleScroll = () => {
            const currentScrollY = getCurrentScrollY();
            const isAtTop = currentScrollY <= 0;
            const hideThreshold = window.innerWidth <= 1024 ? 8 : 4;

            setIsDetached(!isAtTop);

            if (isAtTop) {
                setIsHidden(false);
                lastScrollYRef.current = 0;
                return;
            }

            if (currentScrollY > lastScrollYRef.current + hideThreshold) {
                setIsHidden(true);
            } else if (currentScrollY < lastScrollYRef.current - hideThreshold) {
                setIsHidden(false);
            }

            lastScrollYRef.current = currentScrollY;
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        document.addEventListener("scroll", handleScroll, { passive: true, capture: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("scroll", handleScroll, true);
        };
    }, []);

    const playHoverSound = () => {
        const sound = soundRef.current;

        if (!soundEnabled || !sound || !isUnlockedRef.current) {
            return;
        }

        if (sound.state() !== "loaded") {
            sound.load();
            return;
        }

        const id = sound.play();

        sound.seek(1.5, id);

        window.setTimeout(() => {
            sound.stop(id);
        }, 200);
    };

    const clearHoverSoundTimer = () => {
        if (!hoverSoundTimeoutRef.current) {
            return;
        }

        window.clearTimeout(hoverSoundTimeoutRef.current);
        hoverSoundTimeoutRef.current = null;
    };

    const startHoverSoundTimer = () => {
        clearHoverSoundTimer();

        if (!soundEnabled) {
            return;
        }

        hoverSoundTimeoutRef.current = window.setTimeout(() => {
            playHoverSound();
            hoverSoundTimeoutRef.current = null;
        }, 100);
    };

    return (
        <>
            <nav
                className={`${styles.nav} ${isDetached ? styles.detached : ""} ${isHidden && !isOpen ? styles.hidden : ""}`.trim()}
            >
                <div className={styles.logoCont} onClick={() => router.push("/")}>
                    <Image src={logoimg} alt="Frost Ui" className={styles.logoImg} />
                    <p className={styles.logotxt}>Frost UI</p>
                </div>
                <div className={`${styles.links} ${ isOpen ? styles.active : ""}`}>
                    {
                        navLinks.map((ele, i) => {
                            return <Link className={styles.link} href={ele.path} key={i} onMouseEnter={startHoverSoundTimer} onMouseLeave={clearHoverSoundTimer}>
                                {ele.name}
                            </Link>
                        })
                    }
                </div>
                <div className={`${styles.hamburger} ${isOpen ? styles.active : ""}`} onClick={() => setIsOpen(prev => !prev)}>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                </div>
            </nav>
            <div className={styles.mobileNavSpacer} aria-hidden="true" />
        </>
    );
};

export default Navbar;
