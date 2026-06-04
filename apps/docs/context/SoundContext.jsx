"use client";

import { Howl, Howler } from "howler";
import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

const SoundContext = createContext(null);
const SOUND_STORAGE_KEY = "frost-ui-sound-enabled";

export const SoundProvider = ({ children }) => {
    const [soundEnabled, setSoundEnabled] = useState(false);
    const backgroundSoundRef = useRef(null);
    const clickSoundRef = useRef(null);
    const soundEnabledRef = useRef(false);

    useEffect(() => {
        const storedValue = window.localStorage.getItem(SOUND_STORAGE_KEY);

        if (storedValue !== null) {
            setSoundEnabled(storedValue === "true");
        }
    }, []);

    const startBackgroundSound = useCallback(() => {
        const backgroundSound = backgroundSoundRef.current;

        Howler.mute(false);

        if (Howler.ctx?.state === "suspended") {
            Howler.ctx.resume();
        }

        if (
            backgroundSound &&
            backgroundSound.state() === "loaded" &&
            !backgroundSound.playing()
        ) {
            backgroundSound.play();
        }
    }, []);

    useEffect(() => {
        soundEnabledRef.current = soundEnabled;
        window.localStorage.setItem(SOUND_STORAGE_KEY, String(soundEnabled));
        Howler.mute(!soundEnabled);

        if (!soundEnabled) {
            Howler.stop();
            return;
        }

        startBackgroundSound();
    }, [soundEnabled, startBackgroundSound]);

    useEffect(() => {
        const backgroundSound = new Howl({
            src: ["/sounds/bg.mp3"],
            volume: 0.035,
            loop: true,
            preload: true,
            html5: false,
        });

        const clickSound = new Howl({
            src: ["/sounds/click.mp3"],
            volume: 0.45,
            preload: true,
            html5: false,
        });

        backgroundSound.load();
        clickSound.load();
        backgroundSoundRef.current = backgroundSound;
        clickSoundRef.current = clickSound;

        const playClickSound = () => {
            if (!soundEnabledRef.current || clickSound.state() !== "loaded") {
                return;
            }

            if (Howler.ctx?.state === "suspended") {
                Howler.ctx.resume();
            }

            if (
                backgroundSound &&
                backgroundSound.state() === "loaded" &&
                !backgroundSound.playing()
            ) {
                backgroundSound.play();
            }

            clickSound.play();
        };

        document.addEventListener("click", playClickSound);

        return () => {
            document.removeEventListener("click", playClickSound);
            backgroundSound.unload();
            clickSound.unload();
            backgroundSoundRef.current = null;
            clickSoundRef.current = null;
        };
    }, []);

    const value = useMemo(
        () => ({
            soundEnabled,
            setSoundEnabled,
            toggleSound: () => {
                if (!soundEnabled) {
                    startBackgroundSound();
                }

                setSoundEnabled((current) => !current);
            },
        }),
        [soundEnabled, startBackgroundSound]
    );

    return (
        <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
    );
};

export const useSound = () => {
    const context = useContext(SoundContext);

    if (!context) {
        throw new Error("useSound must be used inside SoundProvider");
    }

    return context;
};
