const QA=require("../model/qaSchema")
const User=require("../model/userSchema")

const getDataByPrompt=async(req,res,next)=>{
    try {

        const {userId}=req.param
        const {prompt}=req.body

        // return res.send(prompt)
        if(prompt){


            // call to pai

            // const data=await

            if(data){


                // create QA 

                const createQA=await QA.create({
                    question:prompt,
                    answer:data
                })

                if(createQA){
                     await createQA.save()

                    //  cpush data into user QA array
                    const userData=await User.findById(userId)

                    if(userData){
                        userData.questionsAndAnswers.push(createQA)
                    }


                }




                return res.status(201).json({success:true,message:"get data for promt",data})
            }
            

        }

        return res.status(400).json({success:false,message:"please provide the question"})
        
    } catch (error) {
        console.log(error.mssage)
    }
}



const getUserQaData=async(req,res,next)=>{
    try {
        
    } catch (error) {
        console.log(error.message)
    }
}


module.exports={getDataByPrompt,getUserQaData}