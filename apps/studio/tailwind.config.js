import baseConfig from "@repo/config/tailwind.config.js";

/** @type {import('tailwindcss').Config} */
export default {
    ...baseConfig,
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
        "../../packages/components/ui/**/*.{js,jsx}",
        "../../packages/components/lib/**/*.{js,jsx}",
        "../../packages/components/index.js",
    ],
};
