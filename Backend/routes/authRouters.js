import express from 'express';
import {login,signup} from '../controllers/authController.js';
import { signupValidation } from '../middlewares/authValidation.js';

const router = express.Router();

router.post('/login', login);
router.post('/signup', signupValidation, signup);

export default router;
