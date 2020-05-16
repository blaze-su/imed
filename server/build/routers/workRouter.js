'use strict';var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;Object.defineProperty(o,k2,{enumerable:true,get:function(){return m[k];}});}:function(o,m,k,k2){if(k2===undefined)k2=k;o[k2]=m[k];});var __setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,'default',{enumerable:true,value:v});}:function(o,v){o['default']=v;});var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod)if(Object.hasOwnProperty.call(mod,k))__createBinding(result,mod,k);__setModuleDefault(result,mod);return result;};var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{'default':mod};};Object.defineProperty(exports,'__esModule',{value:true});exports.workRouter=void 0;const path=__importStar(require('path'));const fs=__importStar(require('fs'));const multer_1=__importDefault(require('multer'));const express_1=require('express');const bodyParser=__importStar(require('body-parser'));const _models_1=require('../models');const workRouter=express_1.Router();exports.workRouter=workRouter;workRouter.use(bodyParser.json(),bodyParser.urlencoded({extended:false}));const upload=multer_1.default({dest:'resumes/'});workRouter.route('/works/').post(upload.single('file'),(req,res,next)=>{const tempPath=req.file.path;const targetPath=path.join(__dirname,'../../resumes/'+req.file.originalname);const urlPath='localhost:8000/resumes/'+req.file.originalname;const kek=req.body;kek.file=urlPath;console.log(kek);if(path.extname(req.file.originalname).toLowerCase()==='.docx'||path.extname(req.file.originalname).toLowerCase()==='.pdf'||path.extname(req.file.originalname).toLowerCase()==='.doc'){fs.rename(tempPath,targetPath,err=>{if(err){return handleError(err,res);}res.json('Загружено');});}else{fs.unlink(tempPath,err=>{if(err){return handleError(err,res);}res.json('доступны только .docx/pdf/doc');});}_models_1.Work.create(kek).then(work=>{res.json(work);},err=>next(err)).catch(err=>next(err));});const handleError=(err,res)=>{res.status(500).json('Error');};