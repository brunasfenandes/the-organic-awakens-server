import express from 'express';
import fs from 'fs';

const router = express.Router();

let questionsData;
try {
  questionsData = JSON.parse(fs.readFileSync('./data/quiz.json', 'utf-8'));
} catch (error) {
  console.error('Error reading quiz.json:', error);
  questionsData = [];
}

// Route to get all questions
router.get('/', (req, res) => {
  res.json(questionsData);
});

// Route to get a single question by ID
router.get('/:id', (req, res) => { 
  const questionId = parseInt(req.params.id, 10);
  const question = questionsData.find(q => q.id === questionId);

  if (!question) {
    return res.status(404).json({ error: 'Question not found' });
  }
  
  res.json(question);
});

export default router;