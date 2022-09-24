/** @format */
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const CategorySchema = Schema({
	name: {
		type: String,
		required: [true, 'Name is mandatory'],
		unique: true,
	},
	state: {
		type: Boolean,
		default: true,
		required: true,
	},
	user: {
		type: Schema.Types.ObjectId, // Must be a user from the collection.
		ref: 'User',
		required: true,
	},
});

export const Category = model('Category', CategorySchema);
