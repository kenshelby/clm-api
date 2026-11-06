import Live from "../models/liveModel.js";

export const addNewLive = async (req, res) => {

    const { payload } = req.body;

    try {
        const createdData = await Live.create(payload);
        res.status(200).json(createdData);
    } catch (error) {
        res.status(404).json(error);
    }
}


export const getLive = (req, res) => {
    console.log("inside controller")
    res.send("get live");
}


export const getAllLive = (req, res) => {
    res.send("get all Live");
}


export const updateLive = (req, res) => {
    res.send("updated live");
}