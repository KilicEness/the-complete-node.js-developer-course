require('../src/db/mongoose')
const User = require('../src/models/user')

/* User.findByIdAndUpdate('64141c4d001efe6b1f78d4d6', {age: 1}).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
}) */

const updateAndcount = async(id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAndcount('64141c4d001efe6b1f78d4d6', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})