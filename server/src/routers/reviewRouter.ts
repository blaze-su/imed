import { Request, Response, NextFunction, Router } from 'express';
import * as bodyParser from 'body-parser';
import { Review } from '@models/';

const reviewRouter = Router();
reviewRouter.use(bodyParser.json());

reviewRouter
	.route('/reviews/')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Review.find({})
			.then(
				review => {
					res.json(review);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	})
	.post((req: Request, res: Response, next: NextFunction): void => {
		Review.create(req.body)
			.then(
				review => {
					console.log('Фотография добавлена');
					res.json(review);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	})
	.put((req: Request, res: Response): void => {
		// res.stutusCode = 403;
		res.status(403).end('PUT не поддерживается на /reviews');
	})
	.delete((req: Request, res: Response, next: NextFunction): void => {
		Review.remove({})
			.then(
				resp => {
					res.json(resp);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

reviewRouter
	.route('/reviews/:reviewId')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Review.findById(req.params.reviewId)
			.then(
				review => {
					res.json(review);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	})
	.post((req: Request, res: Response): void => {
		res.status(403).end(
			'POST не поддерживается на /reviews/' + req.params.reviewId
		);
	})
	.put((req: Request, res: Response, next: NextFunction): void => {
		Review.findByIdAndUpdate(
			req.params.reviewId,
			{
				$set: req.body
			},
			{
				new: true
			}
		)
			.then(
				review => {
					res.json(review);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	})
	.delete((req: Request, res: Response, next: NextFunction): void => {
		Review.findByIdAndRemove(req.params.reviewId)
			.then(
				resp => {
					res.json({ message: 'удалена' });
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

export { reviewRouter };
