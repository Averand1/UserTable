const mongoose = require('mongoose');

// Define a schema for the User collection
const userSchema = new mongoose.Schema({
  id: Number,
  gender: String,
  car: String,
  quote: String,
  first_name: String,
  last_name: String,
  email: String,
  income: Number,
  phone_price: Number,
  city: String
});

// Create a model for the User collection
const User = mongoose.model('User', userSchema);
module.exports = User;