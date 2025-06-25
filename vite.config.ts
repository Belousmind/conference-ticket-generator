import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filePath = fileURLToPath(import.meta.url);
const __dirname = dirname(__filePath);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/conference-ticket-generator/',
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/assets/styles'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
    },
  },
});
