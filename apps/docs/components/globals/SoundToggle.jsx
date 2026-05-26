"use client";

import React from "react";
import { IoVolumeHigh, IoVolumeMute } from "react-icons/io5";
import { useSound } from "@/context/SoundContext";
import styles from "@/css/globals/SoundToggle.module.css";

const SoundToggle = () => {
    const { soundEnabled, toggleSound } = useSound();
    const Icon = soundEnabled ? IoVolumeHigh : IoVolumeMute;

    return (
        <button
            aria-label={soundEnabled ? "Turn sounds off" : "Turn sounds on"}
            aria-pressed={soundEnabled}
            className={styles.toggle}
            onClick={toggleSound}
            title={soundEnabled ? "Sounds on" : "Sounds off"}
            type="button"
        >
            <Icon aria-hidden="true" />
        </button>
    );
};

export default SoundToggle;
