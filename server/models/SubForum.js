const { Schema, model} = require('mongoose');
const postSchema = require('./Post').schema;     
const dateFormat = require('../utils/dateFormat');

const subforumSchema = new Schema(
    {
    category:{
            //catagory number will be used to decide wether a post belongs to one forum or another.
            type: Number
        },
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 64
    },
    createdAt:{
        type: Date,
        Default: Date.now,
        get: timestamp => dateFormat(timestamp)
    },
    post: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
},
{
    createdBy:{
        type: String,
        require: true,
    }
},
{
    toJSON: {
        getters: true
    }
});

subforumSchema.virtual('postCount').get(function(){
    return this.post.length;
});

const Subforum = model('Subforum', subforumSchema);

module.exports = Subforum;