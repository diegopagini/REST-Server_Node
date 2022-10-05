/** @format */
import { Router } from 'express';
import { check } from 'express-validator';

import { updateImage, uploadFile } from '../controllers/upload.controller.js';
import { allowedCollections } from '../helpers/db-validators.js';
import validateFields from '../middlewares/validate-fields.js';
import validateFiles from '../middlewares/validate-files.js';

export const uploadRouter = Router(); // Instance of router from express.

uploadRouter.post('/', [validateFiles], uploadFile);

uploadRouter.put(
	'/:collection/:id',
	[
		validateFiles,
		check('id', 'Must be a mongo ID').isMongoId(),
		check('collection').custom((c) => allowedCollections(c, ['users', 'products'])),
		validateFields,
	],
	updateImage
);
