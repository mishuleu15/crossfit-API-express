const User = require('../models/User');

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    send.status(400).send({
      status: 'FAILED',
      data: {
        error: 'Please provide the name, email and password.',
      },
    });
  }

  const userAlreadyExists = await User.findOne({ email });

  if (userAlreadyExists) {
    res.status(400).send({
      data: {
        message: 'User already exists.',
      },
    });
  }

  const user = await User.create({ name, email, password });

  const token = user.createJWT();

  res.status(200).json({
    data: {
      user,
      token,
    },
  });
};

module.exports = { register };
