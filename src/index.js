require('dotenv').config();
const express = require('express');
const {RestApplication} = require('@loopback/rest');
const {RepositoryMixin} = require('@loopback/repository');
const {MongoDataSource} = require('./datasources/mongo.datasource');

class ApiApplication extends RepositoryMixin(RestApplication) {
  constructor(options = {}) {
    super(options);
  }
}

async function main() {
  const app = express();
  const lbApp = new ApiApplication();
  lbApp.dataSource(MongoDataSource, 'mongo');

  app.use('/api', lbApp.requestHandler);

  app.get('/', (req, res) => {
    res.send('Hello from Express and LoopBack 4');
  });

  await lbApp.boot();
  await lbApp.start();

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

main().catch(err => {
  console.error('Unable to start application.', err);
  process.exit(1);
});
