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
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

module.exports = Task