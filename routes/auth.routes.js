/** @format */
import { Router } from 'express';

import { login } from '../controllers/auth.controller.js';

export const authRouter = Router(); // Instance of router from express.

authRouter.post('/login', login);
