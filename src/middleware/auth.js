
import jwt from "jsonwebtoken";
const userAuth = (req,res,next) => {
    const token = req.header('token');
    console.log(token);
    jwt.verify(token,process.env.JWT_KEY, function(err,decoded){
        if (err){
            res.json({message: "invalid token",err})
        }else{
            console.log(decoded);
            req.userId = decoded.userId
            next()
        }


    })
}
export default userAuth;