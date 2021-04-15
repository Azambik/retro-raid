const faker = require('faker');
const db = require('./connection');
const { User, Forum, Post} = require('../models');

db.once('open', async () => {
   
  Promise.all([/*userSeed(),seedForum(),*/seedPost()])
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

const seedPost = async function() {
  await Post.deleteMany({});
 const post = [
   {name: "introductions"},
   {name: "console"},
   {name: "games"},
   {name: "hardware/mods"},
   {name: "reproductions"},
   {name: "game jounal"},
   {name: "RP(role play)"}
 ]
  const postData = [
    {
      name: "test post 1",
      postText: "this is a test post for into",
      forum: post[0]._id,
      username: "thepandaofnom"
    },
    {
      name: "test post 2",
      postText: "this is a test post for console",
      forum: post[1]._id,
      username: "thepandaofnom"
    },
    {
      name: "test post 3",
      postText: "this is a test post for games",
      forum: post[2]._id,
      username: "thepandaofnom"
    },
    {
      name: "test post 4",
      postText: "this is a test post for hardware/mods",
      forum: post[3]._id,
      username: "thepandaofnom"
    },
    {
      name: "test post 5",
      postText: "this is a test post for reproductions",
      forum: post[4]._id,
      username: "thepandaofnom"
    },
    {
      name: "test post 6",
      postText: "this is a test post for game jounal",
      forum: post[5]._id,
      username: "thepandaofnom"
    },
    {
      name: "test post 7",
      postText: "this is a test post for RP",
      forum: post[6]._id,
      username: "thepandaofnom"
    }
  ]
  return Post.collection.insertMany(postData);
}