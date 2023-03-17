const mongoose = require('mongoose')
const validator = require('validator')

main().catch(err => console.log(err))

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

    const User  = mongoose.model('User', {
        name: {
            type: String,
            required: true,
            trim: true
        },
        age: {
            type: Number,
            default: 0,
            validate(value) {
                if (value < 0) {
                    throw new Error('Age must be a positive number')
                }
            }
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error('Please provide an email')
                }
            }
        }
    })

    const me = new User({
        name: 'Michael Scott  ',
        email: '  mIchaelScoTT@gmail.com'
    })

    me.save().then(() => {
        console.log(me)
    }).catch((error) => {
        console.log('Error!', error)
    }) 

    /* const Task = mongoose.model('Task', {
        description: {
            type: String
        }, 
        completed: {
            type: Boolean
        }
    })

    const task = new Task({
        description: 'Learn Mongoose',
        completed: false
    })

    task.save().then(() => {
        console.log(task)
    }).catch((error) => {
        console.log(error)
    }) */





}
