const models = require('../../models');
const userRepository = require('./repository')(models);
// const IUserRepository = require('./repository.interface')(userRepository);

module.exports = userRepository;