/** @format */
import { response } from 'express';

export const usersGet = (req, res = response) => {
	// To have the types for the response in JS...
	res.status(200).json({
		message: 'get API - Controller',
	});
};

export const usersPost = (req, res = response) => {
	res.status(200).json({
		message: 'post API - Controller',
	});
};

export const usersPut = (req, res = response) => {
	res.status(200).json({
		message: 'put API - Controller',
	});
};

export const usersDelete = (req, res = response) => {
	res.status(200).json({
		message: 'delete API - Controller',
	});
};
