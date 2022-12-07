const app = require("../../app");
const jwt = require("jsonwebtoken")
const User=require("../../modal/userschema");
const reportModel = require("../../modal/reportSchema");
const courses = require("../../modal/courses");
const postschema = require("../../modal/postschema");
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
    try{
        const data = await User.find();
        // console.log(data);
        res.json(data)
    }catch(error){
        console.log(error.messsage);
    }
    // console.log(data);   
    
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

const getReport= async(req,res)=>{
    try {
        const allReport = await reportModel.find().populate('userId').populate('postId').sort({ _id: -1 });
        // console.log(allpost);   
        res.json(allReport)
    } catch (error) {
        console.log(error);
    }
}

const adminCourselist= async(req,res)=>{
    try{
  const allCourse= await courses.find().populate('userId')
  res.json(allCourse) 
    }catch(error){
        console.log(error);
    }
}

 const blockPost= async(req,res)=>{
    console.log(req.params.id);
   
    await postschema.findByIdAndUpdate(req.params.id, { status: 'Blocked' },
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

 const unblockPost=async(req,res)=>{
    await postschema.findByIdAndUpdate(req.params.id, { status: 'active' },
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
 const adminGetPost = async (req, res) => {
    try {
        const allpost = await postschema.find().populate('userId').sort({ _id: -1 });
        // console.log(allpost);   
        res.json(allpost)
    } catch (error) {
        console.log(error);
    }
}
module.exports={adminGetPost,unblockPost,blockPost,adminCourselist,getReport,postadminlogin,allusers,blockuser,unblockuser}
