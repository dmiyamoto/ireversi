const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  accessToken: String,
  userId: String,
  username: String,
});

module.exports = mongoose.model('UserModel', UserSchema);
