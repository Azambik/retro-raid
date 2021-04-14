const faker = require('faker');
const db = require('./connection');
const { User /*,Forum, Post, Reply, Product, Orders*/  } = require('../models');

db.once('open', async () => {
    await User.deleteMany({});
  
    // create user data
    const userData = [];
  
    for (let i = 0; i < 50; i += 1) {
      const userName = faker.internet.userName();
      const email = faker.internet.email(userName);
      const password = faker.internet.password();
  
      userData.push({ userName, email, password });
    }
  
    const createdUsers = await User.collection.insertMany(userData);


    console.log('Process complete')

    process.exit(0);

})