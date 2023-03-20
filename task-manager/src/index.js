const express = require('express')
const User = require('./models/user')
const Task = require('./models/task')
require('./db/mongoose')

//define express to app
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

//Create users
app.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

//Read users
app.get('/users', async (req, res) => {
    try {
        const user = await User.find({})
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})

//Read one user by id
app.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})

//Update user by id
app.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

//Delete user by id
app.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})

//Create tasks
app.post('/tasks', async (req, res) => {
    const task = new Task(req.body)

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(404).send(e)
    }
})

//Read tasks
app.get('/tasks', async (req, res) => {

    try {
        const task = await Task.find({})
        res.send(task)
    } catch (e) {
        res.status(404).send(e)
    }
})

//Read task by id
app.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findById(_id)
        if (!task) {
            res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        return res.status(404).send()
    }
})

//Update task by id
app.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid Updates!' })
    }

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!task) {
            res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }

})

//Delete task by id
app.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

//Listen server
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})