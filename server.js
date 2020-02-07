const express = require('express')

var io = require('socket.io')

//Instantiate app
const app = express()
const port = 8080

app.get('/', (req, res) => res.send('Hello World'))
// app.use(express.static(__dirname + '/.meteor/local/build'))
// app.get('/', (req, res, next) => {
//     res.sendFile(__dirname + '/build/index.html')
// })

const server = app.listen(port, () => console.log('Application Listening to port: 8080'))