const { Schema, model} = require('mongoose');
const postSchema = require('./Post').schema;     
const dateFormat = require('../utils/dateFormat');

const subforumSchema = new Schema(
    {
        subformid: {
            type: Schema.Types.ObjectId,
            //give the ability to query through 
            default: () => new Types.ObjectId()
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
    post: [ postSchema ]
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