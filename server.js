const express = require('express')

var io = require('socket.io')
({
    path: '/webrtc'
})
//Instantiate app
const app = express()
const port = 8080

// app.get('/', (req, res) => res.send('Hello World'))
app.use(express.static(__dirname + '/build'))
app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/build/index.html')
})

const server = app.listen(port, () => console.log('Example App Listening to port: 8080'))