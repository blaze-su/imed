import { Request, Response, NextFunction, Router } from 'express';
import path from 'path';
import md5 from 'md5';
import sharp from 'sharp';
import * as bodyParser from 'body-parser';
import { File, IFile } from '@models/';
import multer = require('multer');
import { Error } from 'mongoose';

const PUBLIC_DIR: string = process.env.PUBLIC_DIR || 'public';
const UPLOAD_DIR: string = process.env.UPLOAD_DIR || 'uploads';
const MAX_WIDTH = 1600;
const MAX_HEIGT = 1200;

const fileRouter = Router();
fileRouter.use(bodyParser.json());

const storage = multer.memoryStorage();
const upload = multer({ storage });

const fileSaveInfo = (
	pSrc: string,
	pTitle: string,
	pType: string,
	res: Response,
	next: NextFunction
) => {
	File.create({
		src: pSrc,
		title: pTitle,
		type: pType
	})
		.then(
			file => {
				console.log('File rigistr in MongoDb');
				res.json(file);
			},
			(err: Error) => next(err)
		)
		.catch((err: Error) => next(err));
};

const dirPath = path.join(PUBLIC_DIR, UPLOAD_DIR);

fileRouter
	.route('/files/')
	.get((req, res, next) => {
		File.find({})
			.then(
				files => {
					res.json(files);
				},
				err => next(err)
			)
			.catch(err => next(err));
	})

	.post(upload.single('file'), (req, res, next) => {
		if (req.file === undefined) {
			res.send('Error: the file was not downloaded!');
			return;
		}

		const { buffer, mimetype, originalname } = req.file;
		const hash = md5(buffer);
		const ext = path.parse(originalname).ext;

		if (['image/jpeg', 'image/png'].find(m => m === mimetype)) {
			const jpgPath = path.join(dirPath, hash + '.jpg');
			const webpPath = path.join(dirPath, hash + '.webp');

			const image = sharp(buffer);
			image
				.metadata()
				.then(metadata => {
					const { width, height } = metadata;
					if (width !== undefined && height !== undefined) {
						const dWidth = width - MAX_WIDTH;
						const dHeight = height - MAX_HEIGT;

						if (dWidth > 0 || dHeight > 0) {
							return image
								.resize(
									dWidth > dHeight
										? { width: MAX_WIDTH }
										: { height: MAX_HEIGT }
								)
								.jpeg()
								.toBuffer();
						} else {
							return image.toBuffer();
						}
					} else {
						throw new Error('Error: get metadata!');
					}
				})
				.then(imageBuffer => {
					if (!buffer) {
						throw new Error('Error: optimization file!');
					}
					const jpgImage = sharp(imageBuffer);
					jpgImage.toFile(jpgPath).then(info => {
						console.log('jpgImage', jpgImage);
						fileSaveInfo(
							hash + '.jpg',
							'',
							'image/jpeg',
							res,
							next
						);
					});
				})
				.catch(err => {
					next(err);
				});
		} else if (
			[
				'application/pdf',
				'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
			].find(m => m === mimetype)
		) {
			console.log('application/pdf');
		} else {
			res.send('Error: the file type was not support!');
			return;
		}
	});

export { fileRouter };
