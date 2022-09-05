/** @format */
import { Role } from '../models/role.js';
import { User } from '../models/user.js';

export const isRoleValid = async (role = '') => {
	// Custom validatior.
	const roleExist = await Role.findOne({ role }); // To check if the role in the body match with the roles in the data base.
	if (!roleExist) throw new Error(`${role} not match with a valid role.`);
};

export const emailExists = async (email = '') => {
	const exists = await User.findOne({ email });
	if (exists) throw new Error('Email already registered.');
};
