// CRUD CREATE read update delete
const { MongoClient, ObjectId } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";
const client = new MongoClient(url);
 
const id = new ObjectId()
console.log(id)
console.log(id.id)
console.log(id.toHexString().length)

async function getData() {
  try {
    const db = client.db(databaseName);
 
    // db.collection("users").insertOne({
    //   name: "Enes",
    //   age: 22,
    // });

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'clean the house',
    //         completed: false
    //     }, {
    //         description: 'renew inspection',
    //         completed: false
    //     }, {
    //         description: 'pot plants',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert tasks')
    //     }

    //     console.log(result.ops)
    // })

  } catch (err) {
    console.log(err);
  }
}
 
getData();