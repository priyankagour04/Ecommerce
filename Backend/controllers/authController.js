const { sign } = require("jsonwebtoken"); // Import JSON Web Token generation
const bcrypt = require("bcrypt");
const UserModel = require("../models/users");

// Signup function
module.exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)  
        .json({ message: "User already exists", success: false });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user 
    const user = new UserModel({ name, email, password: hashedPassword });
    await user.save();

    // Generate a JWT token
    const token = sign({ id: user._id, email: user.email }, "secretKey", {
      expiresIn: "8h", // Token expires in 8 hour
    });

    // Send response
    res.status(201).json({
      message: "Signup successfully",
      success: true,
      user: { id: user._id, name: user.name, email: user.email },
      token, // Include the token in the response
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", success: false, error: err.message });
  }
};



module.exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // login functionality
      const user = await UserModel.findOne({ email });
      const errorMsg = "Authentication failed, email or password is wrong"
      if (!user) {
        return res
          .status(403)
          .json({ message: errorMsg, success: false });
      }

  // comapare user password with database password
const isPasswordEqual = await bcrypt.compare(password, user.password);
if (!isPasswordEqual) {
  return res
  .status(403)
  .json({ message: errorMsg, success: false });
}

      // Generate a JWT token
      const token = sign({ id: user._id, email: user.email }, "secretKey", {
        expiresIn: "8h", // Token expires in 8 hour
      });
  
      // Send response
      res.status(200).json({
        message: "Login successfully",
        success: true,
        user: { id: user._id, name: user.name, email: user.email },
        token, // Include the token in the response
      });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Internal server error", success: false, error: err.message });
    }
  };

