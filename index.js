import express from 'express';
import statRouter from './routes/stat.js';

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());

// Router
app.use('/', statRouter);

app.listen(PORT, () => console.log(`🚀 Server on http://localhost:${PORT}`));
