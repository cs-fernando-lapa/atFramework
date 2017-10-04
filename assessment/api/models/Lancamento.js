/**
 * Lancamento.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nome: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    valor: {
      type: 'int',
    },
    receita: {
      type: 'boolean',
    },
    categoria: {
      type: 'string',
    },
    data: {
      type: 'dateTime',
    },
    repeticoes: {
      type: 'int',
    },
    repetitividade: {
      type: 'string',
    },

  }
};
