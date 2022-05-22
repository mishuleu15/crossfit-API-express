const mongoose = require('mongoose');
const colors = require('colors');

const fs = require('fs');
const Training = require('../models/Training');
require('dotenv/config');

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DB connection successful!'));

// READ JSON FILE
const trainings = JSON.parse(fs.readFileSync(`${__dirname}/db.json`, 'utf-8'));

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Training.create(trainings);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Training.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
