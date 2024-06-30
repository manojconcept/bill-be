import userModel from "../model/userModel.js";
import { genPassword, passwordCompare, genJWTToken } from "../authUtils/authUtils.js";

const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const totalUser = await userModel.countDocuments({}, { hint: "_id_" });
        const userCheck = await userModel.findOne({ username })
        const hashedPassword = await genPassword(password);
        if (!userCheck) {
            const newUser = new userModel(
                {
                    ...req.body,
                    password: hashedPassword,
                    id: totalUser + 1,
                    verified: true
                }
            );
            await newUser.save();
            res.status(201).json({ message: `user created successfully` });

        } else {
            res.status(401).json({ message: "user already exists" });
        }
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const getUserDataDb = await userModel.findOne({ username, deleted: false });
        if (!getUserDataDb) {
            res.status(403).json({ message: "invalid credential" });
        }
        const isPassword = await passwordCompare(password, getUserDataDb?.password);
        if (!isPassword) {
            res.status(403).json({ message: "invalid credential" });
        }
        const token = genJWTToken({ id: getUserDataDb?._id });
        res.status(200).json({
            token,
            metaData: getUserDataDb?._id,
        })
    }
    catch (e) {
        res.status(404).json({ error: e.message });
    }
}

export { register, login };

