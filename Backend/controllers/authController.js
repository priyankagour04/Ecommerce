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
    const token = sign({ id: user._id, email: user.email },process.env.JWT_SECRET, {
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
    //validation
    if (!email || !password) {
        return res.status(500).send({
            success: false,
            message: "Please fill all fields"
        });
    }
    //check if user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
        return res.status(404).send({
            success: false,
            message: "User not found"
        });
    }
    //check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(500).send({
            success: false,
            message: "Invalid Credentials"
        });
    }

     //create JWT token with expiration time 7 days
    const token = sign({ id: user._id }, process.env.JWT_SECRET,{
        expiresIn: '7d',
    });

    res.status(200).send({
        success: true,
        message: "User logged in successfully",
        token,
        user
    })
    // //generate JWT token
    // const token = user.generateJWT();
    // res.send({
    //     success: true,
    //     message: "User logged in successfully",
    //     token
    // });


} catch (error) {
    console.log(error);
    res.status(500).send({
        success: false,
        message: "Error in login APi",
        error
    });
}
  };

