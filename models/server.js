/** @format */
import cors from 'cors';
import express from 'express';

export class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;

		// Middlewares
		this.middlewares();
		// Routes
		this.routes();
	}

	middlewares() {
		// "use" is the keyword to middlewares.
		this.app.use(express.static('public'));
		this.app.use(cors());
	}

	routes() {
		// "get", "post", "put", "delete", etc. are the keywords to routes.
		this.app.get('/api', (req, res) => {
			res.status(200).json({
				message: 'get API',
			});
		});

		this.app.post('/api', (req, res) => {
			res.status(201).json({
				message: 'post API',
			});
		});

		this.app.put('/api', (req, res) => {
			res.status(400).json({
				message: 'put API',
			});
		});

		this.app.delete('/api', (req, res) => {
			res.status(500).json({
				message: 'delete API',
			});
		});
	}

	listen() {
		this.app.listen(this.port, () => {
			console.clear();
			console.log(`server running in port: ${this.port}`);
		});
	}
}
