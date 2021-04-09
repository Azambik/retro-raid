const {Schema, model } = require('mongoose');
//.schema is used to export a schema to another 
const replySchema = require('./Reply').schema;
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
    {
        category:{
            //catagory number will be used to decide wether a post belongs to one forum or another.
            type: Number
        },
        postText: {
            type: String,
            required: 'You need to enter post text!',
            minlength: 1,
            maxlength: 2000
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get:timestamp => dateFormat(timestamp)
        },
        username:{
            type: String,
            required: true
        },
        reply: [
            {
                type: Schema.Types.ObjectId,
                ref: 'reply'
            }
        ]
    },
    {
        toJson: {
            getters: true
        }
    }
);

postSchema.virtual('replyCount').get(function() {
    return this.reply.length;
});

const Post = model('Post', postSchema);

module.exports = Post;