import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors"
import connectToDb from "./utils/db.js";
import authRoutes from "./routes/authRoutes.js";
import liveRoutes from "./routes/liveRoutes.js";

dotenv.config();
connectToDb();

const app = express();

const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options(/.*/, cors(corsOptions));
app.use(express.json()); //parses incoming req and adds to req.body
// app.use((req, res, next) => {
//     console.log(`➡️ ${req.method} ${req.url}`);
//     next();
// });
app.use(morgan('dev')); //logs

app.get('/', (req, res) => {
    res.status(200).send("clm api started..");
});

app.use('/api/auth/', authRoutes);
app.use('/api/live/', liveRoutes);
// app.use('/api/tenant/');
// app.use('/api/competitor/'); 
// app.use('/api/webextractor/);
// app.use('/api/apiextractor/');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('clm api started on', port);
});