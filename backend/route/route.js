const express=require('express')
const signup=require('../models/signup')
const router=express.Router()
router.post('/signup',(req,res)=>{
    const user = new signup({
        fullName:req.body.fullName,
        mobile:req.body.mobile,
        email:req.body.email,
        password:req.body.password
    })
    user.save()
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.json(err)
    })    
})

router.post('/signin',async (req,res)=>{    
    // console.log(req.body)
    await signup.find({mobile:req.body.mobile},{_id:0,__v:0,date:0},(err,result)=>{
        if(err)
            console.log("error")
        else{
            // console.log(result)
            if (result.length && result[0].password==req.body.password){
                signup.find({},{_id:0,__v:0,date:0},(err,data)=>{
                    if(err)
                        console.log("Error")
                    else
                    {
                        // console.log(data)
                        res.send(data)

                    }
                })
            }
            else{
                res.send("Invalid details")
            }
        }
    })    
})
module.exports=router