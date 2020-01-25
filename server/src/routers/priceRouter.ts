import { Request, Response, NextFunction, Router } from "express";
import mongoose from 'mongoose';
import * as bodyParser from "body-parser";
import { Price, IPrice } from "@models/";
import Excel from "exceljs";
import path from "path";

const priceRouter = Router();
priceRouter.use(bodyParser.json());

priceRouter
    .route("/prices/")
    .get((req: Request, res: Response, next: NextFunction): void => {
        Price.find({})
            .then(
                price => {
                    res.json(price);
                },
                (err: Error) => next(err)
            )
            .catch((err: Error) => next(err));
    });

priceRouter
    .route("/prices/upload")
    .get((req: Request, res: Response, next: NextFunction): void => {
        Price.deleteMany({}, () => {
            console.log("clear databese");
        });

        const excelPath = path.join(__dirname, "../../price.xlsx");

        var workbook = new Excel.Workbook();
        workbook.xlsx.readFile(excelPath).then(function() {
            workbook.eachSheet((worksheet, sheetId) => {
                const servicesId = worksheet.name;
                let prices: IPrice[] = Array<IPrice>();
                console.log("servicesId", servicesId);
                worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
                    prices.push({
                        title: String(row.getCell(1).value),
                        duration: String(row.getCell(2).value),
                        cost: String(row.getCell(3).value),
                        description: String(row.getCell(4).value),
                        servicesId: servicesId
                    });
                });

                Price.insertMany(prices)
                    .then(docs => {
                        console.log(
                            "price add to databse count = ",
                            prices.length
                        );
                    })
                    .catch(err => {
                        next(err);
                    });
            });

            res.send("price add to databse....");
        });

        console.log(__dirname);

        // res.send("upload....");
    });

priceRouter
    .route("/prices/service/:servicesId")
    .get((req: Request, res: Response, next: NextFunction): void => {
        Price.find({ "servicesId": mongoose.Types.ObjectId(req.params.servicesId) })
            .then(
                data => {
                    res.json(data);
                },
                (err: Error) => next(err)
            )
            .catch((err: Error) => next(err));
    });

export { priceRouter };
