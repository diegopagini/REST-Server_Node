/** @format */
import { Router } from 'express';
import { check } from 'express-validator';

import { usersDelete, usersGet, usersPost, usersPut } from '../controllers/users.controller.js';

export const router = Router(); // Instance of router from express.

// "get", "post", "put", "delete", etc. are the keywords to use routes.
router.get('/', usersGet); // We call the reference to our function "usersGet".

router.post('/', [check('email', 'Invalid email').isEmail()], usersPost); // The second param is an array of middlewares.

router.put('/:id', usersPut); // :id to allow a param in the route.

router.delete('/', usersDelete);
