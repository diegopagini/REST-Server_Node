/** @format */
import { request, response } from 'express';

import { Category } from '../models/index.js';

export const createCategory = async (req = request, res = response) => {
	const name = req.body.name.toUpperCase();
	const categoryDB = await Category.findOne({ name });

	if (categoryDB)
		return res.status(400).json({
			msg: `Category with name ${categoryDB.name} already exists`,
		});

	const data = {
		name,
		user: req.user._id,
	};

	// Save in DB
	const category = await new Category(data);
	await category.save();

	return res.status(201).json(category);
};
