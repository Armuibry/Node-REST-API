import express  from "express";
import userRoutes from "./routes/users.js"
import cors from "cors"


const app = express();
const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

app.use(cors())
app.use(express.json());
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers')
    next();
});

app.use('/users',userRoutes)

app.get('/',(req,res)=>{
    console.log("Test");
    res.send('Hello user Please use "/users" path to get all users. You can perform operations such as Add, Update, Delete and Search with the help of ID ');
});

app.listen(PORT,HOST, ()=> console.log(`servert running on port: http//:localhost:${PORT}`));