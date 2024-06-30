import { jwtVerifier } from "../authUtils/authUtils.js";

const auth = (req, res, next) => {
    try {
        const Token = req.headers("Authorized");
            jwtVerifier(Token);
            next();
    } catch (e) {
        res.send({error:error.message});
    }
}

export default auth;