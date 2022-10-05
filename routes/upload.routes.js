/** @format */
import { Router } from 'express';

import { uploadFile } from '../controllers/upload.controller.js';

export const uploadRouter = Router(); // Instance of router from express.

uploadRouter.post('/', uploadFile);
