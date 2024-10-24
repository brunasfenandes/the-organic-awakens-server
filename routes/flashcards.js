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
  const topicId = parseInt(req.params.id);
  const topic = flashcardsData.find(t => t.id === topicId);
  if (topic) {
    res.json(topic.flashcards);
  } else {
    res.status(404).send('Topic not found');
  }
});

export default router;