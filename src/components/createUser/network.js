// Require Modules
const { Router } = require('express');
const router = Router();

const services = require('./services');

const entites = require('../../entities');
services.entites = entites;

// Service
const createUserService = require('./service')(services);

// Controllers
const handlerUserController = require('./controller')(createUserService);

// Declare Routes
router.post('/add', handlerUserController.createUser);

module.exports = router;