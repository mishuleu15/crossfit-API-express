const User = require('../models/User');

const register = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!name || !email || !password) {
    res.status(400).send({
      status: 'FAILED',
      data: {
        error: 'Please provide the name, email and password.',
      },
    });
  }

  if (password !== confirmPassword)
    return res.status(400).json({ message: "Passwords don't match" });

  const userAlreadyExists = await User.findOne({ email });

  if (userAlreadyExists) {
    return res.status(400).json({
      message: 'User already exists.',
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

const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email }).select('+password');

    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await existingUser.comparePassword(password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'Invalid Credentials' });

    const token = existingUser.createJWT();
    existingUser.password = undefined;

    res.status(200).json({ userLoggedIn: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = { register, signIn };
