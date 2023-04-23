const express = require('express');
const User = require('../models/User.model')

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await User.find({
    income: { $lt: 5 },
    car: { $in: ['BMW', 'Mercedes-Benz'] }
  }).exec();
  res.send(users);
});

module.exports = router;