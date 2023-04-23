const express = require('express');
const User = require('../models/User.model');

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await User.find({
    car: { $in: ['BMW', 'Mercedes-Benz', 'Audi'] },
    email: { $not: /\d/ }
  }).exec();
  res.send(users);
});

module.exports = router;