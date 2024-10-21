import express from 'express';
import fs from 'fs';

const router = express.Router();

// Read quiz.json
const questionsData = JSON.parse(fs.readFileSync('./data/quiz.json', 'utf-8'));

// GET /questions
router.get('/', (req, res) => {
  res.json(questionsData);
});

export default router;
