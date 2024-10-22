import express from 'express';
import fs from 'fs';

const router = express.Router();

let flashcardsData;
try {
  flashcardsData = JSON.parse(fs.readFileSync('./data/flashcards.json', 'utf-8'));
} catch (error) {
  console.error('Error reading flashcards.json:', error);
  flashcardsData = [];
}

router.get('/', (req, res) => {
  res.json(flashcardsData);
});

router.get('/:id', (req, res) => {
  const flashcardId = parseInt(req.params.id, 10);
  const flashcard = flashcardsData.find(f => f.id === flashcardId);

  if (!flashcard) {
    return res.status(404).json({ error: 'Flashcard not found' });
  }
  
  res.json(flashcard);
});

export default router;