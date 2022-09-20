/** @format */
import { request, response, Router } from 'express';

export const categoriesRouter = Router(); // Instance of router from express.

/**
 * Get all categories
 */
categoriesRouter.get('/', (req = request, res = response) => {
	return res.status(200).json({
		msg: 'Todo OK',
	});
});

/**
 * Get details from a categorie.
 */
categoriesRouter.get('/:id', (req = request, res = response) => {
	return res.status(200).json({
		msg: 'Get - id',
	});
});

/**
 * Create a new categorie.
 */
categoriesRouter.post('/', (req = request, res = response) => {
	return res.status(200).json({
		msg: 'create',
	});
});

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
