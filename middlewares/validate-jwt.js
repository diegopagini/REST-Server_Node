/** @format */
import { request, response } from 'express';
import jwt from 'jsonwebtoken';

export const validateJWT = (req = request, res = response, next) => {
	const token = req.header('x-token'); // To get an specific header.

	if (!token)
		return res.status(401).json({
			message: 'There is no valid token.',
		});

	try {
		const { uid } = jwt.verify(token, process.env.SECRET_OR_PRIVATE_KEY); // TO verify if it is a valid token.

		req.uid = uid; // To add the uid in the request.

		next(); // To continue with the next middleware.
	} catch (error) {
		console.log(error);
		return res.status(401).json({
			message: 'There is no valid token.',
		});
	}
};
