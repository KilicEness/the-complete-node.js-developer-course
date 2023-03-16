// CRUD CREATE read update delete
const { MongoClient, ObjectId } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";
const client = new MongoClient(url);

async function getData() {
  try {
    const db = client.db(databaseName);
    db.collection('tasks').findOne({ _id: new ObjectId("6411d83a0ce6135f8e0c721e") }).then((result, error) => {
      if (error) {
        return console.log('Unable to fetch')
      }
      console.log(`${result.description} is that`)
    })

    db.collection('tasks').find({ completed: false }).toArray().then((result, error) => {
      if (error) {
        return console.log('Unable to fetch')
      }
      console.log(result)
    })

  } catch (err) {
    console.log(err);
  }
}

getData();