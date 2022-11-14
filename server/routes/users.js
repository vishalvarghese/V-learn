var express = require('express');
const { postSignup, login } = require('../controller/usercontroller/usercontoller');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('userpage');
});

router.post('/signup',postSignup)
router.post('/login',login)

module.exports = router;
