/** @format */
import { request, response } from 'express';

// req = request and res = response to have the types for the response in JS...
export const usersGet = (req = request, res = response) => {
	const { query } = req; // Query are all the optionals query params: "?name="...
	res.status(200).json({
		message: 'get API - Controller',
		query,
	});
};

export const usersPost = (req = request, res = response) => {
	const { body } = req;

	res.status(200).json({
		message: 'post API - Controller',
		body,
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
