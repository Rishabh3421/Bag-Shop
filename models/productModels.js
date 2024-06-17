const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    discount:{
        type: Number,
        required: true,
        default: 0
    },
    bgcolor:{
        type: String,
        required: true
    },
    panelcolor:{
        type: String,
        required: true
    },
    textcolor:{
        type: String,
        required: true
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

