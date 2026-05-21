const joi= require("joi");

const loginSchema = joi .object({
    email:joi.string().email().require(),
    password:joi.string().min(6).require(),
})

module.exports= loginSchema;
