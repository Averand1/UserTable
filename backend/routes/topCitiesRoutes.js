const express = require('express');
const User = require('../models/User.model');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const cities = await User.aggregate([
      {
        $group: {
          _id: '$city',
          count: { $sum: 1 },
          avg_income: { $avg: '$income' }
        }
      },
      {
        $sort: { count: -1 }
      },
      {
        $limit: 10
      }
    ]).exec();
    res.status(200).send(cities);
  } catch (error) {
    res.status(404).send({message: 'Error'})
    
  }

});

module.exports = router;