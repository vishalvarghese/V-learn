var express = require('express');
const { postSignup, login, addpost, getpost, newComment, getComment, likePost, visituser } = require('../controller/usercontroller/usercontoller');
var router = express.Router();
var multer =require('multer');
const { allusers } = require('../controller/admincontroller/admincontroller');

const storage = multer.diskStorage({
  destination(req, file, callback) {
      callback(null, './public/images');
  },
  filename(req, file, callback) {
      callback(null,file.originalname);
  },
});

const upload = multer({ storage:storage});

router.post('/post/upload', upload.single('file'), (req, res) => {
  try {
      res.json("success")
  } catch (error) {
      res.json(error)
  }
})


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('userpage');
});

router.post('/signup',postSignup)
router.post('/login',login)

router.post('/post/upload')
router.post('/post',addpost)
router.post('/newComment',newComment)

router.get('/getComment/:id',getComment)
router.get('/feedpost',getpost)

router.put('/post/like/:id',likePost)

router.get('/connections',allusers)
router.get('/othersprofile/:id',visituser)
module.exports = router;
