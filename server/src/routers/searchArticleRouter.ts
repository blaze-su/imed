import { Request, Response, NextFunction, Router } from 'express';
import * as bodyParser from 'body-parser';
import { Article, Mark } from '@models/';

const searchArticleRouter = Router();
searchArticleRouter.use(bodyParser.json());

searchArticleRouter
	.route('/searchArticle/:searchArticleId')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Article.find({ $text: { $search: req.params.searchArticleId } })
			.populate({ path: 'marksId', model: Mark })
			.then(
				article => {
					res.json(article);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

export { searchArticleRouter };
