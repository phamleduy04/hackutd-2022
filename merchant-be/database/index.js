/**
 * This file create a connection to database and return a Collection class
 */
const { MongoClient } = require('mongodb');
const Collection = require('./Collection.js');

// create a new mongo client
const mongo = new MongoClient(process.env.MONGO);

// connect to mongodb server
mongo.connect().then(() => console.log('Connected to Mongodb database'));

// create a new collection named jsons (idk what to name)
const mongoCollection = mongo.db().collection('jsons');

// export a new Collection class with the collection and session
const db = new Collection(mongoCollection, mongo.startSession());

module.exports = db;