const express = require('express');
const User = require('../models/User.model');

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await User.find({
    gender: "Male",
    phone_price: {$gt: 10000 }
  }).exec();
  res.send(users);
});

module.exports = router;