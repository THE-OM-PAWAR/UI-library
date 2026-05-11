import baseConfig from "@repo/config/tailwind.config.js";

/** @type {import('tailwindcss').Config} */
export default {
    ...baseConfig,
    content: [
        "./app/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}",
        "../../packages/components/index.js",
        "../../packages/components/lib/**/*.{js,jsx}",
        "../../packages/components/ui/**/*.{js,jsx}",
    ],
};
