import mongoose from "mongoose";

 export const dbConntact = 
 mongoose.connect(`mongodb://localhost:27017/noteApp`)
 .then(() =>{
   console.log("DB connected")
 })
 .catch(() => {
    console.log("DB Error")
 });