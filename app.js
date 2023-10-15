const express = require('express');

const app = express();
app.use(express.static('public/dist'));

const { createServer } = require('http');

const path = require('path');
const ENTRY_POINT = path.join('public', 'dist', 'index.html');

app.get('/', (req, res) => {
    res.sendFile(ENTRY_POINT, {root: __dirname});
});

app.get('/description/:planet', (req, res) =>{
    const config = require('./videos/planets.json');
    console.log(config[req.params['planet']]);
    res.send(config[req.params['planet']]['description'])
});

app.get('/video/:planet', (req, res) =>{
    console.log(req.params['planet']);
    res.sendFile(__dirname + '/videos/' + req.params['planet'] + '.mp4');
});


const server = createServer(app);

const socketio = require("socket.io");
const io = new socketio.Server(server, {
    cors: {
        // TODO: Change to client domain at some point
        origin: `*`
    }
});

io.on('connection', socket => {
    console.log(`New connection! (${socket.id}`);
});


const PORT = 3000

server.listen(PORT, undefined, undefined, () => {
    console.log(`http://localhost:${PORT}/`);
});