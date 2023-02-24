import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePluginFonts } from "vite-plugin-fonts";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio",
  plugins: [
    react(),
    VitePluginFonts({
      google: {
        families: ["Press Start 2P", "Roboto", "Roboto Slab", "Roboto Mono"],
      },
    }),
  ],
});
