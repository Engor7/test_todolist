import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  server: {
    host: true,
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "@/scss/index.scss";` },
    },
  },
});
