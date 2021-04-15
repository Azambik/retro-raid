const {Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const replySchema = new Schema(
    {
        replyText: {
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
        post: {
            type: Schema.Types.ObjectId,
            ref: 'Post',
            required: true
    
        },
        username:{
            type: String,
            required: true
        },
    },
    {
        toJson: {
            getters: true
        }
    }
);

const Reply = model('Reply', replySchema);

module.exports = Reply;