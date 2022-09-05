/** @format */
import { Router } from 'express';
import { check } from 'express-validator';

import { usersDelete, usersGet, usersPost, usersPut } from '../controllers/users.controller.js';
import { isRoleValid } from '../helpers/db-validators.js';
import { validateFields } from '../middlewares/validate-fields.js';

export const router = Router(); // Instance of router from express.

// "get", "post", "put", "delete", etc. are the keywords to use routes.
router.get('/', usersGet); // We call the reference to our function "usersGet".

router.post(
	'/',
	[
		check('email', 'Invalid email').isEmail(),
		check('name', 'Name is required').not().isEmpty(),
		check('password', 'Password is required with more than 6 characters').isLength({ min: 6 }),
		// check('role', 'Role is invalid').isIn(['ADMIN_ROLE', 'USER_ROLE']),
		check('role').custom(isRoleValid), // check('role').custom((role) => isRoleValid(role)). if the argument is the same we could ignore it
		validateFields, // The custom middleware to validate if all previous validators capture some error.
	],
	usersPost
); // The second param is an array of middlewares.

router.put('/:id', usersPut); // :id to allow a param in the route.

router.delete('/', usersDelete);