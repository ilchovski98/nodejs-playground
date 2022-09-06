const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const uri = process.env.DB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
let databaseList;
const listDatabases = async (client) => {
  const databases = await client.db().admin().listDatabases();
  databaseList = databases.databases;
  console.log('Databases:', databaseList);
  databases.databases.forEach(db => console.log(`???????????????????????? - ${db.name}`));
}

const main = async () => {
  try {
    await client.connect();
    await listDatabases(client);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

module.exports = {
  connectToDatabase: async function() {
    await main().catch(console.error);
  },
  getDatabases: function() {
    return databaseList;
  }
}
