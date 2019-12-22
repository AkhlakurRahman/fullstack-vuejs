const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  categories: {
    type: [String],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  messages: [
    {
      messageBody: {
        type: String,
        required: true
      },
      messageOwner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
      },
      messagePostingDate: {
        type: Date,
        default: Date.now
      }
    }
  ],
  // path === createdBy
  // ref ('User) === Model
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Photo', PhotoSchema);
