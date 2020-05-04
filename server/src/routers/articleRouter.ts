import { Request, Response, NextFunction, Router } from "express";
import * as bodyParser from "body-parser";
import { IArticle, Article, File, Mark, IChunk } from "@models/";

const articleRouter = Router();
articleRouter.use(bodyParser.json());

articleRouter
    .route("/articles/")
    .get((req: Request, res: Response, next: NextFunction): void => {
        Article.find({})
            .populate([
                { path: "fileId", model: File },
                { path: "marksId", model: Mark },
            ])
            .then(
                (article) => {
                    res.json(article);
                },
                (err: Error) => next(err)
            )
            .catch((err: Error) => next(err));
    })
    .post((req: Request, res: Response, next: NextFunction): void => {
        Article.create(req.body)
            .then(
                (article) => {
                    res.json(article);
                },
                (err: Error) => next(err)
            )
            .catch((err: Error) => next(err));
    });

articleRouter
    .route("/articles/:articleId")
    .get((req: Request, res: Response, next: NextFunction): void => {
        Article.findById(req.params.articleId)
            .populate([
                { path: "marksId", model: Mark },
                { path: "fileId", model: File },
                { path: "chunks.image.fileId", model: File },
            ])
            .then(
                (article) => {
                    res.json(article);
                },
                (err: Error) => next(err)
            )
            .catch((err: Error) => next(err));
    })
    .put((req, res, next) => {
        // добавить проверку доступа и CORS
        console.log(req.body);

        Article.findById(req.params.articleId)
            .then((model) => Object.assign(model, req.body))
            .then((model) => model.save())
            .then(
                (article) => {
                    res.json(article);
                },
                (err: Error) => next(err)
            )
            .catch((err: Error) => next(err));
    });

articleRouter.route("/articles/:articleId/chunks/").post((req, res, next) => {
    const { articleId } = req.params;
    const chunk: IChunk = req.body;

    Article.findById(articleId)
        .then((model) => {
            if (model !== null) {
                if (chunk.sort == 0)
                    chunk.sort = 10 + model?.chunks.length * 10;

                if ((chunk.type = "TITLE")) {
                    model.chunks = [...model.chunks, chunk];
                }
            }

            return model;
        })
        .then((model: any) => model.save())
        .then(
            (article) => {
                res.json(article);
            },
            (err: Error) => next(err)
        )
        .catch((err: Error) => next(err));
});

articleRouter
    .route("/articles/:articleId/chunks/:chunkId")
    .put((req, res, next) => {
        const { articleId, chunkId } = req.params;
        const chunk: IChunk = req.body;

        Article.findById(articleId)
            .then((model) => {
                if (model !== null) {
                    model.chunks = model.chunks.map((item: IChunk) => {
                        if ((item._id as string) == chunkId) {
                            if (item.type == "TITLE")
                                return Object.assign(item, chunk);

                            if (item.type == "PARAGRAPH")
                                return Object.assign(item, chunk);
                        }

                        return item;
                    });
                }
                return model;
            })
            .then((model) => model?.save())
            .then(
                (article) => {
                    res.json(article);
                },
                (err: Error) => next(err)
            )
            .catch((err: Error) => next(err));
    })
    .delete((req, res, next) => {
        const { articleId, chunkId } = req.params;

        Article.findById(articleId)
            .then((model) => {
                if (model !== null) {
                    model.chunks = model.chunks.filter(
                        (chunk: IChunk) => (chunk._id as string) != chunkId
                    );
                }
                return model;
            })
            .then((model) => model?.save())
            .then(
                (article) => {
                    res.json(article);
                },
                (err: Error) => next(err)
            )
            .catch((err: Error) => next(err));
    });

export { articleRouter };
