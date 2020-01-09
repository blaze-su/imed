import { Request, Response, NextFunction, Router } from 'express';
import * as bodyParser from 'body-parser';
import { Chapter } from '@models/';

const chapterRouter = Router();
chapterRouter.use(bodyParser.json());

chapterRouter
	.route('/chapters/')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Chapter.find({})
			.then(
				chapter => {
					res.json(chapter);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	})
	.post((req: Request, res: Response, next: NextFunction): void => {
		Chapter.create(req.body)
			.then(
				chapter => {
					console.log('Фотография добавлена');
					res.json(chapter);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});
chapterRouter
	.route('/chapters/:chaptersId')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Chapter.findById(req.params.chaptersId)
			.then(
				chapter => {
					res.json(chapter);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

export { chapterRouter };
