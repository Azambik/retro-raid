const db = require('./connection');
const { User, Forum, Post, Reply, Product, Orders  } = require('../models');

db.once('open', async () => {

    /*await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'SNES console US',
      description:
        'Compleate console with controller, power, one game. no box',
      image: 'https://images-na.ssl-images-amazon.com/images/I/61Om%2Bg24YiL._SL1500_.jpg',
      price: 39.99,
      shipping: 14.99,
      shippingMethod: 'UPS',
      quantity: 1,
      condition: 'used'

    },
    {
        name: 'SNES CIB',
        description:
          'Compleate console in box. this console is in perfect condition',
        image: 'https://images-na.ssl-images-amazon.com/images/I/61Om%2Bg24YiL._SL1500_.jpg',
        price: 149.99,
        shipping: 14.99,
        shippingMethod: 'UPS',
        quantity: 1,
        condition: 'used'
  
      },
  ]);
    await User.deleteMany();*/

    await User.create({
        firstName: 'Andrew',
        lastName: 'Zambik',
        userName: 'Thepandaofnom',
        email: 'Andrewjzambik@yahoo.com',
        password: 'Nephilim117',
        orders: [
            {
                products: [products[0]._id]
            }
        ]
    });

    await User.create({
        firstName: 'Aleister',
        lastName: 'Crowley',
        userName: 'Acrowly',
        email: 'aleistercrowly@yahoo.com',
        password: 'password123'
    });
    console.log('users seeded')

})