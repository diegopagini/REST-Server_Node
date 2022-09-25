/** @format */
import { request, response } from 'express';

export const getProducts = async (req = request, res = response) => {
	const { query } = req; // Query are all the optionals query params: "?name="...
	const { limit = 5, from = 0 } = query;

	// [total, products] = destructuring of arrays
	const [total, products] = await Promise.all([
		// Promise.all() to execute all promises at the same time.
		Product.countDocuments({ status: true }),
		Product.find(query).populate('user', 'name').skip(Number(from)).limit(Number(limit)),
	]);

	return res.status(200).json({
		total,
		products,
	});
};

export const getProduct = async (req = request, res = response) => {
	const { id } = req.params;
	const Product = await Product.findById(id).populate('user', 'name');

	return res.status(200).json(Product);
};

export const createProduct = async (req = request, res = response) => {
	const name = req.body.name.toUpperCase();
	const ProductDB = await Product.findOne({ name });

	if (ProductDB)
		return res.status(400).json({
			msg: `Product with name ${ProductDB.name} already exists`,
		});

	const data = {
		name,
		user: req.user._id,
	};

	// Save in DB
	const Product = await new Product(data);
	await Product.save();

	return res.status(201).json(Product);
};

export const updateProduct = async (req = request, res = response) => {
	const { id } = req.params;
	const { status, user, ...data } = req.body;

	data.name = data.name.toUpperCase();
	data.user = req.user._id;

	const Product = await Product.findByIdAndUpdate(id, data, { new: true }); // data is the change that we want to do.

	return res.status(200).json(Product);
};

export const deteleProduct = async (req = request, res = response) => {
	const { id } = req.params;

	const deletedProduct = await Product.findByIdAndUpdate(id, { status: false }, { new: true });

	return res.status(200).json(deletedProduct);
};
