/** @format */
import { request, response } from 'express';

export const uploadFile = async (req = request, res = response) => {
	if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
		return res.status(400).json({ msg: 'No files were uploaded.' });
	}

	try {
		// const fileName = await uploadFile(req.files, ['txt', 'md'], 'texts');
		// const fileName = await uploadFile(req.files, undefined, 'images');
		const fileName = await uploadFile(req.files);

		return res.json({
			fileName,
		});
	} catch (error) {
		return res.status(400).json({
			error,
		});
	}
};
