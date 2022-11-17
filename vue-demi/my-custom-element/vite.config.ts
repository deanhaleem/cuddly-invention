import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue({ customElement: true })],
  optimizeDeps: {
    exclude: ["vue-demi"],
  },
  build: {
    lib: {
      entry: "/src/index.ts",
      name: "vue-demi-component",
      fileName: "index",
      formats: ["cjs"],
    },
  },
});
