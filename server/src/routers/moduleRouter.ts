import { Request, Response, NextFunction, Router } from 'express';
import * as bodyParser from 'body-parser';
import { Module } from '@models/';

const moduleRouter = Router();
moduleRouter.use(bodyParser.json());

moduleRouter
	.route('/modules/')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Module.find({})
			.then(
				module => {
					res.json(module);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	})
	.post((req: Request, res: Response, next: NextFunction): void => {
		Module.create(req.body)
			.then(
				module => {
					console.log('Фотография добавлена');
					res.json(module);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	})
	.put((req: Request, res: Response): void => {
		// res.stutusCode = 403;
		res.status(403).end('PUT не поддерживается на /modules');
	})
	.delete((req: Request, res: Response, next: NextFunction): void => {
		Module.remove({})
			.then(
				resp => {
					res.json(resp);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

moduleRouter
	.route('/modules/:moduleId')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Module.findById(req.params.moduleId)
			.then(
				module => {
					res.json(module);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	})
	.post((req: Request, res: Response): void => {
		res.status(403).end(
			'POST не поддерживается на /modules/' + req.params.moduleId
		);
	})
	.put((req: Request, res: Response, next: NextFunction): void => {
		Module.findByIdAndUpdate(
			req.params.moduleId,
			{
				$set: req.body
			},
			{
				new: true
			}
		)
			.then(
				module => {
					res.json(module);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	})
	.delete((req: Request, res: Response, next: NextFunction): void => {
		Module.findByIdAndRemove(req.params.moduleId)
			.then(
				resp => {
					res.json({ message: 'удалена' });
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

export { moduleRouter };
