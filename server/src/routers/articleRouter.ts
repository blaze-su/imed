import { Request, Response, NextFunction, Router } from 'express';
import * as bodyParser from 'body-parser';
import { Article, Chapter, Contr, Mark, Price } from '@models/';

const articleRouter = Router();
articleRouter.use(bodyParser.json());

articleRouter
	.route('/articles/')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Article.find({})
			.populate([
				{ path: 'chaptersId', model: Chapter },
				{ path: 'contrsId', model: Contr },
				{ path: 'marksId', model: Mark },
				{ path: 'pricesId', model: Price }
			])
			.then(
				article => {
					res.json(article);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	})
	.post((req: Request, res: Response, next: NextFunction): void => {
		Article.create(req.body)
			.then(
				article => {
					res.json(article);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

articleRouter
	.route('/articles/:articleId')
	.get((req: Request, res: Response, next: NextFunction): void => {
		Article.findById(req.params.articleId)
			.populate([
				{ path: 'chaptersId', model: Chapter },
				{ path: 'contrsId', model: Contr },
				{ path: 'marksId', model: Mark },
				{ path: 'pricesId', model: Price }
			])
			.then(
				article => {
					res.json(article);
				},
				(err: Error) => next(err)
			)
			.catch((err: Error) => next(err));
	});

export { articleRouter };
