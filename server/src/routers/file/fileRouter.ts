import * as bodyParser from "body-parser";

import { File, IFile } from "@models/";

import { Router } from "express";
import fs from "fs";
import md5 from "md5";
import path from "path";
import sharp from "sharp";

import multer = require("multer");


const PUBLIC_DIR: string = process.env.PUBLIC_DIR || "public";
const UPLOAD_DIR: string = process.env.UPLOAD_DIR || "uploads";
const MAX_WIDTH = 1600;
const MAX_HEIGT = 1200;

const fileRouter = Router();
fileRouter.use(bodyParser.json());

const storage = multer.memoryStorage();
const upload = multer({ storage });

const dirPath = path.join(PUBLIC_DIR, UPLOAD_DIR);

fileRouter.route("/files/").post(upload.single("file"), (req, res, next) => {
    const imageHandler = new Promise((resolve) => {
        if (req.file === undefined) {
            throw new Error("Error: the file was not downloaded!");
        }

        resolve(req.file);
    });

    const hash = md5(req.file.buffer);
    const { title, parentId } = req.body;

    imageHandler
        .then((file) => fileTypeCheck(file))
        .then((file) => imageRead(file))
        .then((image) => imageResize(image))
        .then((image) => imageSaveDisc(image, hash))
        .then((image) =>
            imageSaveDb({
                id: null,
                src: hash + ".jpg",
                title: title,
                type: req.file.mimetype,
                parentId: parentId,
            } as IFile)
        )
        .then((model) => {
            res.json(model);
        })
        .catch((e) => {
            res.send("Error");
        });
});

fileRouter.route("/files/:fileId").delete((req, res, next) => {
    const { fileId } = req.params;
    File.findById(fileId)
        .then((file) => {
            if (file === null) return;

            File.find({ src: file?.src }).then((files) => {
                if (files.length == 1) {
                    console.log("delete record && file");
                    const filePath = path.join(dirPath, file.src);
                    fs.unlink(filePath, (err) => {
                        if (err)
                            throw new Error(
                                "Error: the file did`t remove from dick!"
                            );
                    });
                } else {
                    console.log("delete record");
                }

                file.remove();
            });
        })
        .catch((err: Error) => next(err));

    res.json({
        status: 200,
    });
});

export { fileRouter };

const fileTypeCheck = (file: any) => {
    if (["image/jpeg", "image/png"].find((m) => m === file.mimetype)) {
        return file;
    } else {
        throw new Error(`file is no valide type: ${file.mimetype}`);
    }
};

const imageRead = (file: any) => {
    return sharp(file.buffer);
};

const imageResize = (image: any) => {
    return new Promise((resolve) => {
        image.metadata().then((metadata: any) => {
            const { width, height } = metadata;
            if (width !== undefined && height !== undefined) {
                const _width = width - MAX_WIDTH;
                const _height = height - MAX_HEIGT;
                const checkWidth = _width < 0;
                const checkHeight = _height < 0;

                if (checkWidth && checkHeight) {
                    resolve(image);
                    return;
                } else {
                    resolve(
                        image
                            .resize(
                                _width > _height
                                    ? { width: MAX_WIDTH }
                                    : { height: MAX_HEIGT }
                            )
                            .jpeg()
                    );
                    return;
                }
            }
        });
    });
};

const imageSaveDisc = (image: any, hash: string) => {
    const filePath = path.join(dirPath, hash + ".jpg");
    return image
        .toFile(filePath)
        .then(() => {
            return image;

            // const data: IUploadDoRespond = {
            //     name: hash,
            //     status: "done",
            //     url: "url img",
            //     thumbUrl: "url thumbUrl",
            // };

            // res.json(data);
        })
        .catch(() => {
            throw new Error("Error: the file did`t save on disc");
        });
};

const imageSaveDb = (file: IFile) => {
    return File.create(file)
        .then((model) => {
            console.log("File rigistr in MongoDb");
            return model;
        })
        .catch((err: Error) => {
            throw new Error("Error: the file did`t save on disc");
        });
};
