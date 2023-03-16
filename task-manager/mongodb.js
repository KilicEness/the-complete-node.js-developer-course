// CRUD CREATE read update delete
const { MongoClient, ObjectId } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";
const client = new MongoClient(url);

async function getData() {
  try {
    const db = client.db(databaseName);

    /* db.collection('users').deleteOne({
      name: 'Phoebe'
    }).then((result) => {
      console.log(result)
    }).catch((error) => {
      console.log(error)
    }) */

    db.collection('tasks').deleteOne({
      description: 'clean the house'
    }).then((result) => {
      console.log(result)
    }).catch((error) => {
      console.log(error)
    })

  } catch (err) {
    console.log(err);
  }
}

getData();