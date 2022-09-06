/** @format */
import bcryptjs from 'bcryptjs';
import { request, response } from 'express';

import { User } from '../models/user.js';

export const login = async (req = request, res = response) => {
	const { email, password } = req.body;

	try {
		// check if the email exists.
		const user = await User.findOne({ email });
		if (!user) return res.status(400).json({ message: 'User / Password not valid.' });
		// check if the user is active.
		if (!user.status) return res.status(400).json({ message: 'User / Password not valid.' });
		// check passowrd
		const validPassword = bcryptjs.compareSync(password, user.password);
		if (!validPassword) return res.status(400).json({ message: 'User / Password not valid.' });
		// generate JWT

		return res.json({
			user,
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			error: 'Speak with the administrator',
		});
	}
};
