import exp from 'constants';
import express from 'express';
import fs from 'fs';

const router = express.Router();

// let molData;
// try {
//   molData = JSON.parse(fs.readFileSync('./data/3dmol.json', 'utf-8'));
// } catch (error) {
//   console.error('Error reading 3dmol.json:', error);
//   molData = [];
// }

const molecules = JSON.parse(fs.readFileSync('./data/3dmol.json', 'utf-8'));

router.get('/', (req, res) => {
  res.json(molecules);
});

router.get('/:iupacId', (req, res) => {
  const iupacId = req.params.iupacId.toLowerCase();
  const molecule = molecules.find(mol => mol.iupacId.toLowerCase() === iupacId);

  if (molecule) {
    res.json(molecule);
  } else {
    res.status(404).json({ message: "Molecule not found" });
  }
});

export default router;