/** @format */
import { request, response } from 'express';

export const usersGet = (req = request, res = response) => {
	// To have the types for the response in JS...
	res.status(200).json({
		message: 'get API - Controller',
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
	res.status(200).json({
		message: 'put API - Controller',
	});
};

export const usersDelete = (req = request, res = response) => {
	res.status(200).json({
		message: 'delete API - Controller',
	});
};
