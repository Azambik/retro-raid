const faker = require('faker');
const db = require('./connection');
const { User, Forum} = require('../models');

db.once('open', async () => {
   
  Promise.all([userSeed(),seedForum()])
  .then(values => {
    console.log(values);
    console.log("Process Complete");
    process.exit(0);
  })
  
  
})

const userSeed = async function() {
  await User.deleteMany({});
  
  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const userName = faker.internet.userName();
    const email = faker.internet.email(userName);
    const password = faker.internet.password();

    userData.push({ userName, email, password });
  }
  return User.collection.insertMany(userData);

}
const seedForum = async function() {
  await Forum.deleteMany({});
  const forumData = [
    {
      name: 'Introductions'
    },
    {
      name: 'Consoles'
    },
    {
      name: 'Games'
    },
    {
      name: 'Hardware/Mods'
    },
    {
      name: 'Reproductions'
    },
    {
      name: 'Game Journal'
    },
    {
      name: 'Role Play'
    },
    {
      name: 'Classifieds'
    }

  ]
  return Forum.collection.insertMany(forumData);

}