const cookieParser = require("cookie-parser")

const jwt = require("jsonwebtoken")
const check = (req, res, next) => {
    try {
        console.log("Check middleware")
        // console.log(req.cookies);
        const token = req.body.token
        console.log(token);
        const user = jwt.verify(token, process.env.JWT_SECRET)
       if(user){
        req.user=user
        next()
       }else{
        res.send({ status: "no user", data: "no user" })
       }
    } catch (error) {
        console.log(error.message);
        res.send({ status: "errors", data: error.message })
    }

}

module.exports = check;