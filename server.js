const app = require('./app');
const config = require('./config/app');
const db = require

app.listen(config.appPort, function () {
  console.log(`Server has started at ${new Date().toString()}`);
  console.log(`Server is running at PORT ${config.appPort}`);
});