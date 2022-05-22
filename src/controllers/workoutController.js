const workoutService = require('../services/workoutService');

const Training = require('../models/Training');

const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Training.find();
    res.status(200).json(workouts);
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const getOneWorkout = async (req, res) => {
  const {
    params: { workoutId },
  } = req;
  if (!workoutId) {
    res.status(400).send({
      status: 'FAILED',
      data: { error: "Parameter ':workoutId' can not be empty" },
    });
  }
  try {
    const workout = await Training.findOne({ workoutId });
    res.send({ status: 'OK', data: workout });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const createNewWorkout = async (req, res) => {
  const { name, mode, equipment, exercises, trainerTips } = req.body;
  const workout = req.body;

  if (!name || !mode || !equipment || !exercises || !trainerTips) {
    res.status(400).send({
      status: 'FAILED',
      data: {
        error:
          "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
      },
    });
    return;
  }

  const newWorkout = new Training({
    ...workout,
  });

  try {
    await newWorkout.save();

    res.status(201).json(newWorkout);
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: 'FAILED', data: { error: error.message || error } });
  }
};

const updateOneWorkout = async (req, res) => {
  const {
    body,
    params: { workoutId },
  } = req;
  if (!workoutId) {
    res.status(400).send({
      status: 'FAILED',
      data: { error: "Parameter ':workoutId' can not be empty" },
    });
  }
  try {
    const updatedWorkout = await Training.findByIdAndUpdate(workoutId, body, {
      new: true,
    });
    res.send({ status: 'OK', data: updatedWorkout });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const deleteOneWorkout = async (req, res) => {
  const { workoutId } = req.params;

  if (!workoutId) {
    res.status(400).send({
      status: 'FAILED',
      data: { error: "Parameter ':workoutId' can not be empty" },
    });
  }
  try {
    await Training.findByIdAndRemove(workoutId);
    const workouts = await Training.find();
    res.status(200).json(workouts);
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
