import mongoose from "mongoose";

const {MONGODB_LOCAL_URL} = process.env;

const mongoDBS = async (dataBase) => await mongoose.connect(`${MONGODB_LOCAL_URL}/${dataBase}`);

export default mongoDBS;
