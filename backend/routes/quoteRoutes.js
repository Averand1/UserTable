const express = require('express');
const User = require('../models/User.model');

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await User.find({
    last_name: /^M/,
    quote:  /.{16,}/ ,
  }).exec();
  res.send(users);
});

module.exports = router;