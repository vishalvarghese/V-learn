var express = require('express');
const { postadminlogin, allusers, blockuser, unblockuser, getReport, adminCourselist, blockPost, unblockPost, adminGetPost } = require('../controller/admincontroller/admincontroller');
const check = require('../middleware/authjwt');
var router = express.Router();

/* GET home page. */

router.post('/adminlogin',postadminlogin)

router.get('/adminuserlist',check,allusers)

router.post('/blockuser/:id',blockuser)
router.post('/unblockuser/:id',unblockuser)

router.get('/adminpostlist',adminGetPost)
router.get('/adminReportlist',getReport)
router.get('/adminCourselist',adminCourselist)

router.post('/blockPost/:id',blockPost)
router.post('/unblockPost/:id',unblockPost)
module.exports = router;
