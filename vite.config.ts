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
        ['.htaccess', 'robots.txt', 'sitemap.xml'].forEach(file => {
          const src = path.resolve(__dirname, 'public', file);
          const dest = path.resolve(__dirname, 'dist', file);
          if (fs.existsSync(src)) {
            fs.copyFileSync(src, dest);
          }
        });
      }
    }
  ],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});
