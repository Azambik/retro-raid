const { Schema, model} = require('mongoose');     
const dateFormat = require('../utils/dateFormat');

const forumSchema = new Schema(
    {
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 64
    },
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