import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config()
const DB = `mongodb+srv://mdamirsohail:rnbmW39rrtwMDKGJ@cluster0.gkyesi4.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`


mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useCreateIndex: true,
    // useFindAndModify: false
    
}).then(()=>{
    console.log("DB Connection Successfull");
}).catch((error)=>{
    console.log("DB Connection Failed",error);
})

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String,
    _id: String
})

export const users = new mongoose.model("user",userSchema)