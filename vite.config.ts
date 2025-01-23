import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    cors: true,
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: '[name][extname]',
      },
    },
  },
  esbuild: {
    loader: 'file',
    include: /\.wasm$/,
  },
});
