/** @format */
import { request, response, Router } from 'express';
import { check } from 'express-validator';

import { createCategory, getCategories, getCategory } from '../controllers/categories.controller.js';
import { categoryExistById } from '../helpers/db-validators.js';
import { validateFields, validateJWT } from '../middlewares/index.js';

export const categoriesRouter = Router(); // Instance of router from express.

/**
 * Get all categories
 */
categoriesRouter.get('/', getCategories); // No validations.

/**
 * Get details from a categorie.
 */
categoriesRouter.get(
	'/:id',
	[
		check('id', 'Is not a Mongo ID').isMongoId(),
		check('id').custom(categoryExistById),
		validateFields,
	],
	getCategory
);

/**
 * Create a new categorie.
 */
categoriesRouter.post(
	'/',
	[validateJWT, check('name', 'Name is required').not().isEmpty(), validateFields], // Middlewares.
	createCategory // Controller.
);

/**
 * Update a categorie.
 */
categoriesRouter.put('/:id', (req = request, res = response) => {
	return res.status(200).json({
		msg: 'update',
	});
});

/**
 * Delete a categorie.
 */
categoriesRouter.delete('/:id', (req = request, res = response) => {
	return res.status(200).json({
		msg: 'delete',
	});
});
