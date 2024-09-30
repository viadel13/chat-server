import { connectDB } from "./config/db";
import { chats } from "./datas/data";

const userRoutes = require('./route/user.routes');
const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");




dotenv.config();
const app = express();
connectDB();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json());
app.use('/api/user', userRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("demarrer sur le port", PORT));