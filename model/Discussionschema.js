const mongoose = require('mongoose')
const conn=require('../db/conn')
const DiscussionSchema= new mongoose.Schema({
    owner: { type: String, required: true },
    owner_id: { type: String, required: true },
    question: { type: String, required: true },
    likes: { type: Array, default: [] },
    comments:[    
        {
            comment: { type: String},
            username:{type:String}
        }
    ],
    team_id:  {type: String, required: true}
})
const Discussion= conn.model('DISCUSSION',DiscussionSchema);
module.exports =Discussion;    