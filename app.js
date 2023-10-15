const express = require('express');

const app = express();
app.use(express.static('public/dist'));

const { createServer } = require('http');

const path = require('path');
const ENTRY_POINT = path.join('public', 'dist', 'index.html');


//Get Requests
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

//Socket IO
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


//Mongo DB

// require('dotenv').config();

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://shanedgilbert:" + process.env.SHANE_ID + "@cluster0.kncph0j.mongodb.net/?retryWrites=true&w=majority";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

// run().catch(console.dir);