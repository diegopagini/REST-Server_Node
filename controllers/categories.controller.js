/** @format */
import { request, response } from 'express';

import { Category } from '../models/index.js';

export const getCategories = async (req = request, res = response) => {
	const { query } = req; // Query are all the optionals query params: "?name="...
	const { limit = 5, from = 0 } = query;

	// [total, categories] = destructuring of arrays
	const [total, categories] = await Promise.all([
		// Promise.all() to execute all promises at the same time.
		Category.countDocuments({ status: true }),
		Category.find(query).populate('user', 'name').skip(Number(from)).limit(Number(limit)),
	]);

	return res.status(200).json({
		total,
		categories,
	});
};

export const getCategory = async (req = request, res = response) => {
	const { id } = req.params;
	const category = await Category.findById(id).populate('user', 'name');

	return res.status(200).json(category);
};

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
