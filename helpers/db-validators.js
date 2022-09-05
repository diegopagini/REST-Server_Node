/** @format */
import { Role } from '../models/role.js';


export const isRoleValid = async (role = '') => {
	// Custom validations.
	const roleExist = await Role.findOne({ role }); // To check if the role in the body match with the roles in the data base.
	if (!roleExist) throw new Error(`${role} not match with a valid role.`);
};
