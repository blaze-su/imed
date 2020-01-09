import * as path from 'path';
import * as fs from 'fs';
import multer from 'multer';
import { Request, Response, NextFunction, Router } from 'express';
import * as bodyParser from 'body-parser';
import { Work } from '@models/';

const workRouter = Router();
workRouter.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }));

const upload = multer({
	dest: 'resumes/'
});

workRouter
	.route('/works/')
	.post(
		upload.single('file'),
		(req: Request, res: Response, next: NextFunction): void => {
			const tempPath: string = req.file.path;
			const targetPath: string = path.join(
				__dirname,
				'../../resumes/' + req.file.originalname
			);
			const urlPath: string =
				'localhost:8000/resumes/' + req.file.originalname;
			const kek = req.body;
			kek.file = urlPath;
			console.log(kek);
			if (
				path.extname(req.file.originalname).toLowerCase() === '.docx' ||
				path.extname(req.file.originalname).toLowerCase() === '.pdf' ||
				path.extname(req.file.originalname).toLowerCase() === '.doc'
			) {
				fs.rename(tempPath, targetPath, (err: any) => {
					if (err) {
						return handleError(err, res);
					}
					res.json('Загружено');
				});
			} else {
				fs.unlink(tempPath, (err: any) => {
					if (err) {
						return handleError(err, res);
					}
					res.json('доступны только .docx/pdf/doc');
				});
			}
			Work.create(kek)
				.then(
					work => {
						res.json(work);
					},
					(err: Error) => next(err)
				)
				.catch((err: Error) => next(err));
		}
	);

const handleError = (err: Error, res: Response) => {
	res.status(500).json('Error');
};

export { workRouter };
