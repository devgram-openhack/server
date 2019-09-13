const mysql = require('promise-mysql');

class Db {
  contructor() {
    /**
     * @type {mysql.Connection}
     */
    this.connection = null;
  }

  /**
   * Creates the connection to the database.
   *
   * @returns {Promise<undefined>} A promise to nothing.
   */
  async connect() {
    this.connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'mydb'
    });

    console.log('Connection OK');
  }
}

const db = new Db();

module.exports = { db };