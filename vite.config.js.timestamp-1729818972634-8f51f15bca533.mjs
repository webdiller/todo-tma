// vite.config.js
import { defineConfig } from "file:///C:/Users/user/Desktop/ALL_PROJECTS/todo/tma/node_modules/vite/dist/node/index.js";
import path from "path";
import react from "file:///C:/Users/user/Desktop/ALL_PROJECTS/todo/tma/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { TanStackRouterVite } from "file:///C:/Users/user/Desktop/ALL_PROJECTS/todo/tma/node_modules/@tanstack/router-vite-plugin/dist/esm/index.js";
import { splashScreen } from "file:///C:/Users/user/Desktop/ALL_PROJECTS/todo/tma/node_modules/vite-plugin-splash-screen/dist/plugin/plugin.mjs";
import basicSsl from "file:///C:/Users/user/Desktop/ALL_PROJECTS/todo/tma/node_modules/@vitejs/plugin-basic-ssl/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\user\\Desktop\\ALL_PROJECTS\\todo\\tma";
var vite_config_default = defineConfig({
  // base: "/profile/todos",
  server: {
    host: "myapp.local",
    port: 3e3,
    https: {
      key: "./myapp.local-key.pem",
      cert: "./myapp.local.pem"
    }
  },
  preview: {
    https: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
      "@public": path.resolve(__vite_injected_original_dirname, "./public"),
      "@assets": path.resolve(__vite_injected_original_dirname, "./src/assets"),
      "@widgets": path.resolve(__vite_injected_original_dirname, "./src/widgets"),
      "@shared": path.resolve(__vite_injected_original_dirname, "./src/shared")
    }
  },
  plugins: [
    react(),
    TanStackRouterVite()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx1c2VyXFxcXERlc2t0b3BcXFxcQUxMX1BST0pFQ1RTXFxcXHRvZG9cXFxcdG1hXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx1c2VyXFxcXERlc2t0b3BcXFxcQUxMX1BST0pFQ1RTXFxcXHRvZG9cXFxcdG1hXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy91c2VyL0Rlc2t0b3AvQUxMX1BST0pFQ1RTL3RvZG8vdG1hL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIlxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIlxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiXG5pbXBvcnQgeyBUYW5TdGFja1JvdXRlclZpdGUgfSBmcm9tIFwiQHRhbnN0YWNrL3JvdXRlci12aXRlLXBsdWdpblwiXG5pbXBvcnQgeyBzcGxhc2hTY3JlZW4gfSBmcm9tIFwidml0ZS1wbHVnaW4tc3BsYXNoLXNjcmVlblwiXG5pbXBvcnQgYmFzaWNTc2wgZnJvbSAnQHZpdGVqcy9wbHVnaW4tYmFzaWMtc3NsJ1xuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIC8vIGJhc2U6IFwiL3Byb2ZpbGUvdG9kb3NcIixcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogJ215YXBwLmxvY2FsJyxcbiAgICBwb3J0OiAzMDAwLFxuICAgIGh0dHBzOiB7XG4gICAgICBrZXk6ICcuL215YXBwLmxvY2FsLWtleS5wZW0nLFxuICAgICAgY2VydDogJy4vbXlhcHAubG9jYWwucGVtJyxcbiAgICB9LFxuICB9LFxuICBwcmV2aWV3OiB7XG4gICAgaHR0cHM6IHRydWUsXG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgICBcIkBwdWJsaWNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3B1YmxpY1wiKSxcbiAgICAgIFwiQGFzc2V0c1wiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL2Fzc2V0c1wiKSxcbiAgICAgIFwiQHdpZGdldHNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy93aWRnZXRzXCIpLFxuICAgICAgXCJAc2hhcmVkXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvc2hhcmVkXCIpLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIFRhblN0YWNrUm91dGVyVml0ZSgpXG4gIF0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpVSxTQUFTLG9CQUFvQjtBQUM5VixPQUFPLFVBQVU7QUFDakIsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsMEJBQTBCO0FBQ25DLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sY0FBYztBQUxyQixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQTtBQUFBLEVBRTFCLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxNQUNwQyxXQUFXLEtBQUssUUFBUSxrQ0FBVyxVQUFVO0FBQUEsTUFDN0MsV0FBVyxLQUFLLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ2pELFlBQVksS0FBSyxRQUFRLGtDQUFXLGVBQWU7QUFBQSxNQUNuRCxXQUFXLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsSUFDbkQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixtQkFBbUI7QUFBQSxFQUNyQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
