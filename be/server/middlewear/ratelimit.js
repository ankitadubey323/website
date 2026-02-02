import rateLimit from  "express-rate-limit"
export const generatelimiter=rateLimit({
    windowMs:60*1000,
    max:5,
    message:{
        success:false,
        error:"too many request"  
    },
    standardHeaders:true,
    legacyHeaders:false

})
