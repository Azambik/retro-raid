const {Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const replySchema = new Schema(
    {
        replyid:{
            type: Schema.Types.ObjectId,
            //give the ability to query through 
            default: () => new Types.ObjectId()
        },
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