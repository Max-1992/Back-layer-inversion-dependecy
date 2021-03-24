const dbConection = require('mongoose');
const userRepository = require('./repository')(dbConection.connection);

module.exports = userRepository;