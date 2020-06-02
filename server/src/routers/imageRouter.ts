import { PUBLIC_DIR, UPLOAD_DIR } from "../keys";
import fs, { NoParamCallback } from "fs";

import { Router } from "express";
import path from "path";
import sharp from "sharp";

const imageRouter = Router();
const dirPath = path.join(PUBLIC_DIR as string, UPLOAD_DIR as string);

imageRouter.route("/images/:imageSize/:imageName").get((req, res, next) => {
    const { imageSize, imageName } = req.params;
    const imagePath = path.join(dirPath, imageName);

    const size = imageSize.split("x");
    const width = parseInt(size[0]);
    const height = parseInt(size[1]);

    const imageResizePath = path.join("/app/server/",
        PUBLIC_DIR as string,
        ".temp",
        `${width}x${height}.${imageName}`
    );

    //console.log("imageResizePath", path.resolve(imageResizePath))
    //console.log("__dirpath", __dirname)

    fs.access(imageResizePath, (err: any) => {
        if (!err) {
            console.log("create file")
            imageStream(res, imageResizePath);
        } else {
            console.log("make image resize")
            sharp(imagePath)
                .resize({ height: height, width: width })
                .toFile(imageResizePath)
                .then(() => imageStream(res, imageResizePath));
        }
    });
});

const getImageSize = (imagePath: string): number => {
    const stat = fs.statSync(imagePath);
    return stat.size;
};

const imageStream = (res: any, imageResizePath: string) => {
    res.writeHead(200, {
        "Content-Type": "image/jpeg",
        "Content-Length": getImageSize(imageResizePath),
    });

    const readStream = fs.createReadStream(imageResizePath);
    readStream.pipe(res);
};

export { imageRouter };
