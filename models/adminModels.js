const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
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
    products: {
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
})

const User = mongoose.model("Admin", adminSchema)

module.exports = User;