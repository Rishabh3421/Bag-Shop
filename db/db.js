// db.js
const mongoose = require('mongoose');
const process = require('process');
const dotenv = require('dotenv');

dotenv.config();

const dbURI = process.env.MONGO_URI;

const connectToDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with error code
  }
};

module.exports = connectToDB;
