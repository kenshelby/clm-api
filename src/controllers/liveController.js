export const addNewLive = (req, res) => {
    res.send("newlive added");
} 


export const getLive = (req, res) => {
console.log("inside controller")
    res.send("get live");
}


export const getAllLive = ( req, res) => {
    res.send("get all Live");
}


export const updateLive = ( req, res) => {
    res.send("updated live");
}