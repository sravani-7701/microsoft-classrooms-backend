var nodemailer = require('nodemailer');
const express=require('express');
const router=express.Router();
const mongoose = require('mongoose')
require('../db/conn');
const Team= require("../model/Teamschema.js");
var ObjectId = require('mongodb').ObjectId;
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rosra0704@gmail.com',
    pass: 'panchukk'
  }
});
router.post("/calls",async(req,res) => { 
  try{
    const {id,url}=req.body;
    const objectId =mongoose.Types.ObjectId(id);
     const team= await Team.findOne({_id:objectId});
    const students=team.StudentEmail;
    const msg=`<p>Dear Students. Class was scheduled now for ${team.name}.Join immediately.</p>
                   <p>Click on the link to join <a href=${url}> Click here </a></p>
                   <p>If you are unable join.copy and paste the link below in broswer to join.</p>
                   <p>${url}</p>`
    for(var i=0; i< students.length; i++){
        var mailOptions = {
            from: 'rosra0704@gmail.com',
            to: `${students[i]}`,
            subject: 'Class Link',
            html:`${msg}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        }
        return res.send("ok");
    }
    catch(error){console.log(error);}
})
module.exports=router