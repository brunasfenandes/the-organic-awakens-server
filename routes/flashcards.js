import express from 'express';
import fs from 'fs';

const router = express.Router();

// Read flashcards.json
const flashcardsData = JSON.parse(fs.readFileSync('./data/flashcards.json', 'utf-8'));

// GET /flashcards
router.get('/', (req, res) => {
  res.json(flashcardsData);
});

export default router;
