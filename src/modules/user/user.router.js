

import express from 'express';
import { signIn, signup } from './user.controller.js';
const userRouter = express.Router();

userRouter.post('/signup', signup)
userRouter.post('/signin', signIn)



export default userRouter