const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) => {
    console.log('new websocket connection')

    //when you joined server events
    socket.emit('message', 'Welcome')
    socket.broadcast.emit('message', 'A new user has joined')

    //when you sending a server message events
    socket.on('sendMessage', (message) => {
        io.emit('message', message)
    })

    //sharing your location server events
    socket.on('sendLocation', (coords) => {
        io.emit('message', `https://google.com/maps?q=${coords.latitude},${coords.longitude}`)
    })

    //when you disconnect server message
    socket.on('disconnect', () => {
        io.emit('message', 'A user has left')
    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

