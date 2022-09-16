const { Schema, model} = require('mongoose');


const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    reaction: [{
      reactionId:  {
        type: Schema.Types.ObjectId,
      },
      reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
      },
      username: {
        type: String,
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
  return this.reaction.length;
});


const Thought = model('Thoughts', thoughtsSchema);

module.exports = Thought;
