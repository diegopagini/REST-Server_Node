/** @format */
import bcryptjs from 'bcryptjs';
import { request, response } from 'express';

import { User } from '../models/user.js';

// req = request and res = response to have the types for the response in JS...
export const usersGet = (req = request, res = response) => {
	const { query } = req; // Query are all the optionals query params: "?name="...
	res.status(200).json({
		message: 'get API - Controller',
		query,
	});
};

export const usersPost = async (req = request, res = response) => {
	const { name, email, password, role } = req.body;
	const user = new User({
		name,
		email,
		password,
		role,
	});
	// Check if the email already exist.

	// Encrypt the password.
	const salt = bcryptjs.genSaltSync(); // number of turns in the encryption cycle.
	user.password = bcryptjs.hashSync(password, salt); // encrypt method.

	// Save in DB.
	await user.save(); // To save the user in the data base.

	res.status(200).json({
		user,
	});
};

export const usersPut = (req = request, res = response) => {
	const { id } = req.params;

	res.status(200).json({
		message: 'put API - Controller',
		id,
	});
};

export const usersDelete = (req = request, res = response) => {
	res.status(200).json({
		message: 'delete API - Controller',
	});
};
