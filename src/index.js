const express = require('express');
const v1WorkoutRouter = require('./v1/routes/workoutRoutes');
const v1AuthRouter = require('./v1/routes/authRoutes');
const v1UserRouter = require('./v1/routes/userRoutes');
const cors = require('cors');
require('dotenv/config');

const app = express();

const PORT = process.env.PORT || 3001;

// db and authenticateUser
const connectDB = require('../src/db/connect');

app.use(cors());

app.use(express.json());

app.use('/api/v1/workouts', v1WorkoutRouter);
app.use('/api/v1/auth', v1AuthRouter);
app.use('/api/v1/user', v1UserRouter);

app.get('/', (req, res) => {
  res.send('Welcome to CrossFit API');
});

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
