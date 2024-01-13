const express=require("express")

const route=express.Router()



route.get("/getData",getDataByPrompt);




module.exports=route;