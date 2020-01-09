import { Request, Response, NextFunction, Router } from 'express';
import * as bodyParser from 'body-parser';
import { Promo, Doctor } from '@models/';

const handleError = (err: Error, res: Response) => {
	res.status(500).json('Error');
};

const promoRouter = Router();
promoRouter.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }));

promoRouter
	.route('/promos/')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Promo.find({})
			.populate({ path: 'doctorsId', model: Doctor })
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
			.then(
				promo => {
					res.json(promo);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

export { promoRouter };
