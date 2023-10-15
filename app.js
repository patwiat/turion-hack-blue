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
const io = new socketio.Server(server);

io.on('connection', socket => {
    console.log('new connection!');
});


const PORT = 3000

server.listen(PORT, undefined, undefined, () => {
    console.log(`http://localhost:${PORT}/`);
});