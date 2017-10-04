/**
 * Noticias.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    titulo: {
     type: 'string'
   },

   mensagem: {
     type: 'string',
   },

   autor: {
     type: 'string',
   },

   data: {
     type: 'int',
   },

   imagem:{
     type:'string',
   }
  }
};
