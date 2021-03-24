module.exports = ({ database, entites, userRepository, uuid }) => async (userDTO) => {
    try {
        // Abrir conexión a la base de datos.
        await database.connect(process.env.DATABASE);

        // Get Entites
        const { User } = entites;

        // Capture the data sent by the request body.
        let newUser = new User(userDTO);

        // Create a unique Id for our user.
        newUser.setId = uuid.v4();

        // Create a Date High user.
        newUser.setRegistrationDate = new Date();

        // Call the storage method to create new user.
        const user = await userRepository.save(newUser);

        return user;
    } catch (error) {
        console.error(error)
    } finally {
        // cerrar conexión a la base de datos.
        await database.disconnect();
    }
}