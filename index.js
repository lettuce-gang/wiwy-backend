import express from 'express';         // Node 22는 ES 모듈 기본 지원
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello, Node.js!'));
app.listen(PORT, () => console.log(`🚀 Server on http://localhost:${PORT}`));
