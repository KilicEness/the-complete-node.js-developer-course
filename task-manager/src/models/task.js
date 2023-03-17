const mongoose = require('mongoose')

//Define our task model
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

module.exports = Task