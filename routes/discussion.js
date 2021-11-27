const express=require('express');
const router=express.Router();
require('../db/conn');
const mongoose = require('mongoose')
const Pusher=require('pusher');
const Discussion = require("../model/Discussionschema.js")
const pusher = new Pusher({
    appId: "1298742",
    key: "efe402f7959d9ab3433e",
    secret: "308f96ac809d960978fc",
    cluster: "ap2",
    useTLS: true
  });  
router.post("/discussion",async(req,res) => {
    try{
        const{owner,owner_id,question,team_id}=req.body;
        if(!owner||!owner_id||!question||!team_id){
            return res.status(401).send("invalid credentails")
        }
        else{
            const discussion=new Discussion({owner,owner_id,question,team_id,likes:[],comments:[]});
            await discussion.save();
            pusher.trigger("questions","insertion",{
                _id:discussion._id,
                team_id:team_id,
                owner:owner,
                question:question,
                owner_id:owner_id,
                likes:[],
                comments:[]
            })      
            return res.status(200).json("post created");
        }
    }
    catch(err){
        console.log(err);
    }
})
router.get("/discussion/:teamid",async(req,res)=>{
    try{
     const teamid=req.params.teamid;
     if(!teamid){
         return res.status(404).json({message: "Team not found"});
     }
     else{
             const discussion= await Discussion.find({team_id:teamid});
             return res.status(200).json(discussion);
         
     }
    }
    catch(err){
       console.log(err);
    }
})
router.put("/like",async(req,res)=>{
    try{
    const {id,userid,teamid}=req.body;
    let result = await Discussion.findByIdAndUpdate(id, {$push: {likes:userid}}, {new: true})
    res.redirect(303,`/discussion/${teamid}`)
}
    catch(err){
      console.log(err);
      return res.status(400).json({message:err})
   }
})
router.put("/dislike",async(req,res)=>{
    try{
    const {id,teamid,userid}=req.body;
    let result = await Discussion.findByIdAndUpdate(id, {$pull: {likes:userid}}, {new: true})
    res.redirect(303,`/discussion/${teamid}`);
}
catch(err){
    console.log(err);
}
})
router.put("/comment",async(req,res)=>{
    try{
        const {postid,comment,teamid,username}=req.body;
        if(!comment||!postid||!teamid||!username){
            return res.status(404).json({message:"error"});
        }
        const discussion= await Discussion.findOne({_id:postid});
        discussion.comments.push({comment,username});
        await discussion.save();
        res.redirect(303,`/discussion/${teamid}`);
    }
    catch(err){
        console.log(err);
    }
})
module.exports = router;