/** @format */
import mongoose from 'mongoose';

const { model, Schema } = mongoose;

const UserSchema = Schema({
	name: {
		type: String,
		required: [true, 'Name is required'],
	},
	email: {
		type: String,
		required: [true, 'Email is required'],
		unique: true,
	},
	password: {
		type: String,
		required: [true, 'Password is required'],
	},
	img: {
		type: String,
	},
	role: {
		type: String,
		required: [true, 'Role is required'],
		enum: ['ADMIN_ROLE', 'USER_ROLE'],
	},
	status: {
		type: Boolean,
		default: true,
	},
	google: {
		type: Boolean,
		default: false,
	},
});

export const User = model('User', UserSchema);
