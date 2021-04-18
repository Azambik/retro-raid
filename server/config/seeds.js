const faker = require('faker');
const db = require('./connection');
const { User, Forum, Post} = require('../models');
const { getMaxListeners } = require('./connection');

db.once('open', async () => {
  await User.deleteMany();

  const user = await User.insertMany([
    {
      userName: "thepandaofnom",
      email: "thepandaofnom@yahoo.com",
      password: "Nephilim117",

    },
    {
      userName: "TheDungeonBoss",
      email: "thedungeonboss@gmail.com",
      password: "Pull the trigger and the nightmare stops"
    }
  ]);
  console.log('users seeded')

  await Forum.deleteMany();

  const forum = await Forum.insertMany([
    {name: 'Introductions'},
    {name: 'Consoles'},
    {name: 'Games'},
    {name: 'Hardware/Mods'},
    {name: 'Hardware/Mods'},
    {name: 'Game Journal'},
    {name: 'Role Play'},
    {name: 'Classifieds'}
 ]);
 console.log('forum seeded')

 await Post.deleteMany();
 const post = await Post.insertMany([
  {
    name: "test post 1",
    postText: "this is a test post for into",
    forum: forum[0]._id,
    username: "thepandaofnom"
  },
  {
    name: "test post 2",
    postText: "this is a test post for console",
    forum: forum[1]._id,
    username: "thepandaofnom"
  },
  {
    name: "test post 3",
    postText: "this is a test post for games",
    forum: forum[2]._id,
    username: "thepandaofnom"
  },
  {
    name: "test post 4",
    postText: "this is a test post for hardware/mods",
    forum: forum[3]._id,
    username: "thepandaofnom"
  },
  {
    name: "test post 5",
    postText: "this is a test post for reproductions",
    forum: forum[4]._id,
    username: "thepandaofnom"
  },
  {
    name: "test post 6",
    postText: "this is a test post for game jounal",
    forum: forum[5]._id,
    username: "thepandaofnom"
  },
  {
    name: "test post 7",
    postText: "this is a test post for RP",
    forum: forum[6]._id,
    username: "thepandaofnom"
  }
 ])
 console.log("post seeded");
 process.exit();
});