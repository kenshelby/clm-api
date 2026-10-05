import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import connectToDb from "./utils/db.js";

dotenv.config();
connectToDb();

const app = express();

app.use(express.json()); //parses incoming req and adds to req.body
app.use(morgan('dev')); //logs

app.get('/', (req, res) => {
    res.status(200).send("clm api started..");
})

const port = process.env.PORT;

app.listen(port, () => {
    console.log('clm api started');
});