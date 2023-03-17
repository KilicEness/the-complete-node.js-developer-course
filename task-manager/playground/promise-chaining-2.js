require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('641469a817394abf5d10f2e6').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})