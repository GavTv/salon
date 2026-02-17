import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { fileURLToPath } from "node:url"

// УБРАЛ lovable-tagger — ломает роутинг

export default defineConfig(({ mode }) => ({
  // GitHub Pages: репозиторий GavTv/salon
  base: mode === "production" ? "/salon/" : "/",

  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
}));
