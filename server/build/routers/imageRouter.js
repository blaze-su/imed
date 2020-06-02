'use strict';var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{'default':mod};};Object.defineProperty(exports,'__esModule',{value:true});exports.imageRouter=void 0;const keys_1=require('../keys');const fs_1=__importDefault(require('fs'));const express_1=require('express');const path_1=__importDefault(require('path'));const sharp_1=__importDefault(require('sharp'));const imageRouter=express_1.Router();exports.imageRouter=imageRouter;const dirPath=path_1.default.join(keys_1.PUBLIC_DIR,keys_1.UPLOAD_DIR);imageRouter.route('/images/:imageSize/:imageName').get((req,res,next)=>{const {imageSize,imageName}=req.params;const imagePath=path_1.default.join(dirPath,imageName);const size=imageSize.split('x');const width=parseInt(size[0]);const height=parseInt(size[1]);const imageResizePath=path_1.default.join('/app/server/',keys_1.PUBLIC_DIR,'_temp',`${width}x${height}.${imageName}`);fs_1.default.access(imageResizePath,err=>{if(!err){console.log('create file');imageStream(res,imageResizePath);}else{console.log('make image resize');sharp_1.default(imagePath).resize({height:height,width:width}).toFile(imageResizePath).then(()=>imageStream(res,imageResizePath));}});});const getImageSize=imagePath=>{const stat=fs_1.default.statSync(imagePath);return stat.size;};const imageStream=(res,imageResizePath)=>{res.writeHead(200,{'Content-Type':'image/jpeg','Content-Length':getImageSize(imageResizePath)});const readStream=fs_1.default.createReadStream(imageResizePath);readStream.pipe(res);};