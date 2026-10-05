import express from "express";
import morgan from "morgan";


const app = express();

app.use(morgan('dev')); //logs
app.use(express.json()); //parses incoming req and adds to req.body

app.get('/', (req, res) => {
    res.status(200).send("clm api started..");
})

const port = 3000;

app.listen(port, () => {
    console.log('clm api started');
})