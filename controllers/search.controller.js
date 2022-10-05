/** @format */
import { request, response } from 'express';

export const search = (req = request, res = response) => {
	const { collection, term } = req.params;

	res.json({
		collection,
		term,
	});
};
