const mongoose = require('mongoose');
const becrypt = require("becrypt");
const { type } = require('node:os');
const adminSchema = new mongoose.Schema({
    username: {
        type:String,
        required : [true,"Username Is required"]
        
    },
    email : {
        type:String,
        required : [true,"Username Is required"]
    },
    password :{
        type:String,
        required : [true,"Username Is required"],
        minlength :[6,"password Must be 6 char"]
    },


},{timestamps: true});

adminSchema.pre("save", async function(next) {

    if(!this.isModified("password")) return next();
    this.password = await becrypt.hash(this.password ,10)

});
adminSchema.method.comparepassword = async function (mtachedpassword) {
    return await becrypt.compare(mtachedpassword , this.password)
};

const Admin = mongoose.model("Admin",adminSchema);
module.exports = Admin;
    
   