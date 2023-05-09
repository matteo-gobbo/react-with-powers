import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    host: true,
  },
  resolve: {
    alias: [
      { find: "~lib", replacement: path.resolve(__dirname, "src/lib") },
      { find: "~config", replacement: path.resolve(__dirname, "src/config") },
      { find: "~api", replacement: path.resolve(__dirname, "src/api") },
      { find: "~hooks", replacement: path.resolve(__dirname, "src/hooks") },
      { find: "~models", replacement: path.resolve(__dirname, "src/models") },
    ],
  },
  plugins: [react()],
});
