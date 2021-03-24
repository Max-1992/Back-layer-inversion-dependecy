const IDatabaseConnection = (dbConnect) => ({
   connect: async (dbUrlConnectin) => await dbConnect.connect(dbUrlConnectin),
   disconnect:  async () => await dbConnect.disconnect()
})

module.exports = IDatabaseConnection;