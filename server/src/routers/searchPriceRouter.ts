import { Request, Response, NextFunction, Router } from 'express';
import * as bodyParser from 'body-parser';
import { Price } from '@models/';

const searchPriceRouter = Router();
searchPriceRouter.use(bodyParser.json());

searchPriceRouter
	.route('/searchPrice/:searchPriceId')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Price.find({ $text: { $search: req.params.searchPriceId } })
			.then(
				price => {
					res.json(price);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

export { searchPriceRouter };
