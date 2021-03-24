// Initialization of environments
const dotenv = require('dotenv');
dotenv.config({
    path: `${process.env.NODE_ENV}.env`
});

// Require application
const app = require('./server');

// Error Handlers
process.on('unhandledRejection', (err) => {
    console.log('unhandledRejection: ', err);
});

process.on('uncaughtException', (err, res, req) => {
    console.log('uncaughtException: ', err);
});

// Start the server application
app.listen(process.env.PORT, (err) => {
    if(err) console.log(`Failed to start server on port ${process.env.PORT}`, `[ERROR]: ${err}`.red);
    console.log(`Server is running in`,`PORT ${process.env.PORT}`.blue);
});

module.exports = app;