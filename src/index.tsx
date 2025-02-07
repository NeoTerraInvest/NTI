// import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('🚨 root 요소를 찾을 수 없습니다!');
} else {
  hydrateRoot(
    rootElement,
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
}
