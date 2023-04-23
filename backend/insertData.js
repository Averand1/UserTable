  const fs = require('fs')
  const importData = () => {fs.readFile('sample_data.json', 'utf8', (err, data) => {
    if (err) throw err;
  
    const users = JSON.parse(data);
  
    const modifiedUsers = users.map(user => ({
      ...user,
      income: parseFloat(user.income.replace('$', '')),
      phone_price: Number(user.phone_price),
    }));
  
    User.create(modifiedUsers)
      .then(() => {
        console.log('Data inserted successfully!');
        mongoose.connection.close();
      })
      .catch(err => {
        console.error('Error inserting data:', err);
        mongoose.connection.close();
      });
  });
  }

  export default importData;