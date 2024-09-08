
import { userModel } from "../../../database/models/user.model.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import generateToken from "../../utilis/generateToken.js";

export const signup = async(req,res) =>{
    const {name, email, password } = req.body
   
    let user = await userModel.findOne({email})
    console.log(user);
    if(user){
        res.json({message:"email already existed"})
    }else{

        bcrypt.hash(password,Number(process.env.ROUND),async function(err,hash){

            await userModel.insertMany({name,email,password: hash})
        res.json({message:"Done"})

        })
}
}


export const signIn = async(req,res) =>{
    const { email, password } = req.body
   
    let user = await userModel.findOne({email})
   
    if(user){

        //check password
        const match = await bcrypt.compare(password,user.password);
        if(match){
            // login 
            let token = generateToken({name:user.name,userId: user._id,role: user.role})
            res.json({message: 'login',token})
        }else{
            // password incorrect
            res.json({message:'password incorrect'})
        }
    }else{
        res.json({message:'Account not found'})
    }
}







 // await userModel.insertMany({name, email, password})

    // let users = await userModel.find({_id:"669c2da23d18331c229b4b87"},{name:1})
    // let users = await userModel.findOne({_id:"669c2da23d18331c229b4b87"})
    // let users = await userModel.findById({_id:"669c2da23d18331c229b4b87"})
