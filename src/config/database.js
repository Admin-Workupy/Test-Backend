export default {
  /** @type {string} */
  get DB_HOST() {
    return process.env.DB_HOST;
  },

  /** @type {string} */
  get DB_PORT() {
    return process.env.DB_PORT;
  },

  /** @type {string} */
  get DB_USER() {
    return process.env.DB_USER;
  },

  /** @type {string} */
  get DB_PASSWORD() {
    return process.env.DB_PASSWORD;
  },

  /** @type {string} */
  get DB_DATABASE() {
    return process.env.DB_DATABASE;
  },
};
