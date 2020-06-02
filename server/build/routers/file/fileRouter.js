'use strict';var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;Object.defineProperty(o,k2,{enumerable:true,get:function(){return m[k];}});}:function(o,m,k,k2){if(k2===undefined)k2=k;o[k2]=m[k];});var __setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,'default',{enumerable:true,value:v});}:function(o,v){o['default']=v;});var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod)if(Object.hasOwnProperty.call(mod,k))__createBinding(result,mod,k);__setModuleDefault(result,mod);return result;};var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{'default':mod};};Object.defineProperty(exports,'__esModule',{value:true});exports.fileRouter=void 0;const bodyParser=__importStar(require('body-parser'));const _models_1=require('../../models');const express_1=require('express');const fs_1=__importDefault(require('fs'));const md5_1=__importDefault(require('md5'));const path_1=__importDefault(require('path'));const sharp_1=__importDefault(require('sharp'));const multer=require('multer');const PUBLIC_DIR=process.env.PUBLIC_DIR||'public';const UPLOAD_DIR=process.env.UPLOAD_DIR||'uploads';const MAX_WIDTH=1600;const MAX_HEIGT=1200;const fileRouter=express_1.Router();exports.fileRouter=fileRouter;fileRouter.use(bodyParser.json());const storage=multer.memoryStorage();const upload=multer({storage});const dirPath=path_1.default.join(PUBLIC_DIR,UPLOAD_DIR);fileRouter.route('/files/').post(upload.single('file'),(req,res,next)=>{const imageHandler=new Promise(resolve=>{if(req.file===undefined){throw new Error('Error: the file was not downloaded!');}resolve(req.file);});const hash=md5_1.default(req.file.buffer);const {title,parentId}=req.body;imageHandler.then(file=>fileTypeCheck(file)).then(file=>imageRead(file)).then(image=>imageResize(image)).then(image=>imageSaveDisc(image,hash)).then(image=>imageSaveDb({id:null,src:hash+'.jpg',title:title,type:req.file.mimetype,parentId:parentId})).then(model=>{res.json(model);}).catch(e=>{res.send('Error');});});fileRouter.route('/files/:fileId').delete((req,res,next)=>{const {fileId}=req.params;_models_1.File.findById(fileId).then(file=>{if(file===null)return;_models_1.File.find({src:file===null||file===void 0?void 0:file.src}).then(files=>{if(files.length==1){console.log('delete record && file');const filePath=path_1.default.join(dirPath,file.src);fs_1.default.unlink(filePath,err=>{if(err)throw new Error('Error: the file did`t remove from dick!');});}else{console.log('delete record');}file.remove();});}).catch(err=>next(err));res.json({status:200});});const fileTypeCheck=file=>{if(['image/jpeg','image/png'].find(m=>m===file.mimetype)){return file;}else{throw new Error(`file is no valide type: ${file.mimetype}`);}};const imageRead=file=>{return sharp_1.default(file.buffer);};const imageResize=image=>{return new Promise(resolve=>{image.metadata().then(metadata=>{const {width,height}=metadata;if(width!==undefined&&height!==undefined){const _width=width-MAX_WIDTH;const _height=height-MAX_HEIGT;const checkWidth=_width<0;const checkHeight=_height<0;if(checkWidth&&checkHeight){resolve(image);return;}else{resolve(image.resize(_width>_height?{width:MAX_WIDTH}:{height:MAX_HEIGT}).jpeg());return;}}});});};const imageSaveDisc=(image,hash)=>{const filePath=path_1.default.join(dirPath,hash+'.jpg');return image.toFile(filePath).then(()=>{return image;}).catch(()=>{throw new Error('Error: the file did`t save on disc');});};const imageSaveDb=file=>{return _models_1.File.create(file).then(model=>{console.log('File rigistr in MongoDb');return model;}).catch(err=>{throw new Error('Error: the file did`t save on disc');});};