/** @format */
import { Router } from 'express';

import { usersDelete, usersGet, usersPost, usersPut } from '../controllers/users.controller.js';

export const router = Router(); // Instance of router from express.

// "get", "post", "put", "delete", etc. are the keywords to use routes.
router.get('/', usersGet); // We call the reference to our function "usersGet".

router.post('/', usersPost);

router.put('/', usersPut);

router.delete('/', usersDelete);
