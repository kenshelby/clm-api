import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import connectToDb from "./utils/db.js";
import authRoutes from "./routes/authRoutes.js";
import liveRoutes from "./routes/liveRoutes.js";

dotenv.config();
connectToDb();

const app = express();

app.use(express.json()); //parses incoming req and adds to req.body
app.use(morgan('dev')); //logs

app.get('/', (req, res) => {
    res.status(200).send("clm api started..");
});

app.use('/api/auth/', authRoutes);
app.use('/api/live/', liveRoutes);
// app.use('/api/tenant/');
// app.use('/api/competitor/'); 
// app.use('/api/webextractor/);
// app.use('/api/apiextrctor/');

const port = process.env.PORT;

app.listen(port, () => {
    console.log('clm api started');
});