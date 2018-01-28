const knex = require('../db/knex');
const Location = require('./Location');

class User extends Location{
  static async get table() {
    return knex('users');
  }
}