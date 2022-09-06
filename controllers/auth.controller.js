/** @format */
import { request, response } from 'express';

export const login = (req = request, res = response) => {
	return res.json({
		msg: 'Kooool',
	});
};
