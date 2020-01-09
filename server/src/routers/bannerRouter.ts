import { Request, Response, NextFunction, Router } from 'express';
import * as bodyParser from 'body-parser';
import { Banner } from '@models/';

const bannerRouter = Router();
bannerRouter.use(bodyParser.json());

bannerRouter
	.route('/banners/')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Banner.find({})
			.then(
				banner => {
					res.json(banner);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	})
	.post((req: Request, res: Response, next: NextFunction): void => {
		Banner.create(req.body)
			.then(
				banner => {
					res.json(banner);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

bannerRouter
	.route('/banners/:bannerId')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Banner.findById(req.params.bannerId)
			.then(
				banner => {
					res.json(banner);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

export { bannerRouter };
