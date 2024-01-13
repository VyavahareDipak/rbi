const mongoose=require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    userName : {
      type:String ,
      required:true,
      trim:true
  },
  email:{
      type:String,
      required : true,
      trim:true,
  },
  password:{
      type:String,
      required:true,
      trim:true
  }, 
    questionsAndAnswers: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "QA",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports= User;
