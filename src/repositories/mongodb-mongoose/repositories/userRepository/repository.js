module.exports = (dbConection) => ({

    // ===========================================================
    // Create and register new User
    // ===========================================================
    create: async (newUser) => {

        // Create User Object
        const user = newUser;

        // Db save Object collection Users.
        await dbConection.collection('users').save(user);
        console.log('Se crea usuario desde el Repositorio sin eschemas.');

        // Return document
        return user;
    }

});