var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();

//Middleware or static files
app.use(express.static('public'));

// Listen to port
var server = app.listen(3000, () =>{
    console.log("Listening on port 3000");
});

// Socket setup
var io = socket(server);
io.on('connection', (socket)=>{
    console.log("Made socket connection")
    socket.on('chat', (data)=> {
        io.sockets.emit('chat', data);
    })
    socket.on('typing', (data)=> {
        socket.broadcast.emit('typing', data);
    })
})