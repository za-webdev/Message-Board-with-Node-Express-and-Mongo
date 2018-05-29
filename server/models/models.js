let mongoose = require('mongoose');

let Schema = mongoose.Schema;

// define Post Schema
let PostSchema = new mongoose.Schema({
name:{type:String,required:true},
post: {type: String, required: true }, 
comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true });
// define Comment Schema
let CommentSchema = new mongoose.Schema({
name:{type:String,required:true},
_post: {type: Schema.Types.ObjectId, ref: 'Post'},
comment: {type: String, required: true }
}, {timestamps: true });
// set our models by passing them their respective Schemas

mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);
// store our models in variables

let Post = mongoose.model('Post');
let Comment = mongoose.model('Comment');