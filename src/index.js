const express = require('express');
const v1WorkoutRouter = require('./v1/routes/workoutRoutes');
const cors = require('cors');
require('dotenv/config');
const { swaggerDocs: V1SwaggerDocs } = require('./v1/swagger');

const app = express();

// db and authenticateUser
const connectDB = require('../src/db/connect');

const PORT = process.env.PORT || 4000;

app.use(cors());

app.get('/', (req, res) => {
  res.send("<h2>It's Working!</h2>");
});

app.use(express.json());

app.use('/api/v1/workouts', v1WorkoutRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(
        `Server is listening on port ${PORT}...`.brightMagenta.underline
      );
    });
  } catch (error) {
    console.log(error);
  }
};

start();
