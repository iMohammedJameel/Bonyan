const admin= require("../model/Admin.model");

const adminSchema = require("./vaildation/admin.validation");

const jwt =require("jsonwebtoken");

const signToken = (id)=>{
    return jwt.sign({id}, process.env.SK_JWT, {expiresIn:"7d"});
};
