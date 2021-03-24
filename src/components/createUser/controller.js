module.exports = createUserService =>  ({

    // ===========================================================
    // Create and register new User
    // ===========================================================
    createUser: async (req, res) => {

        // Capture the data sent by the request body.
        const { name, email, password } = req.body;
        const userDTO = { name, email, password };
        
        // Execute the service call.
        const user = await createUserService(userDTO);

        // Response
        res.status(201).json({
            ok: true,
            data: user
        })

    }
});