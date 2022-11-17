const app = require("../../app");
const jwt = require("jsonwebtoken")
const User=require("../../modal/userschema")
const admin = {
    adminEmail: 'admin@gmail.com',
    adminPassword: 12345678
}

const postadminlogin = async (req, res) => {
    try {


        let { email, password } = req.body
        console.log(req.body);

        if (email == admin.adminEmail && password == admin.adminPassword) {
            console.log("entered");
            const admintoken = jwt.sign({ email: admin.adminEmail }, process.env.JWT_SECRET)
            // console.log(token);
            if (res.status(201)) {
                console.log('hai');
                return res.json({ state: "ok", admindata: admintoken })
            } else {
                console.log('hello');
                return res.json({ error: "error" });
            }
        }
        return res.json({ status: "error", error: "Invalid Email or Password" })

    } catch (error) {
        console.log(error.message);
    }
}
const allusers = async (req, res) => {
    const data = await User.find();
    // console.log(data);   
    res.json(data)
}

const blockuser = async (req, res) => {
    console.log(req.params.id);
   
    await User.findByIdAndUpdate(req.params.id, { status: 'Blocked' },
        function (err, docs) {
            if (err) {
                console.log(err)
                return res.json({ msg: "Not updated" })
            }
            else {
                console.log("Updated application status  ");
                return res.json({ msg: "updated status" })
            }
        }).clone()
}

const unblockuser = async (req, res) => {
    // console.log(req.params.id);
   
    await User.findByIdAndUpdate(req.params.id, { status: 'Active' },
        function (err, docs) {
            if (err) {
                console.log(err)
                return res.json({ msg: "Not updated" })
            }
            else {
                console.log("Updated application status  ");
                return res.json({ msg: "updated status" })
            }
        }).clone()
}

module.exports={postadminlogin,allusers,blockuser,unblockuser}
