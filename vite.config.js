import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@public": path.resolve(__dirname, "./public"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@widgets": path.resolve(__dirname, "./src/widgets"),
            "@shared": path.resolve(__dirname, "./src/shared"),
        },
    },
    base: "/todo-tma/",
    plugins: [
        react(),
        TanStackRouterVite(),
        // splashScreen({
        //   logoSrc: "vite.svg",
        // }),
    ],
});
