require('dotenv').config();
const mongo = require('mongodb').MongoClient;

const db = mongo.connect(process.env.MONGO_URL,);

module.exports = db;
