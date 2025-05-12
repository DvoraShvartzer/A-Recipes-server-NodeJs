const jwt=require('jsonwebtoken')


exports.auth=(req,res,next)=>{
const{authorization}=req.headers;
console.log(authorization);
const token = authorization.split(' ')[1];
console.log(token);

const secretKey=process.env.JWT_SECRET||'secret';
try {
    console.log(secretKey);
   // const user = jwt.verify(token, secretKey);
    const user = jwt.verify(token,secretKey);
    console.log(user);
    req.user_id = user._id;
    req.user_role = user.role;
console.log( req.user_role);
    return next(); 
} catch (error) {
console.log("kjhgfd");

    return next({ error:"you are not frobiden", status: 401 }); 
}
}
