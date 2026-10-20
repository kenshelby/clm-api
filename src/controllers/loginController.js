import User from "../models/user.js";
import jwt from "jsonwebtoken";


export const login = async (req, res) => {

    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });//add next step

        if (user) {

            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

            res.cookie("token", token, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                maxAge: 24 * 60 * 60 * 1000
            })

            res.status(200).json({
                message: "login successful",
                user: user
            })
        } else {
            res.status(404).json({
                message: "User not found"
            });
        }
    } catch (error) {
        res.send(error);
    }

}