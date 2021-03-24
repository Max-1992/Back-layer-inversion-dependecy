// Require Models
const { dbMongooseConection } = require('./services');
const database = require('./db.connection.interface')(dbMongooseConection);
const repositories = require('./repositories');

module.exports = {
    database,
    repositories
}