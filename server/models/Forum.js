const { Schema, model} = require('mongoose');
const subforumSchema = require('./SubForum').schema;     
const dateFormat = require('../utils/dateFormat');

const forumSchema = new Schema(
    {
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
    subforum: [subforumSchema]
},
{
    toJSON: {
        getters: true
    }
});

forumSchema.virtual('subforumCount').get(function(){
    return this.subforum.length;
});

const Forum = model('Forum', forumSchema);

module.exports = Forum;