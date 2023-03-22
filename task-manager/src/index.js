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

const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
    console.log(token)

    const data = jwt.verify(token, 'thisismynewcourse')
    console.log(data)
}

myFunction()