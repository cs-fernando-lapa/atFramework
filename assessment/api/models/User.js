/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
     type: 'string',
     required: true
   },

   // e.g., 3.26
   password: {
     type: 'int',
     required: true
   },

  }
};
