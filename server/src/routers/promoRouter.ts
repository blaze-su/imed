import * as bodyParser from 'body-parser';

import { File, Promo } from '@models/';
import { NextFunction, Request, Response, Router } from 'express';

const handleError = (err: Error, res: Response) => {
	res.status(500).json('Error');
};

const promoRouter = Router();
promoRouter.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }));

promoRouter
	.route('/promos/')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Promo.find({})
			.populate({ path: 'fileId', model: File })
			.then(
				promo => {
					res.json(promo);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

promoRouter
	.route('/promos/:promoId')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Promo.findById(req.params.promoId)
			.populate({ path: 'fileId', model: File })
			.then(
				promo => {
					res.json(promo);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

export { promoRouter };
