import { renderToString } from 'react-dom/server';
import App from '../App';

export default function render() {
  const html = renderToString(<App />);

  return { html };
}
