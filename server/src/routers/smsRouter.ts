import { SMS_API, SMS_PHONE } from "../keys";

import { Router } from "express";
import bodyParser from "body-parser";
import fetch from "node-fetch";

const smsRouter = Router();
smsRouter.use(bodyParser.json());

smsRouter.route("/sms/").post((req, res, next) => {
    let { msn } = req.body;

    // console.log(req.body);

    msn = msn.replace("+7", "8");

    const url = `https://sms.ru/sms/send?api_id=${SMS_API}&to=${SMS_PHONE}&msg=${msn}&json=1`;
    const encodedURI = encodeURI(url);

    fetch(encodedURI)
        .then(() => {
            res.json({
                stsus: "OK",
                error: ""
            });
        })
        .catch((err: Error) => next(err));
});

export { smsRouter };
