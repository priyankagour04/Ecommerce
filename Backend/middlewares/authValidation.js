
const { json } = require("body-parser");
const Joi = require("joi");

// created validation for singup process
//middleware signupValidation, which validates the user input for the signup process. 
const signupValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(100).required(),
  });

  const {error} = schema.validate(req.body);
  if (error) {
    return res.status(400)
    .json({message:" Bad request", error})
  }
  next();
};


// created validation for login process
const loginValidation = (req, res, next) => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(4).max(100).required(),
    });
  
    const {error} = schema.validate(req.body);
    if (error) {
      return res.status(400)
      .json({message:" Bad request", error})
    }
    next();
  };

  module.exports= {
    signupValidation,
    loginValidation
  }
