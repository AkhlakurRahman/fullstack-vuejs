const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: false
  },
  favorites: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: 'Photo'
  },
  joiningDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);
