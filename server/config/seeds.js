const db = require('./connection');
const { User /*,Forum, Post, Reply, Product, Orders*/  } = require('../models');

db.once('open', async () => {

    await User.deleteMany();

    await User.create({
        firstName: 'Andrew',
        lastName: 'Zambik',
        userName: 'Thepandaofnom',
        email: 'Andrewjzambik@yahoo.com',
        password: 'Nephilim117'
    });

    /*await User.create({
        firstName: 'Aleister',
        lastName: 'Crowley',
        userName: 'Acrowly',
        email: 'aleistercrowly@yahoo.com',
        password: 'password123'
    });*/
    console.log('users seeded')

    process.exit(0);

})