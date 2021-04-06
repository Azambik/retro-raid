const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    image: {
        //should be updated latter to store the actual image and then recall it without third party hosting. 
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: 0.00
    },
    shipping: {
        type: Number,
        min: 0.00
    },
    shippingMethod: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        min:0,
        default: 0
    },
    condition: {
        type: String,
        required: true,
        trim: true
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;