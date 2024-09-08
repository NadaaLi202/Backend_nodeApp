


import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title:String,
    description:String,
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
},{
        timeStamps:true
    
})

export const blogModel = mongoose.model('blog',blogSchema)