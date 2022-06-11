const express = require('express');
const apicache = require('apicache');

const authenticateUser = require('../../middleware/auth.js');

const {
  getAllWorkouts,
  getWorkoutsBySearch,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
} = require('../../controllers/workoutController');

const router = express.Router();
const cache = apicache.middleware;

router.get('/search', getWorkoutsBySearch);

router.get('/', getAllWorkouts);

router.get('/:workoutId', getOneWorkout);

router.post('/', authenticateUser, createNewWorkout);

router.patch('/:workoutId', updateOneWorkout);

router.delete('/:workoutId', deleteOneWorkout);

module.exports = router;
