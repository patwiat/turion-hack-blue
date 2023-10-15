const express = require('express');

const app = express();
app.use(express.static('public/dist'));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const { createServer } = require('http');

const path = require('path');
const ENTRY_POINT = path.join('public', 'dist', 'index.html');


//Get Requests
app.get('/', (req, res) => {
    res.sendFile(ENTRY_POINT, { root: __dirname });
});

app.get('/description/:planet', (req, res) => {
    const config = require('./videos/planets.json');
    console.log(config[req.params['planet']]);
    res.send(config[req.params['planet']]['description'])
});

app.get('/video/:planet', (req, res) => {
    console.log(req.params['planet']);
    res.sendFile(__dirname + '/videos/' + req.params['planet'] + '.mp4');
});


const server = createServer(app);

//Mongo DB

require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://shanedgilbert:" + process.env.SHANE_ID + "@cluster0.kncph0j.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

var database = client.db("Planets");
var journeys = database.collection("journeys");
var chatLogs = database.collection("chatLogs");
var userID = database.collection("userID");

async function run() {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
}

process.on('exit', async () => {
    await client.close();
});

run().catch(console.dir);


async function viewChatLog(planet) {
    var query = { "planet": planet }
    var logs = await chatLogs.findOne(query);
    return logs.chatLogs
}

async function addMessage(planet, msg, userId) {
    var query = { "planet": planet }
    var logs = await chatLogs.findOne(query)

    logs.chatLogs.push({ 'message': msg, 'userId': userId });
    await chatLogs.updateOne(query, { $set: { chatLogs: logs.chatLogs } })
}

async function getUserID(userID) {
    var query = { "userID": userID }
    var userIDs = await userID.findOne(query);
    return userIDs.userID
}

app.get('/chatLog/:planet', async (req, res) => {
    var planet = req.params['planet']
    var logs = await viewChatLog(planet)
    res.send(logs)
});

// async function addMessage(planet, userId, msg){
//     var logs = await chatLogs.findOne('$elemMatch', {'earth' : chatLogs})
//     console.log(logs)
// }

// addMessage('earth', 'testUser2', 'testMessage2')

// planets = ['earth', 'moon', 'mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto', 'sun', 'asteroid belt']
// async function addPlanets(){

// }

// socket.io

const socketio = require("socket.io");
const io = new socketio.Server(server, {
    cors: {
        // TODO: Change to client domain at some point
        origin: `*`
    }
});

const CHAT_ROOMS = new Set([
    'sun',
    'mercury',
    'venus',
    'earth',
    'moon',
    'mars',
    'asteroid belt',
    'jupiter',
    'saturn',
    'uranus',
    'neptune',
    'pluto',
]);

io.on('connection', socket => {
    console.log(`New connection! (${socket.id}`);

    socket.on('join_room', ({ room }) => {
        console.assert(CHAT_ROOMS.contains(room));
        for (const room of Array.from(socket.rooms.values()))
            if (room !== socket.id)
                socket.leave(room);
        socket.join(room);
        console.log(`${socket.id} joined room "${room}"`)
    });

    socket.on('chat_message', async ({ sender, content }) => {
        // Should only be one room: the object the user is currently at.
        socket.rooms.forEach(async room => {
            if (room === socket.id)
                return;
            await chatLogs.updateOne({ planet: room }, {
                $push: {
                    'chatLogs': { sender, content }
                }
            });
            socket.to(room).emit('chat_message', { sender, content });
        });
    });
});
app.get('*', function (req, res) {
    res.sendFile(ENTRY_POINT, { root: __dirname });
});

const PORT = 3000

server.listen(PORT, undefined, undefined, () => {
    console.log(`http://localhost:${PORT}/`);
});