import { defineConfig } from "vite"
import path from "path"
import react from "@vitejs/plugin-react"
import { TanStackRouterVite } from "@tanstack/router-vite-plugin"
import { splashScreen } from "vite-plugin-splash-screen"
import basicSsl from '@vitejs/plugin-basic-ssl'
// https://vitejs.dev/config/
export default defineConfig({
  // base: "/profile/todos",
  server: {
    host: 'myapp.local',
    port: 3000,
    https: {
      key: './myapp.local-key.pem',
      cert: './myapp.local.pem',
    },
  },
  preview: {
    https: true,
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
  plugins: [
    react(),
    TanStackRouterVite()
  ],
})
