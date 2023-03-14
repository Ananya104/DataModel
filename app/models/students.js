var mongoose = require('mongoose');
module.exports=mongoose.model('students',{name:{type:String,default:''}});