const {juggler} = require('@loopback/repository');

const config = {
  name: 'mongo',
  connector: 'mongodb',
  url: process.env.MONGO_URL || 'mongodb://localhost:27017/testdb',
  useNewUrlParser: true,
};

class MongoDataSource extends juggler.DataSource {
  constructor(dsConfig = config) {
    super(dsConfig);
  }
}

module.exports = {MongoDataSource};
