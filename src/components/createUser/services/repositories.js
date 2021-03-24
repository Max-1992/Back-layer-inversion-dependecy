// Require repositories
const { repositories } = require('../../../repositories/mongodb-mongoose-schemas');
// const { repositories } = require('../../../repositories/mongodb-mongoose');

// Require repositories interfaces
const { IUserRepository }  = require('../../../repositories/interface');

// Generate repository instance
const userRepository = IUserRepository(repositories.userRepository)

module.exports = {
    userRepository
}