const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
  username: {
    type: String,
    required: [true, ' must have a username'],
  },

  email: {
    type: String,
  },
  birthDay: {
    type: Date,
  },
  gender: String,
  isOther: {
    type: Boolean,
    default: false,
  },
  otherPerson: {
    type: String,
    default: '',
  },
});

const userModel = mongoose.model('reminder', userSchema);
module.exports = userModel;
