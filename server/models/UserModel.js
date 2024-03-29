const mongoose = require('mongoose');
const Counselor = require("./CounsellerModel");

const UserSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    phonenumber:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true,
    },
    addictType:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
    },
    isCounselor:{
        type:Boolean,
        default:false,
        required:true,
    },
    TaskScore:{
        type:Number,
        default:0,
        required:true
    },
    DailyTaskDone:{
       Level1:{
        type:Number,
        default:0,
        required:true
       },
       Level2:{
        type:Number,
        default:0,
        required:true
       },
       Level3:{
        type:Number,
        default:0,
        required:true
       }
    },
    counselorDetails:{
        CounselorLicenseNumber:{
            type:Number,
        },
        Specialization:{
            type:String,
        },
        Experience:{
            type:Number,
        },
        WorkingIn:{
            type:String,
        },
        Portfolio:{
            type:String
        }
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
},{timestamps:true});

module.exports = new mongoose.model('User',UserSchema);