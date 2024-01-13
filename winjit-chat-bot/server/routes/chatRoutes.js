const express=require("express")

const route=express.Router()
const {getDataByPrompt,getUserQaData}=require("../controller/getDataByPrompt")



route.post("/getData",getDataByPrompt);
route.get("/getUSerData",getUserQaData)




module.exports=route;