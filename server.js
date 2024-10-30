import express from 'express';
import "dotenv/config";
import cors from "cors";
import fs from 'fs';
import questionsRoutes from './routes/questions.js';
import flashcardsRoutes from './routes/flashcards.js';
import molRoutes from './routes/3dmol.js';

const {PORT, BACKEND_URL} = process.env;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use((req, res, next) => {
  console.log('Middleware: Request received');
  next();
});

app.use('/quiz', questionsRoutes);
app.use('/flashcards', flashcardsRoutes);
app.use('/3dmol', molRoutes); 

app.listen(PORT, () => {
  console.log(`Listening at ${BACKEND_URL}:${PORT} `);
});
