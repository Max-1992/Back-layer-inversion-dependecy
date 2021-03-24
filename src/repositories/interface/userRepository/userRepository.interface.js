const IUserRepository = (userRepository) => ({
    save: async (newUser) => await userRepository.create(newUser)
})

module.exports = IUserRepository;