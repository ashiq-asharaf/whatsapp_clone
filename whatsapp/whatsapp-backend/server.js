//importing 
import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMessages.js'

import Pusher from 'pusher';

//app config
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
    appId: "1681682",
    key: "ea8d9efcd3d33b0389af",
    secret: "d5ecb8ea63c8c91b407d",
    cluster: "ap2",
    useTLS: true
  });

//middleware
app.use(express.json())


//DB Config
const password = "Admin123";
const dbname = "whatsapp-mern-backend";
const username = "Admin";
const connection_url = `mongodb+srv://${username}:${password}@cluster0.n0pmwfr.mongodb.net/${dbname}`
mongoose.connect(connection_url)

mongoose.connect(connection_url, {
    userCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.once('open',() => {
    console.log("DB is Connected")
})

const msgCollection = db.collection("messagecontent");
const changeStream = msgCollection.watch();

changeStream.on('change', (change) => {
    console.log(change)
})


// .then(() => {
//     console.log("Connected to MongoDB");
// })
// .catch((error) => {
//     console.log("Error Connecting to MongoDb",error);
// })


// ????

//api routes
app.get("/",(req,res) =>res.status(200).send("hello world"));

app.get("/messages/sync", (req, res) => {
    Messages.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
});

app.post("/messages/new", (req, res) => {
    const dbMessage = req.body;

    Messages.create(dbMessage, (err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

//listner
app.listen(port,() =>console.log(`Listening on localhost:${port}`));