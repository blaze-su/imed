import { Request, Response, NextFunction, Router } from "express";
import * as bodyParser from "body-parser";
import { Price } from "@models/";
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
        const excelPath = path.join(__dirname, "../../price.xlsx");

        var workbook = new Excel.Workbook();
        workbook.xlsx.readFile(excelPath).then(function() {
            workbook.eachSheet((worksheet, sheetId) => {
                console.log(worksheet.name);
                worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
                    console.log(
                        "Row " + rowNumber + " = " + JSON.stringify(row.getCell(1).value)
                    );
                });
            });
        });

        console.log(__dirname);

        res.send("upload....");
    });

priceRouter
    .route("/prices/:priceId")
    .get((req: Request, res: Response, next: NextFunction): void => {
        Price.findById(req.params.priceId).then();
    });

export { priceRouter };
