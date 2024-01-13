const mongoose=require("mongoose");

const QuestionAnswerSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});


const QA = mongoose.model("qamodel", QuestionAnswerSchema);


module.exports=QuestionAnswerSchema