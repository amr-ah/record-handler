const express = require('express');
const cors = require('cors');
const app = express();

const config = require('./config/app');
require('datejs');
require('./config/db');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require(`./swagger/docs.json`);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
    explorer: true
}));

app.use(cors());
const recordsApi = require('./routes/records');
app.use('/api', recordsApi);

module.exports = app;