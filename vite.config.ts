import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'copy-public-files',
      writeBundle() {
        ['.htaccess', 'robots.txt', 'sitemap.xml', 'llms.txt'].forEach(file => {
          const src = path.resolve(__dirname, 'public', file);
          const dest = path.resolve(__dirname, 'dist', file);
          if (fs.existsSync(src)) {
            fs.copyFileSync(src, dest);
          }
        });
      }
    }
  ],
  build: {
    target: 'es2020',
    minify: 'esbuild',
    cssMinify: true,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three')) {
            return 'three-bundle';
          }
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-core';
          }
          if (id.includes('node_modules/motion')) {
            return 'motion-core';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'icons-core';
          }
        }
      }
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});
