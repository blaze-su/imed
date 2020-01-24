import { Request, Response, NextFunction, Router } from "express";
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
                console.log('servicesId', servicesId);
                worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
              
                    prices.push({
                        title: String(row.getCell(1).value),
                        cost: "1000",
                        servicesId: servicesId
                    })
                });

                Price.insertMany(prices)
                    .then( docs => {
                        console.log("price add to databse count = ", prices.length);
                    })
                    .catch(err => {
                        next(err);
                    })
            });

            res.send("price add to databse....");
        });

        console.log(__dirname);

        // res.send("upload....");
    });

priceRouter
    .route("/prices/:priceId")
    .get((req: Request, res: Response, next: NextFunction): void => {
        Price.findById(req.params.priceId).then();
    });

export { priceRouter };
