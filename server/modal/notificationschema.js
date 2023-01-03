const mongoose = require ('mongoose')
const {Schema} = mongoose;
const user=require('./userschema')
const NotificationModel = new Schema({


    userId : {
        type : String
    },
    notification:[{
        user : {

            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: user

        },
        desc : {
            type:String
        },
        status:{
            type:String,
            default: "true"
        }
        
},{timeStamps:true}]

})

const notificationSchemma = mongoose.model('notification', NotificationModel)

module.exports= notificationSchemma