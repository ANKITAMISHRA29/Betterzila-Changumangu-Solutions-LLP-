const User = require("../model/user-mode");

const signup = async (req, res) => {
    try {
        const { username, password, phone, email } = req.body;
        const existUser = await User.findOne({ email });
        if (existUser) {
            res.status(401).json({ message: "Email already exist." });
        }
        const newUser = await User.create({
            username,
            email,
            phone,
            password
        });
        return res.status(200).json(newUser);
    } catch (error) {
        console.log("Backend signup error: ", error);
        return res.status(500).json({ message: "Internal server error." });
    }
}

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existUser = await User.findOne({ email, password });
        if (!existUser) {
            res.status(400).json({ message: "No user found." });
        }
        return res.status(200).json(existUser);
    } catch (error) {
        console.log("Backend signup error: ", error);
        return res.status(500).json({ message: "Internal server error." });
    }
}


module.exports = {
    signup,
    signin
}