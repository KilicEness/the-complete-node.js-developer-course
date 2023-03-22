const express = require('express')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
require('./db/mongoose')

//define express to app
const app = express()
const port = process.env.PORT || 3000

/* app.use((req, res, next) => {
    res.status(503).send('Site is currently down')
}) */

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

//Listen server
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async() => {
    /* const task = await Task.findById('641b059fff0dabb2097f74e9')
    await task.populate('owner').execPopulate()
    console.log(task.owner) */

    const user = await User.findById('641b04b13cfee734cfad0c8d')
    await user.populate('tasks')
    console.log(user.tasks)
}

main()