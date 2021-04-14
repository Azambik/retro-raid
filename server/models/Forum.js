const { Schema, model} = require('mongoose');


const forumSchema = new Schema(
    {
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 64
    }
});

const Forum = model('Forum', forumSchema);

module.exports = Forum;