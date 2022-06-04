const mongoose = require('mongoose');

const TrainingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide name'],
      minlength: 3,
      maxlength: 20,
      trim: true,
    },
    mode: {
      type: String,
      required: [true, 'Please provide name'],
      minlength: 3,
      maxlength: 20,
      trim: true,
    },
    equipment: [String],
    exercises: [String],
    trainerTips: [String],
    userCreator: {
      type: String,
      required: [true, 'Please provide name'],
      minlength: 3,
      maxlength: 20,
      trim: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Training', TrainingSchema);
