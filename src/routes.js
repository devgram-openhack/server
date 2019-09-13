// Aqui vao as definicoes das rotas da API

const express = require('express');

const routes = express.Router();

const { userController } = require('./controllers/UserController');

routes.post('/users', userController.create);

module.exports = { routes };