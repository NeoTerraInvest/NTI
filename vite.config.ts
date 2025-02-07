import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  define: {
    'process.env.BROWSER': 'true', // window 관련 코드 실행을 방지
  },
  plugins: [react()],
  // build: {
  //   ssr: true,
  // },
});
