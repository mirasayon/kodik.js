import { dirname, join } from "node:path";
import { loadEnvFile } from "node:process";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";
const rootPath = dirname(fileURLToPath(import.meta.url));
loadEnvFile(join(rootPath, ".env.test"));
export default defineConfig({
    test: {
        watch: false,
        silent: true,
        include: ["./tests/**/*"],
        env: process.env,
    },
});
