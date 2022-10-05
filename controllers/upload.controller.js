/** @format */
import { request, response } from 'express';
import path from 'path';

export const uploadFile = async (req = request, res = response) => {
	if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
		return res.status(400).json({ msg: 'No files were uploaded.' });
	}

	const { file } = req.files; // Body must have the "file".
	const splitedName = file.name.split('.');
	const fileExtension = splitedName[splitedName.length - 1];

	const validExtensions = ['png', 'jpg', 'jpeg', 'gif'];

	if (!validExtensions.includes(fileExtension))
		return res.status(400).json({
			msg: `${fileExtension} is not a valid extension. Valid extensions: ${validExtensions}`,
		});

	const uploadPath = path.join(__dirname, '../uploads/', file.name);

	// Use the mv() method to place the file somewhere on your server
	file.mv(uploadPath, (err) => {
		if (err) return res.status(500).json({ err });

		return res.json({ msg: `File uploaded to: ${uploadPath}` });
	});
};
