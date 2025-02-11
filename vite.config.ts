import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase", // CSS Module 네이밍 규칙을 camelCase로 설정
    },
  },
  ssr: {
    noExternal: ["react-router-dom"], // react-router-dom is included in the SSR bundle to ensure that it is handled correctly during server-side rendering. React Router DOM uses some browser-specific APIs like window or history that don't exist in Node.js environments. By bundling it, Vite ensures that these APIs are correctly polyfilled or handled during SSR.
  },
  build: {
    cssCodeSplit: true, // ✅ SSR에서 CSS 파일을 함께 생성하여 클라이언트에서 정상적으로 로드할 수 있도록 함
  },
});
