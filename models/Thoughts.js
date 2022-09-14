const { Schema, Types } = require('mongoose');


const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    username: {
      type: string,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    reactions: [{
      reactionId:  {
        type: string,
      },
      reactionBody: {
        type: string,
        required: true,
        maxlength: 280,
      },
      username: {
        type: string,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
    }
  }],
  },
  {
    toJSON: {
      getters: true,
    },
  }

);

thoughtsSchema.virtual('reactionsCount').get(function () {
  return this.reactions.length;
});

module.exports = thoughtsSchema;
