const User = require("../models/users");
const bcrypt = require("bcryptjs");
exports.signUp = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({ username, password: hashPassword });
    req.session.user = newUser;
    return res.status(201).json({ success: true, data: newUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 12);
    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const isCorrect = await bcrypt.compare(password, user.password);
    if (isCorrect) {
      req.session.user = user;
      return res.status(200).json({ success: true });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect password" });
    }
  } catch (error) {
    return res.status(500).json({ success: false });
  }
};
