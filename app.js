/** @format */
import { config } from 'dotenv';
import express from 'express';

config();
const app = express();

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
	console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
