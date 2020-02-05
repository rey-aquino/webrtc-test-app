const express = require('express')

var io = require('socket.io')
({
    path: '/webrtc'
})
//Instantiate app
const app = express()
const port = 8080

// app.get('/', (req, res) => res.send('Hello World'))
app.use(express.static(__dirname + '/.meteor/local/build'))
app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/build/index.html')
})

const server = app.listen(port, () => console.log('Example App Listening to port: 8080'))

io.listen(server)

// https://www.tutorialspoint.com/socket.io/socket.io_quick_guide.htm
const peers = io.of('/webrtcPeer')

//keep a reference of all socket connections
let connectedPeers = new Map()

peers.on('connection', socket => {
    console.log(socket.id)
})