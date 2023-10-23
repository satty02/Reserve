
const {MongoClient} = require('mongodb');

const url = 'mongodb+srv://satty:Satish%40123@cluster0.hbc4k0d.mongodb.net/';
const client = new MongoClient(url);

const dbName = "reserve";

async function main(){
    await client.connect();
    console.log('Connected successfully to mongoDB');
    const db = client.db(dbName);
    return db;
}

module.exports = main;
