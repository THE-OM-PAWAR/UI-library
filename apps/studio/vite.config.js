import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@repo/components": path.resolve(
                __dirname,
                "../../packages/components"
            ),
            "@repo/utils": path.resolve(__dirname, "../../packages/utils/src"),
            "@repo/config": path.resolve(__dirname, "../../packages/config"),
        },
    },
    server: {
        port: 3000,
        open: true,
    },
});
