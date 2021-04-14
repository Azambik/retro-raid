const {Schema, model } = require('mongoose');
//.schema is used to export a schema to another 
const replySchema = require('./Reply').schema;
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
    {
        postid:{
            type: Schema.Types.ObjectId,
            //give the ability to query through 
            default: () => new Types.ObjectId()
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
        forum: {
            type: Schema.Types.ObjectId,
            ref: 'Forum',
            required: true
    
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