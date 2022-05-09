const express = require('express');
const apicache = require('apicache');

const {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
} = require('../../controllers/workoutController');

const recordController = require('../../controllers/recordController');

const router = express.Router();
const cache = apicache.middleware;

router.get('/', cache('2 minutes'), getAllWorkouts);

router.get('/:workoutId', getOneWorkout);

router.get('/:workoutId/records', recordController.getRecordForWorkout);

router.post('/', createNewWorkout);

router.patch('/:workoutId', updateOneWorkout);

router.delete('/:workoutId', deleteOneWorkout);

module.exports = router;
