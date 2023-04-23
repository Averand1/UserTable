const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const app = express();
const port = 5000;
const brandRoutes = require('./routes/brandRoutes');
const maleRoutes = require('./routes/maleRoutes');
const quoteRoutes = require('./routes/quoteRoutes');
const topCitiesRoutes = require('./routes/topCitiesRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors')
const User = require('./models/User.model')
require('dotenv').config()
app.use(cors())

// Connect to the MongoDB database
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB', err));

  // fs.readFile('sample_data.json', 'utf8', (err, data) => {
  //   if (err) throw err;
  
  //   const users = JSON.parse(data);
  
  //   const modifiedUsers = users.map(user => ({
  //     ...user,
  //     income: parseFloat(user.income.replace('$', '')),
  //     phone_price: Number(user.phone_price),
  //   }));
  
  //   User.create(modifiedUsers)
  //     .then(() => {
  //       console.log('Data inserted successfully!');
  //       mongoose.connection.close();
  //     })
  //     .catch(err => {
  //       console.error('Error inserting data:', err);
  //       mongoose.connection.close();
  //     });
  // });
    
app.use('/api/brands', brandRoutes);
app.use('/api/males', maleRoutes);
app.use('/api/quotes', quoteRoutes);
app.use('/api/topcities', topCitiesRoutes);
app.use('/api/users', userRoutes);


// Start the server
app.listen(port, () => console.log(`Server listening on port ${port}`));