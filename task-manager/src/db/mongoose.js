const mongoose = require('mongoose')

main().catch(err => console.log(err))

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

    const Task = mongoose.model('Task', {
        description: {
            type: String,   
            required: true,
            trim: true
        }, 
        completed: {
            type: Boolean,
            default: false
        }
    })






}
