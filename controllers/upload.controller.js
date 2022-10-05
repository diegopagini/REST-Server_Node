/** @format */
import { request, response } from 'express';

import { Product } from '../models/product.js';
import { User } from '../models/user.js';

export const uploadFile = async (req = request, res = response) => {
	if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
		return res.status(400).json({ msg: 'No files were uploaded.' });
	}

	try {
		// const fileName = await uploadFile(req.files, ['txt', 'md'], 'texts');
		// const fileName = await uploadFile(req.files, undefined, 'images');
		const fileName = await uploadFile(req.files);

		return res.json({
			fileName,
		});
	} catch (error) {
		return res.status(400).json({
			error,
		});
	}
};

export const updateImage = async (req = request, res = response) => {
	const { id, collection } = req.params;

	let model;

	switch (collection) {
		case 'user':
			model = await User.findById(id);
			if (!model)
				return res.status(400).json({
					msg: `There is no user with ${id} id.`,
				});
			break;

		case 'products':
			model = await Product.findById(id);
			if (!model)
				return res.status(400).json({
					msg: `There is no product with ${id} id.`,
				});

			break;

		default:
			return res.status(500).json({
				msg: 'Error',
			});
	}

	model.img = await uploadFile(req.files, undefined, collection);

	await model.save();

	return res.json(model);
};
