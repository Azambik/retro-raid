const mongoose = require ('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;



const userSchema = new Schema({ 
    firstName: {
        type: String,
        require: true,
        trim: true
    },
    lastName: {
        type: String,
        Required: true,
        trim: true
    },
    userName: {
        type: String,
        Required: true,
        trim: true,
        unique:true
    },
    email: {
        type: String,
        Required: true,
        unique: true 
    },
    password: {
        type: String,
        Required: true,
        minlength:5
    },
    orders: [ order.schema]
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

  // compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };

  const User = mongoose.model('User', userSchema);
  
  module.exports = User