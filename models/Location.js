const knex = require('../db/knex');

class Location {

  static get table() {
    return knex('locations');
  }
 
  static async get() {
    return this.table.limit(100);
  }

  static async getByName(name) {
    return this.table.where({ name: name });
  }

  static async create(location) {
    return this.table.insert(location).returning('*');
  }

  static async remove(id) {
    return this.table.del().where({ id: id });
  }

  static async update(id, location) {
    return this.table.update({ name: location.name, description: location.description}).where({ id: id });
  }
}

module.exports = Location;