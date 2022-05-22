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

/**
 * @openapi
 * /api/v1/workouts:
 *   get:
 *     tags:
 *       - Workouts
 *     parameters:
 *       - in: query
 *         name: mode
 *         schema:
 *           type: string
 *         description: The mode of a workout
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Workout"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */

router.get('/', getAllWorkouts);

router.get('/:workoutId', getOneWorkout);

router.get('/:workoutId/records', recordController.getRecordForWorkout);

router.post('/', createNewWorkout);

router.patch('/:workoutId', updateOneWorkout);

router.delete('/:workoutId', deleteOneWorkout);

module.exports = router;
