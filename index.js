import express from "express";
import"dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/users', userRoutes);

const connectDB = async()=>{
    try{
        mongoose.connect(process.env.DB_CONNECTION)
        console.log("MongoDB Connected");
    }
    catch(err){
        console.error(err.message);
        process.exit(1);
    }
}
app.listen(PORT, ()=>{
    connectDB();
    console.log(`App listening on port ${PORT}`)
});