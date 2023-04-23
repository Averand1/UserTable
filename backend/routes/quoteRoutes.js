const express = require('express');
const User = require('../models/User.model');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.find({
      last_name: /^M/,
      quote:  /.{16,}/ ,
    }).exec();
    res.status(200).send(users);
  } catch (error) {
    res.status(404).send({message: 'Error'})
  }

});

module.exports = router;