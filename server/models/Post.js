const {Schema, model } = require('mongoose');
const replySchema = require('./Reply');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
    {
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
        reply: [replySchema]
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