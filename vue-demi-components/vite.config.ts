import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  // plugins: [vue()],
  optimizeDeps: {
    exclude: ['vue-demi'],
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      formats: ['cjs'],
    },
    rollupOptions: {
      external: ['vue-demi'],
      output: {
        exports: 'named',
      },
    },
  },
});
