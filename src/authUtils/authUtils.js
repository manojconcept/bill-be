import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const { SECRET_KEY } = process.env;
const genPassword = async (password, rounds = 10) => {
    try {
        const salt = await bcrypt.genSalt(rounds);
        const hashed = await bcrypt.hash(password, salt);
        return hashed
    } catch (e) {
        console.log(e);
    }
}

const passwordCompare = async (password, storedDBpw) => await bcrypt.compare(password, storedDBpw);

const genJWTToken = (uniqueObj) => jwt.sign(uniqueObj, SECRET_KEY);
const jwtVerifier = (Token) => jwt.verify(Token, SECRET_KEY);



export { genPassword, passwordCompare,genJWTToken,jwtVerifier }


