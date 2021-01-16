require('dotenv').config();
let environment = process.env;

module.exports = {
    nodeEnv: environment.NODE_ENV,
    appPort: parseInt(process.env.PORT) || 3000,
    dbUrl: environment.DB_URL,
};
