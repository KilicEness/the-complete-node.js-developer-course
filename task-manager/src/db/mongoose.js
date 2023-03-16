const mongoose = require('mongoose')

main().catch(err => console.log(err))

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

    const User  = mongoose.model('User', {
        name: {
            type: String
        },
        age: {
            type: Number
        }
    })

    const me = new User({
        name: 'Enes',
        age: 22
    })

    me.save().then(() => {
        console.log(me)
    }).catch((error) => {
        console.log('Error!', error)
    })
}
