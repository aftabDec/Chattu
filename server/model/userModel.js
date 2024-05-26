 const mongoose = require("mongoose");

  const Schema = mongoose.Schema;

  const userSchema = new Schema(
    {
       fullName:{
        type:String,
        required:true
    },
    username:{
      type:String,
      required:true,
      unique:true
    },
    password:{
        type:String,
        required:true
    },
    profilePhoto:{
        type:String,
        default:""
    },
    gender:{
        type:String,
        enum:["male", "female"],
        required:true
      },
    },
    {
      timestamps: true, // Automatically add createdAt and updatedAt fields
    }
  );

  const User = mongoose.model("User", userSchema);

  module.exports = User;