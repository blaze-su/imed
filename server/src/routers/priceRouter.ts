import * as bodyParser from "body-parser";

import { IPrice, Price, Service } from "@models/";
import { NextFunction, Request, Response, Router } from "express";

import Excel from "exceljs";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const priceRouter = Router();
priceRouter.use(bodyParser.json());

priceRouter
    .route("/prices/")
    .get((req: Request, res: Response, next: NextFunction): void => {
        Price.find({})
            .then(
                (price) => {
                    res.json(price);
                },
                (err: Error) => next(err)
            )
            .catch((err: Error) => next(err));
    });

priceRouter
    .route("/prices/upload")
    .put(
        upload.single("file"),
        (req: Request, res: Response, next: NextFunction): void => {
            Price.deleteMany({}, () => {
                console.log("clear databese");
            });

            //const excelPath = path.join(__dirname, "../../price.xlsx");

            var workbook = new Excel.Workbook();
            workbook.xlsx.load(req.file.buffer).then(function () {
                workbook.eachSheet((worksheet, sheetId) => {
                    let servicesId: string | null = null;
                    let prices: IPrice[] = Array<IPrice>();

                    worksheet.eachRow(
                        { includeEmpty: true },
                        (row, rowNumber) => {
                            if (rowNumber == 1) {
                                const cell = row.getCell(1).value as string;
                                servicesId =
                                    cell != "null" ? cell : null;
                                return;
                            }
                            if (rowNumber == 2) return;
                            console.log("row", rowNumber, row.getCell(1).value);

                            if (servicesId) {
                                prices.push({
                                    title: String(row.getCell(1).value),
                                    duration: String(row.getCell(2).value),
                                    cost: String(row.getCell(3).value),
                                    description: String(row.getCell(4).value),
                                    servicesId: servicesId,
                                });
                            }
                        }
                    );

                    if (servicesId) {
                        Price.insertMany(prices)
                            .then((docs) => {
                                console.log(
                                    "price add to databse count = ",
                                    prices.length
                                );
                            })
                            .catch((err) => {
                                next(err);
                            });
                    }
                });

                res.send("price add to databse....");
            });

            console.log(__dirname);

            // res.send("upload....");
        }
    );

priceRouter
    .route("/prices/service/:servicesId")
    .get((req: Request, res: Response, next: NextFunction): void => {
        Price.find({
            servicesId: mongoose.Types.ObjectId(req.params.servicesId),
        })
            .then(
                (data) => {
                    res.json(data);
                },
                (err: Error) => next(err)
            )
            .catch((err: Error) => next(err));
    });

export { priceRouter };
