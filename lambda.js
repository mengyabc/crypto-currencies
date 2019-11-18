// eslint-disable-next-line no-unused-vars
const AWS = require('aws-sdk')
const MongoClient = require('mongodb').MongoClient

const MONGODB_URI = process.env.MONGODB_ATLAS_CLUSTER_URI

let cachedDb = null

function connectToDatabase(uri) {
  console.log('=> connect to database')

  if (cachedDb) {
    console.log('=> using cached database instance')
    return Promise.resolve(cachedDb)
  }

  return MongoClient.connect(uri)
    .then((client) => {
      cachedDb = client.db('sample_currency')
      return cachedDb
    })
}

function queryDatabase(db, event) {
  console.log('=> query database')
  const query = {}
  if (event.currency) {
    query.currency = event.currency
  }
  if (event.date) {
    query.date = event.date
  }

  return db.collection('currency').find(query).toArray()
    .then(data => ({
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Required for CORS support to work
        'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify(data),
    }))
    .catch((err) => {
      console.log('=> an error occurred: ', err)
      return {
        statusCode: 500,
        body: 'error',
      }
    })
}

module.exports.handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false

  console.log('event: ', event)

  connectToDatabase(MONGODB_URI)
    .then(db => queryDatabase(db, event))
    .then((result) => {
      console.log('=> returning result: ', result)
      callback(null, result)
    })
    .catch((err) => {
      console.log('=> an error occurred: ', err)
      callback(err)
    })
}
