import Live from "../models/liveModel.js";

export const addNewLive = async (req, res) => {

    const { payload } = req.body;

    try {
        const createdData = await Live.create(payload);

        res.status(201).json({
            success: true,
            message: "added successfully",
            data: createdData
        });
    } catch (error) {
        console.log(error)
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: "either name or uid already exists"
            })
        }
        res.status(500).json({
            success: false,
            message: "something went wrong on server"
        });
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