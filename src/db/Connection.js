import mysql from 'mysql2/promise';

import config from '../config/database.js';

class Connection {
  /**
   * @type {mysql.Pool}
   */
  static #mysql;

  /**
   * @type {mysql.PoolConnection}
   */
  #conn;

  constructor() {
    if (!Connection.#mysql) {
      Connection.#init();
    }
  }

  /**
   * @param {string} query
   * @param  {...(string | number | boolean | null)} binds
   * @returns {Promise<Record<string, unknown>[]>}
   */
  async execute(query, ...binds) {
    this.#conn = await Connection.#mysql.getConnection();

    const [res] = await this.#conn.execute(query, binds);

    this.#conn.release();

    return res;
  }

  static #init() {
    this.#mysql = mysql.createPool({
      host: config.DB_HOST,
      port: config.DB_PORT,
      user: config.DB_USER,
      password: config.DB_PASSWORD,
      database: config.DB_DATABASE,
    });
  }
}

export { Connection };
