import { Request, Response, NextFunction, Router } from 'express';
import * as bodyParser from 'body-parser';
import { Meeting } from '@models/';

const meetingRouter = Router();
meetingRouter.use(
	bodyParser.json(),
	bodyParser.urlencoded({ extended: false })
);

meetingRouter
	.route('/meetings/')

	.post((req: Request, res: Response, next: NextFunction): void => {
		console.log(req.body.name);
		Meeting.create(req.body)
			.then(
				meeting => {
					res.json(meeting);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	})
	.get((req: Request, res: Response, next: NextFunction): void => {
		Meeting.find({})
			.then(
				meeting => {
					res.json(meeting);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

export { meetingRouter };
