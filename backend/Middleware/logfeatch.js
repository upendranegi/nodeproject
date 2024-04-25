const jwt = require('jsonwebtoken');
const JWT_SECRET = "djvnndfnsdmn nsdbmnas";

const logfeatch =(req , res , next)=>{

    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error :"please authenticate user"})
    }
    try{

   
    const   data = jwt.verify(token , JWT_SECRET);
     req.user =data.user;


    next();
} catch (error) {
    console.error(error.message);
    res.status(500).send("Some internal server Error")
}

}

module.exports = logfeatch