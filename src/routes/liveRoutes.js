import express from "express";
import { addNewLive, getLive, getAllLive, updateLive } from "../controllers/liveController.js";

const router = express.Router();

router.get('/getlive', getLive);
router.post('/addnewlive', addNewLive);
router.get('/getalllive', getAllLive);
router.patch('/updatelive', updateLive);

export default router;