import mongoDBS from "./service/service.js"

const mongoConnect = async (app, PORT) => {
    try{
        await mongoDBS("billapp");
        console.log("mongoDB is connected");
        app.listen(PORT,()=>console.log(`server is running on Port : ${PORT}`))
    }
    catch(error){
        console.log(error);
    }
}

export default mongoConnect;
