
// load our stuff
var ChatServer = require('./chatServer.js')
var app = require('./server.js')
var io = require('socket.io')
// config
var config = require('./configuration.js')


// start http server
app.listen(config.port)
// start chat server
var chat = new ChatServer(app)