const express = require('express');
const path = require('path');

const helmet = require('helmet');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');

const v1WorkoutRouter = require('./v1/routes/workoutRoutes');
const v1AuthRouter = require('./v1/routes/authRoutes');
const v1UserRouter = require('./v1/routes/userRoutes');
const cors = require('cors');
require('dotenv/config');

const app = express();

const PORT = process.env.PORT || 3001;

// db and authenticateUser
const connectDB = require('../src/db/connect');

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

app.use('/api/v1/workouts', v1WorkoutRouter);
app.use('/api/v1/auth', v1AuthRouter);
app.use('/api/v1/user', v1UserRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
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
