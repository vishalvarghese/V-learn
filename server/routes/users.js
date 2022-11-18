var express = require('express');
const { postSignup, login, addpost, getpost } = require('../controller/usercontroller/usercontoller');
var router = express.Router();
var multer =require('multer')

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

router.get('/feedpost',getpost)
module.exports = router;
