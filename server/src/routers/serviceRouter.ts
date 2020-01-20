import { Request, Response, NextFunction, Router } from "express";
import * as bodyParser from "body-parser";
import {
    Service,
    IService,
    IServiceCategory,
    Doctor,
    Mark,
    Specialization,
    File,
    Equipment
} from "@models/";
import { ILink } from "@interfaces/";

const serviceRouter = Router();
serviceRouter.use(bodyParser.json());

serviceRouter
    .route("/services/")
    .get((req: Request, res: Response, next: NextFunction): void => {
        Service.find({})
            //.populate({ path: "doctorsId", model: Doctor })
            .then(
                service => {
                    interface IData {
                        _id: string;
                        title: string;
                        sort: number;
                        links?: ILink[];
                    }

                    const data: IData[] = service // Get categories
                        .filter((s: IService) => s.parentId === undefined)
                        .sort((
                            a: IService,
                            b: IService // Sort categories
                        ) => ((a.sort || 0) > (b.sort || 0) ? 1 : -1))
                        .map((c: IService) => {
                            // Add links
                            let links: ILink[] = service
                                .filter((s: IService) => {
                                    const _id: string = c._id.toString() || "";
                                    const parentId: string = s.parentId || "";
                                    return parentId == _id;
                                })
                                .sort((a: IService, b: IService) =>
                                    (a.sort || 0) > (b.sort || 0) ? 1 : -1
                                )
                                .map((f: IService) => {
                                    return {
                                        _id: f._id,
                                        title: f.title,
                                        sort: f.sort
                                    };
                                });

                            return {
                                _id: c._id,
                                title: c.title,
                                sort: c.sort,
                                links: links || []
                            };
                        });

                    res.json(data);
                },
                (err: Error) => next(err)
            )
            .catch((err: Error) => next(err));
    });

serviceRouter
    .route("/services/:serviceId")
    .get((req: Request, res: Response, next: NextFunction): void => {
        if (req.params.serviceId === 'undefined') {
            res.status(404).end(`Page ${req.params.serviceId} not found`);
            return;
        }

        Service.findById(req.params.serviceId)
            .populate({
                path: "doctorsId",
                model: Doctor,
                populate: [
                    { path: "marksId", model: Mark },
                    { path: "specializationsId", model: Specialization },
                    { path: "filesId", model: File }
                ]
            })
            .populate({ path: "equipmentsId", model: Equipment })
            .then(
                service => {
                    res.json(service);
                },
                (err: Error) => next(err)
            )
            .catch((err: Error) => next(err));
    });

export { serviceRouter };
