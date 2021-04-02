
const express = require('express')
const router = express.Router()
const signupTemplatecopy = require('../models/Signup_model')
const signupTemplatecopy2 = require('../models/Signup_model_customer')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')
const { response } = require('express')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')


/*router.get('/cookie' , (req,res) => {
    res.setHeader('Set-Cookie','newUser=true')
    res.send('got the cookies')
})*/
router.get('/signupProfessional',async (req,res) => {
    
    let loginemail = req.query.loginEmail.toString()
    let  loginpassword=req.query.loginPassword.toString()
    signupTemplatecopy.findOne({
        'email': loginemail
    }
    ).exec((err,user) =>{
        if (err) {
            console.log('error getting users');
        }else{
            if (!user) {
                console.log("user dosent exist!!");
                res.send('-2')
            }else(bcrypt.compare(loginpassword,user.password,(error,response) => {
                if (error) {
                    console.log(error);
                    
                }else{
                    if (response) {
                        console.log('login successfull');
                        var id = user._id
                        var type = "professional"                     
                        var a={
                            id : id,
                            type : "professional"
                        }        
                        var token = jwt.sign({id:id,type:"professional"},process.env.PRIVATE_KEY_JWT,{expiresIn:24*60*60})             
                        res.send(token);                       
                        
                    }else{
                        
                        console.log("wrong password!!");
                        res.send('-1')
                        
                        
                    }
                
            }})) 
            
            
            
        }
    })

    
    
})
router.get('/signupCustomer',async (req,res) => {
    console.log(req.query.loginEmail);
    let loginemail = req.query.loginEmail.toString()
    let  loginpassword=req.query.loginPassword.toString()
    signupTemplatecopy2.findOne({
        'email': loginemail
    }
    ).exec((err,user) =>{
        if (err) {
            console.log('error getting users');
        }else{
            if (!user) {
                console.log("user dosent exist!!");
                res.send('-2')
            }else(bcrypt.compare(loginpassword,user.password,(error,response) => {
                if (error) {
                    console.log(error);
                    
                }else{
                    if (response) {
                        console.log('login successfull');
                        var id = user._id
                        var type = "customer"                      
                        var a={
                            id : id,
                            type : "customer"
                        }        
                        var token = jwt.sign({id:id,type:"customer"},process.env.PRIVATE_KEY_JWT,{expiresIn:24*60*60})             
                        res.send(token); 
                    }else{
                        console.log('wrong password!!');
                        res.send('-1')
                    }
                
            }})) 
            
            
            
        }
    })

    
    
})

router.post('/signupProfessional',async (request,response) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securedPassword = await bcrypt.hash(request.body.password,saltPassword)

    const signedupUser = new signupTemplatecopy({
        fullName:request.body.fullName,
        email:request.body.email,
        phoneNo:request.body.phoneNo,
        gender:request.body.gender,
        occupation:request.body.occupation,
        location:request.body.location,
        password:securedPassword,
        experience:request.body.experience,
    })
    signedupUser.save()
    .then(data => {
        return response.status(200).json(data)
       // response.send('ok')
    })
    .catch(error => {
        
        return response.status(404).json(error)
        
    })
})
router.post('/signupCustomer',async (request,response) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securedPassword = await bcrypt.hash(request.body.password,saltPassword)

    const signedupUser = new signupTemplatecopy2({
        fullName:request.body.fullName,
        email:request.body.email,
        phoneNo:request.body.phoneNo,
        gender:request.body.gender,
        
        password:securedPassword
        
    })
    signedupUser.save()
    .then(data => {
        return response.status(200).json(data)
        //return response.send('ok')
    })
    .catch(error => {
        return response.status(404).json(error)
        
    })
})



module.exports = router;