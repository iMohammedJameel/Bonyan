const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "email is required"],
        },
        password: {
            type: String,
            minlength: [6, "password must be 6 char"],
            select: false,
        },
    },
    { timestamps: true }
);

adminSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
});

adminSchema.method.comparePassword =async function (matched) {
 return await bcrypt.compare(matched,this.password);   
};

const Admin= mongoose.model("Admin",adminSchema);
module.exports=Admin;

