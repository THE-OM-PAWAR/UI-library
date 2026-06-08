import baseConfig from "@repo/config/tailwind.config.js";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

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
