const express = require('express');

const app = express();
app.use(express.static('public/dist'));

const { createServer } = require('http');

const path = require('path');
const ENTRY_POINT = path.join('public', 'dist', 'index.html');

app.get('/', (req, res) => {
    res.sendFile(ENTRY_POINT, {root: __dirname});
})

const server = createServer(app);

const socketio = require("socket.io");
const io = new socketio.Server(server, {
    cors: {
        // TODO: Change to client domain at some point
        origin: `*`
    }
});

const CHAT_ROOMS = {
    sun: 'sun',
    mercury: 'mercury',
    venus: 'venus',
    earth: 'earth',
    moon: 'moon',
    mars: 'mars',
    asteroid_belt: 'asteroid_belt',
    jupiter: 'jupiter',
    saturn: 'saturn',
    uranus: 'uranus',
    neptune: 'neptune',
    pluto: 'pluto',
};

io.on('connection', socket => {
    console.log(`New connection! (${socket.id}`);

    socket.on('join_room', ({ room }) => {
        console.assert(room in CHAT_ROOMS);
        for (const room of Array.from(socket.rooms.values()))
            if (room !== socket.id)
                socket.leave(room);
        socket.join(room);
        console.log(`${socket.id} joined room "${room}"`)
    });

    socket.on('chat_message', ({ sender, content }) => {
        // Should only be one room: the object the user is currently at.
        socket.rooms.forEach(room => {
            if (room === socket.id)
                return;
            console.log('Sending to room', room)
            socket.to(room).emit('chat_message', { sender, content });
        });
    });
});

const PORT = 3000

server.listen(PORT, undefined, undefined, () => {
    console.log(`http://localhost:${PORT}/`);
});