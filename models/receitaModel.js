const db = require('../db');

async function criarTabela() {
  await db.schema.hasTable('receitas').then((exists) => {
    if (!exists) {
      return db.schema.createTable('receitas', (table) => {
        table.increments('id').primary();
        table.string('titulo').notNullable();
        table.text('descricao').notNullable();
      });
    }
  });
}

criarTabela();

module.exports = {
  getReceitas: () => db('receitas').select('*'),
  getReceita: (id) => db('receitas').where({ id }).first(),
  addReceita: (receita) => db('receitas').insert(receita),
  updateReceita: (id, receita) => db('receitas').where({ id }).update(receita),
  deleteReceita: (id) => db('receitas').where({ id }).del(),
};
