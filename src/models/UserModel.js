// Aqui vao os models que lidam com o banco de dados

const { db } = require('../db');

class UserModel {
  /**
   * Adds a new user to the database.
   *
   * @param {*} newUser The new user to add.
   * @returns {Promise<undefined>} A promise to nothing.
   */
  async create(newUser) {
    await db.connection.query('INSERT INTO users set ?', newUser);
  }

  /**
   * Creates / upgrades the users table.
   *
   * @returns {Promise<undefined>} A promise to nothing.
   */
  static async upgrade() {
    await db.connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id int(11) NOT NULL
      )
    `);
  }
}

module.exports = { UserModel };