// Aqui vao os controllers que lidam com as rotas

const { UserModel } = require('../models/UserModel');

class UserController {
  /**
   * @param {UserModel} model The model.
   */
  constructor(model) {
    /**
     * @private
     * @type {UserModel}
     */
    this.model = model;
  }

  /**
   * Handles the user creation route.
   *
   * @param {import('express').Request} req The request.
   * @param {import('express').Response} res The response.
   * @returns {Promise<import('express').Response>} A promise to the response.
   */
  async create(req, res) {
    const newUser = req.body;

    try {
      await this.model.create(newUser);

      return res.status(200)
        .json({ });
    } catch (err) {
      return res.status(500)
        .json({ err });
    }
  }
}

const userController = new UserController(new UserModel());

module.exports = { userController };