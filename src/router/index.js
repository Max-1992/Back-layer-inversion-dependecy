const createUserServiceRoute = require('../components/createUser/network');

const router = server => {
    server.use('/api/user', createUserServiceRoute );
}

module.exports = router;