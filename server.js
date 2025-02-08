import express from 'express';
import fs from 'fs';
import ssr from './dist/server/ssr.js'; // ssr.tsx에서 export한 render 함수를 가져옴

const app = express();
const PORT = process.env.PORT || 9999;
app.use('/', express.static('dist/client')); // 클라이언트 정적 파일 제공
app.use('/app', (req, res) => {
  const { html } = ssr(); // ssr.tsx의 render 함수 호출

  // root를 찾지 못하는 에러 발생
  const index = fs.readFileSync('./dist/client/index.html'); // 클라이언트 HTML 파일 읽기
  const result = `${index}`.replace('<!-- root-container -->', html); // HTML 삽입

  res.setHeader('Content-Type', 'text/html').send(result); // 클라이언트에 응답
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
