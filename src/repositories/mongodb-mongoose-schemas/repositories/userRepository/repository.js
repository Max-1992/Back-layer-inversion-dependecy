module.exports = ({ User }) => ({

    // ===========================================================
    // Create and register new User
    // ===========================================================
    create: async (newUser) => {

        // Create User Object
        const user = new User(newUser);

        // Db save Object collection Users.
        await user.save();
        console.log('Se crea usuario desde el Repositorio con eschemas.');

        // Return document
        return user;
    }

});