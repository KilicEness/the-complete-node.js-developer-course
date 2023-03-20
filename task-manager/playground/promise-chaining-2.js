require('../src/db/mongoose')
const Task = require('../src/models/task')

/* Task.findByIdAndDelete('641469a817394abf5d10f2e6').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
 */
const deleteAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed:false })
    return count
}

deleteAndCount('641469a817394abf5d10f2e6').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})