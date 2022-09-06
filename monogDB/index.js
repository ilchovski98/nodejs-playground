const { connectToDatabase, getDatabases } = require('./db/database');

const startDatabase = async () => {
  await connectToDatabase();
}

startDatabase();
