const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cart: {
        type: Array,
        required: true,
        default: []
    },
    orders: {
        type: Array,
        required: true,
        default: []
    },
    contact: {
        type: Number,
        required: true
    },
    picture: {
        type: String,
        required: true,
        default: ""
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
})

const User = mongoose.model("User", userSchema)

module.exports = User;