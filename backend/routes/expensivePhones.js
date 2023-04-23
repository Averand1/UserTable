const express = require('express');
const User = require('../models/User.model');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.find({
      gender: "Male",
      phone_price: {$gt: 10000 }
    }).exec();
    res.status(200).send(users);
  } catch (error) {
    res.status(404).send({message: 'Error'})
  }

});

module.exports = router;