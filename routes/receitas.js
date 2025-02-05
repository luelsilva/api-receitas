const express = require('express');
const router = express.Router();
const Receita = require('../models/receitaModel');

router.get('/', async (req, res) => {
  const receitas = await Receita.getReceitas();
  res.json(receitas);
});

router.get('/:id', async (req, res) => {
  const receita = await Receita.getReceita(req.params.id);
  res.json(receita);
});

router.post('/', async (req, res) => {
  const { titulo, descricao } = req.body;
  await Receita.addReceita({ titulo, descricao });
  res.status(201).send('Receita adicionada!');
});

router.put('/:id', async (req, res) => {
  const { titulo, descricao } = req.body;
  await Receita.updateReceita(req.params.id, { titulo, descricao });
  res.send('Receita atualizada!');
});

router.delete('/:id', async (req, res) => {
  await Receita.deleteReceita(req.params.id);
  res.send('Receita removida!');
});

module.exports = router;
