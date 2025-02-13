import { Connection } from '../../db/index.js';

class ProjectController {
  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns {Promise<import('express').Response>}
   */
  static async read(req, res) {
    try {
      const conn = new Connection();

      const [user] = await conn.execute('SELECT * FROM users WHERE id = ?', 1);

      // Continue...

      return res.status(200).json({ user });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }
}

export { ProjectController };
