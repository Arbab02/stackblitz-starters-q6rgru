// app/lib/mongodb.js
import { MongoClient } from 'mongodb'

const uri = 'mongodb+srv://arbab02:arbab02@cluster0.m3fklkq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// const uri = process.env.MONGODB_URI
if (!uri) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const options = {}

let client
let clientPromise

if (uri === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise