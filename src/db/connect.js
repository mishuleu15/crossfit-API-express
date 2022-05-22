const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = (url) => {
  console.log('Connected to the DB'.brightCyan);
  return mongoose.connect(url);
};
module.exports = connectDB;
