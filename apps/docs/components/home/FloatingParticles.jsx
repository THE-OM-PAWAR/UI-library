"use client";

import { useEffect, useRef } from "react";
import styles from "@/css/home/FloatingParticles.module.css";

const PARTICLE_COLOR = "79, 140, 255";
const PARTICLE_GLOW = "255, 255, 255";

const createParticle = (width, height) => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.26,
    vy: (Math.random() - 0.5) * 0.26,
    radius: Math.random() * 1.7 + 0.7,
    alpha: Math.random() * 0.45 + 0.25,
    drift: Math.random() * Math.PI * 2,
});

const FloatingParticles = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return undefined;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        const context = canvas.getContext("2d");
        const pointer = { x: -9999, y: -9999, active: false };
        let animationFrame = 0;
        let width = 0;
        let height = 0;
        let particles = [];

        const resize = () => {
            const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.floor(width * pixelRatio);
            canvas.height = Math.floor(height * pixelRatio);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

            const particleCount = width < 700 ? 38 : 78;
            particles = Array.from({ length: particleCount }, () =>
                createParticle(width, height)
            );
        };

        const handlePointerMove = (event) => {
            pointer.x = event.clientX;
            pointer.y = event.clientY;
            pointer.active = true;
        };

        const handlePointerLeave = () => {
            pointer.active = false;
            pointer.x = -9999;
            pointer.y = -9999;
        };

        const draw = () => {
            context.clearRect(0, 0, width, height);

            particles.forEach((particle) => {
                particle.drift += 0.008;
                particle.x += particle.vx + Math.cos(particle.drift) * 0.08;
                particle.y += particle.vy + Math.sin(particle.drift) * 0.08;

                if (pointer.active) {
                    const dx = particle.x - pointer.x;
                    const dy = particle.y - pointer.y;
                    const distance = Math.hypot(dx, dy);
                    const influence = 150;

                    if (distance < influence && distance > 0) {
                        const force = (1 - distance / influence) * 2.15;
                        particle.x += (dx / distance) * force;
                        particle.y += (dy / distance) * force;
                    }
                }

                if (particle.x < -12) particle.x = width + 12;
                if (particle.x > width + 12) particle.x = -12;
                if (particle.y < -12) particle.y = height + 12;
                if (particle.y > height + 12) particle.y = -12;

                const gradient = context.createRadialGradient(
                    particle.x,
                    particle.y,
                    0,
                    particle.x,
                    particle.y,
                    particle.radius * 4
                );
                gradient.addColorStop(0, `rgba(${PARTICLE_GLOW}, ${particle.alpha})`);
                gradient.addColorStop(0.45, `rgba(${PARTICLE_COLOR}, ${particle.alpha})`);
                gradient.addColorStop(1, `rgba(${PARTICLE_COLOR}, 0)`);

                context.beginPath();
                context.fillStyle = gradient;
                context.arc(particle.x, particle.y, particle.radius * 4, 0, Math.PI * 2);
                context.fill();
            });

            if (!prefersReducedMotion) {
                animationFrame = window.requestAnimationFrame(draw);
            }
        };

        resize();
        window.addEventListener("resize", resize);
        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("pointerleave", handlePointerLeave);
        draw();

        return () => {
            window.cancelAnimationFrame(animationFrame);
            window.removeEventListener("resize", resize);
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerleave", handlePointerLeave);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.particles} aria-hidden="true" />;
};

export default FloatingParticles;
