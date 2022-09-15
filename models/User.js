const { Schema, model } = require('mongoose');


// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trimmed: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      email: true,
      max_length: 50,
    },
    friends: [
      { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
    ],
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thoughts',
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
