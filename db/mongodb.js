import { MongoClient } from 'mongodb'
const url = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(url);


const dbName = 'e-commerce';  // database name

async function main() {
  try {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('customers');
      const data= await collection.find({}).toArray()
      console.log(data); 

    return 'done.';
  } catch (error) {
    console.log(error);
  }
}



export default main;