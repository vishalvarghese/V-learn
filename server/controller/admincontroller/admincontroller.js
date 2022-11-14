const app = require("../../app");
const jwt = require("jsonwebtoken")

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
            const token = jwt.sign({ email: admin.adminEmail }, process.env.JWT_SECRET)
            console.log(token);
            if (res.status(201)) {
                console.log('hai');
                return res.json({ state: "ok", data: token })
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
module.exports={postadminlogin}
