import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@shery-ui/components": path.resolve(
                __dirname,
                "../../packages/components"
            ),
            "@shery-ui/utils": path.resolve(
                __dirname,
                "../../packages/utils/src"
            ),
            "@shery-ui/config": path.resolve(
                __dirname,
                "../../packages/config"
            ),
        },
    },
    server: {
        port: 3000,
        open: true,
    },
});
