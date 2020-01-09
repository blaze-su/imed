import { Request, Response, NextFunction, Router } from 'express';
import * as bodyParser from 'body-parser';
import { Sefurl } from '@models/';

const sefurlRouter = Router();
sefurlRouter.use(bodyParser.json());

sefurlRouter
	.route('/sefurls/')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Sefurl.find({})
			.then(
				sefurl => {
					res.json(sefurl);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	})
	.post((req: Request, res: Response, next: NextFunction): void => {
		Sefurl.create(req.body)
			.then(
				sefurl => {
					console.log('Фотография добавлена');
					res.json(sefurl);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	})
	.put((req: Request, res: Response): void => {
		// res.stutusCode = 403;
		res.status(403).end('PUT не поддерживается на /sefurls');
	})
	.delete((req: Request, res: Response, next: NextFunction): void => {
		Sefurl.remove({})
			.then(
				resp => {
					res.json(resp);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

sefurlRouter
	.route('/sefurls/:sefurlId')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Sefurl.findById(req.params.sefurlId)
			.then(
				sefurl => {
					res.json(sefurl);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	})
	.post((req: Request, res: Response): void => {
		res.status(403).end(
			'POST не поддерживается на /sefurls/' + req.params.sefurlId
		);
	})
	.put((req: Request, res: Response, next: NextFunction): void => {
		Sefurl.findByIdAndUpdate(
			req.params.sefurlId,
			{
				$set: req.body
			},
			{
				new: true
			}
		)
			.then(
				sefurl => {
					res.json(sefurl);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	})
	.delete((req: Request, res: Response, next: NextFunction): void => {
		Sefurl.findByIdAndRemove(req.params.sefurlId)
			.then(
				resp => {
					res.json({ message: 'удалена' });
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

export { sefurlRouter };
