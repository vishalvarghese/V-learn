var express = require('express');
const { postadminlogin } = require('../controller/admincontroller/admincontroller');
var router = express.Router();

/* GET home page. */

router.post('/adminlogin',postadminlogin)

module.exports = router;
