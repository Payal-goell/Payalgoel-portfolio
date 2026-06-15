import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

// Standard Vite config for a static SPA deployable to GitHub Pages
export default defineConfig({
  base: "/payal-portfolio/",
  css: {
    postcss: null, // Disable PostCSS - Tailwind v4 plugin handles it
  },
  plugins: [tailwindcss(), react(), tsconfigPaths()],
  build: {
    outDir: "dist",
  },
});
