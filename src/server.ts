import { chats } from "./datas/data";


const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");



const app = express();
dotenv.config();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.get('/', (req: any, res: any) => {
    res.send("hello")
});

app.get('/api/chat', (req: any, res: any) => {
    res.send(chats)
});

app.get('/api/chat', (req: any, res: any) => {
    res.send(chats)
});


app.get('/api/chat/:id', (req: any, res: any) => {
    const id = req.params.id
    const singleChat = chats.find(c => c._id === id);
    res.send(singleChat)
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("demarrer sur le port", PORT));