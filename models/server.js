/** @format */
import cors from 'cors';
import express from 'express';

import { dbConnection } from '../database/config.db.js';
import { router } from '../routes/users.routes.js';

export class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;
		this.usersRouter = '/api/users'; // Routes for the users.

		// DB Connection
		this.dbConnect();
		// Middlewares
		this.middlewares();
		// Routes
		this.routes();
	}

	async dbConnect() {
		await dbConnection();
	}

	/**
	 * Middlewares for the server.
	 */
	middlewares() {
		// "use" is the keyword to middlewares.
		this.app.use(express.static('public')); // To use the files in the public folder.
		this.app.use(express.json()); // To read and parse the body of the requests.
		this.app.use(cors()); // To allow cors.
	}

	/**
	 * Routes for the server.
	 */
	routes() {
		this.app.use(this.usersRouter, router); // For the "/api/users" path we use the routes that we defined in our user.routes.js file
	}

	/**
	 * To start de server.
	 */
	listen() {
		this.app.listen(this.port, () => {
			console.clear();
			console.log(`server running in port: ${this.port}`);
		});
	}
}
