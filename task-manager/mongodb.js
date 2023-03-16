// CRUD CREATE read update delete
const { MongoClient, ObjectId } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";
const client = new MongoClient(url);

async function getData() {
  try {
    const db = client.db(databaseName);

    /* db.collection('users').updateOne({
      _id: new ObjectId("6411d2b7969305bb5be0ac33")
    }, {
      $set: {
        name: 'Chandler'
      }
    }).then((result) => {
      console.log(result)
    }).catch((error) => {
      console.log(error)
    }) */

    db.collection('tasks').updateMany({
      completed: false
    }, {
      $set: {
        completed: true
      }
    }).then((result) => {
      console.log(result.modifiedCount)
    }).catch((error) => {
      console.log(error)
    })

  } catch (err) {
    console.log(err);
  }
}

getData();