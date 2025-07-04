import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ['https://30hgs8w9-5173.brs.devtunnels.ms/'], // <- tu subdominio localtunnel
    host: true, // permite conexiones externas
    port: 5173, // puerto por defecto de Vite
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      "@pages": "/src/pages",
      "@components": "/src/components",
      "@hooks": "/src/Hooks",
      "@admin": "/src/pages/admin",
      "@user": "/src/pages/user",
      "@context": "/src/context",
      "@assets": "/src/assets",
    },
  },
});
