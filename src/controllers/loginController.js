import User from "../models/user.js";


export const login = async (req, res) => {

    const { email, password } = req.body;

    // try {
    //     const user = await User.findOne({email: email});//add next step
    // } catch (error) {
    //     res.send(error);
    // }
    res.json({user: "username"})
}