// Requiere Modules
const db = require('mongoose');

const connect = async (dbConnect) => {
    await db.connect( dbConnect, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
    console.log(`Database is connected on`, `${dbConnect}`.green);
};

const disconnect = async () => {
    await db.connection.close();
    console.log(`Database is disconnect`.green);
};

module.exports = {
    connect,
    disconnect
};