/** @format */
import { request, response } from 'express';


export const uploadFile = async (req = request, res = response) => {
	res.json({
		msg: 'Hola mundo',
	});
};
