import express from 'express';
import "dotenv/config";
import cors from "cors";
import fs from 'fs';
import questionsRoutes from './routes/questions.js';
import flashcardsRoutes from './routes/flashcards.js';

const {PORT, BACKEND_URL} = process.env;
const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log('Middleware: Request received');
  next();
});

app.use('/questions', questionsRoutes);
app.use('/flashcards', flashcardsRoutes);

app.listen(PORT, () => {
  console.log(`Listening at ${BACKEND_URL}:${PORT} `);
});
