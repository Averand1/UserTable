const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
const noDigitsRoutes = require('./routes/noDigits');
const expensivePhoneRoutes = require('./routes/expensivePhones');
const quoteRoutes = require('./routes/quoteRoutes');
const topCitiesRoutes = require('./routes/topCitiesRoutes');
const lowIncomeRoutes = require('./routes/lowIncome');
const cors = require('cors')
const User = require('./models/User.model')
require('dotenv').config()
app.use(cors())

// Connect to the MongoDB database
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB', err));


app.use('/api/nodigits', noDigitsRoutes);
app.use('/api/expensive', expensivePhoneRoutes);
app.use('/api/quotes', quoteRoutes);
app.use('/api/topcities', topCitiesRoutes);
app.use('/api/lowincome', lowIncomeRoutes);


// Start the server
app.listen(port, () => console.log(`Server listening on port ${port}`));