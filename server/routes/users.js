var {google} = require('googleapis')
var GoogleDriveStorage = require('multer-google-drive')

// const fs=require('fs')

var express = require('express');
const { postSignup, login, addpost, getpost, newComment, getComment, likePost, visituser, getUserData, connectionhelper, sendRequest, connectionRequestList, acceptConnection, createCourse, getcourses, getChapter, userDetail, updateProfile, deletePost, Editpost, reportSubmit, getNotification, notificationRead } = require('../controller/usercontroller/usercontoller');
var router = express.Router();
var multer = require('multer');
const { allusers } = require('../controller/admincontroller/admincontroller');

     const GOOGLE_API_FOLDER_ID='18nHUeEeCHHBmyBRL6wIHICyq6249Dnvu'

  
      const auth = new google.auth.GoogleAuth({
        keyFile:'./googlekey.json',
        scopes:['https://www.googleapis.com/auth/drive']
      })


// async function uploadFile(){
//   try{
//     const auth = new google.auth.GoogleAuth({
//       keyFile:'./googlekey.json',
//       scopes:['https://www.googleapis.com/auth/drive']
//     })
//     const driveService=google.drive({
//       version:'v3',
//       auth
//     })

//     const fileMetaData={
//       'name':'snowplace.jpg',
//       'parents':[GOOGLE_API_FOLDER_ID]
//     }

//     const media={
//       MimeType:'image/jpg',
//       body:fs.createReadStream('./neymer.jpg')
//     }

//     const response=await driveService.files.create({
//       resource: fileMetaData,
//       media:media,
//       field:'id'
//     })
//     return response.data.id

//   }catch(err){
//     console.log('upload file error',err);
//   }
// }
             //start
             var drive = google.drive({version: 'v3',auth})
 
             var upload = multer({
               storage: GoogleDriveStorage({
                 drive: drive,
                 parents: GOOGLE_API_FOLDER_ID,
         
              
                 fileName: function (req, file, cb) {
                  
                   let filename = `test-${file.originalname}`;
                   cb(null, filename);
                  // console.log(file);
                 
                }
                
               })
               
             })

             //working link
             //https://drive.google.com/uc?export=view&id=1HiCrKrNIx_eCC1QO4JsekAGODgmlF2JS
            
          

             //working-start
// const storage = multer.diskStorage({
//   destination(req, file, callback) {
//     callback(null, './public/images');
//   },
//   filename(req, file, callback) {
//     callback(null, file.originalname);
//   },
// });
  
// const upload = multer({ storage: storage });
              //working-end
router.post('/post/upload', upload.single('file'), (req, res) => {
  try {
    // console.log(req.file,'pooppopopopopo')
    // console.log(req.file.fileName);
    // console.log(req.file.fileId);

    res.json(req.file.fileId)
  } catch (error) {
    res.json(error)
  }
})
    

/* GET users listing. */
router.get('/', function (req, res, next) {
  uploadFile().then(data=>{
    console.log(data)
  })
  res.send('userpage');
});
 
router.post('/signup', postSignup)
router.post('/login', login)

router.post('/post/upload')
router.post('/post', addpost)
router.post('/newComment', newComment)

router.get('/getComment/:id', getComment)
router.get('/feedpost', getpost)

router.put('/post/like/:id', likePost)

router.get('/connections/:id', connectionhelper)
router.get('/othersprofile/:id', visituser)
router.get('/userData/:id', getUserData)
router.post('/sendRequest/:senderId/:recieverId', sendRequest)

router.get('/connectionRequestList/:id', connectionRequestList)
router.post('/acceptConnection/:accepterId/:senderId', acceptConnection)

router.post('/createCourse', createCourse)
router.get('/getcourses', getcourses)

router.get('/getChapters/:id', getChapter)

router.get('/userDetail/:id', userDetail)

router.post('/updateProfile',updateProfile)
router.post('/deletePost/:id',deletePost)
router.post('/EditPost',Editpost)
router.post('/Reportsubmit',reportSubmit)

router.get('/getNotification/:userId',getNotification)
router.post('/updateReadNotification/:userId',notificationRead)
module.exports = router;
