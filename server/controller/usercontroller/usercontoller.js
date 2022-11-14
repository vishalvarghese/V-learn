const app = require("../../app");
const User=require("../../modal/userschema")
const bcrypt =require('bcrypt')
const jwt = require("jsonwebtoken")
const postSignup = async (req, res) => {
    try {
        // console.log({ ...req.body });
        let { name, email,phonenumber, password } = req.body
        password = await bcrypt.hash(password, 10)

        const user = await new User({
            name,
            email,
            phonenumber,
            password
        })
        await user.save()
        res.status(200).json({ res: user })
    } catch (error) {
        console.log(error.message);
    }

}
//login and jwt token generated
const login = async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        return res.json({ error: "User not found" })
    }
    else {
        const auth = await bcrypt.compare(password, user.password);
        console.log(auth, "klklk");
        if (auth) {
            console.log("entered");
            //token generation
            const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET,{ expiresIn: "7d" })
            console.log(token);
            if (res.status(201)) {
                console.log('hai');
                return res.json({ state: "ok", data: token })
            } else {
                console.log('hello');
                return res.json({ error: "error" });
            }
        }
        else {
            return res.json({ status: "error", error: "Invalid Password" })
        }
    }
}


module.exports={postSignup,login}