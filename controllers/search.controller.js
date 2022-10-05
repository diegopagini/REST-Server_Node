/** @format */
import { request, response } from 'express';
import { ObjectId } from 'mongoose';

import { User } from '../models/';

const allowedCollections = ['users', 'categories', 'products', 'roles'];

const searchUsers = async (term = '', res = response) => {
	const isMongoId = ObjectId.isValid(term);

	if (isMongoId) {
		const user = await User.findById(term);
		return res.json({
			results: user ? [user] : [],
		});
	}

	const regex = new RegExp(term, 'i'); // To make insensitive the term.

	const users = await User.find({
		$or: [{ name: regex }, { email: regex }], // Search must match with name or email.
		$and: [{ status: true }], // The result must be an active user.
	});

	return res.json({
		results: users,
	});
};

export const search = (req = request, res = response) => {
	const { collection, term } = req.params;

	if (!allowedCollections.includes(collection))
		return res.status(400).json({
			msg: `The allowed collections are: ${allowedCollections}`,
		});

	switch (collection) {
		case 'users':
			searchUsers(term, response);
			break;

		case 'categories':
			break;

		case 'products':
			break;

		default:
			res.status(500).json({
				msg: 'That option is not implemented...',
			});
	}
};
