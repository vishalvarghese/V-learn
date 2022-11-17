var express = require('express');
const { postadminlogin, allusers, blockuser, unblockuser } = require('../controller/admincontroller/admincontroller');
const check = require('../middleware/authjwt');
var router = express.Router();

/* GET home page. */

router.post('/adminlogin',postadminlogin)

router.get('/adminuserlist',check,allusers)

router.post('/blockuser/:id',blockuser)
router.post('/unblockuser/:id',unblockuser)
module.exports = router;
