const authController = require("../controllers/authController");

const { signupValidation } = require("../middlewares/authValidation");


const express = require("express");
const router = express.Router();

router.post('/login', authController.login);

router.post("/signup", signupValidation, authController.signup);


module.exports = router;
