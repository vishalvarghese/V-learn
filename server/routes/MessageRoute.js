const express=require('express');
const { addMessage, getMessages } = require('../controller/chatcontroller/MessageController');

const router=express.Router()

router.post('/',addMessage)
router.get('/:chatId',getMessages)
// 26.32

module.exports = router;