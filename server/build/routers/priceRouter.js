'use strict';var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;Object.defineProperty(o,k2,{enumerable:true,get:function(){return m[k];}});}:function(o,m,k,k2){if(k2===undefined)k2=k;o[k2]=m[k];});var __setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,'default',{enumerable:true,value:v});}:function(o,v){o['default']=v;});var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod)if(k!=='default'&&Object.hasOwnProperty.call(mod,k))__createBinding(result,mod,k);__setModuleDefault(result,mod);return result;};var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{'default':mod};};Object.defineProperty(exports,'__esModule',{value:true});exports.priceRouter=void 0;const bodyParser=__importStar(require('body-parser'));const _models_1=require('../models');const express_1=require('express');const exceljs_1=__importDefault(require('exceljs'));const mongoose_1=__importDefault(require('mongoose'));const multer_1=__importDefault(require('multer'));const storage=multer_1.default.memoryStorage();const upload=multer_1.default({storage});const priceRouter=express_1.Router();exports.priceRouter=priceRouter;priceRouter.use(bodyParser.json());priceRouter.route('/prices/').get((req,res,next)=>{_models_1.Price.find({}).then(price=>{res.json(price);},err=>next(err)).catch(err=>next(err));});priceRouter.route('/prices/upload').put(upload.single('file'),(req,res,next)=>{_models_1.Price.deleteMany({},()=>{console.log('clear databese');});var workbook=new exceljs_1.default.Workbook();workbook.xlsx.load(req.file.buffer).then(function(){workbook.eachSheet((worksheet,sheetId)=>{let servicesId=null;let prices=Array();worksheet.eachRow({includeEmpty:true},(row,rowNumber)=>{if(rowNumber==1){const cell=row.getCell(1).value;servicesId=cell!='null'?cell:null;return;}if(rowNumber==2)return;console.log('row',rowNumber,row.getCell(1).value);if(servicesId){prices.push({title:String(row.getCell(1).value),duration:String(row.getCell(2).value),cost:String(row.getCell(3).value),description:String(row.getCell(4).value),servicesId:servicesId});}});if(servicesId){_models_1.Price.insertMany(prices).then(docs=>{console.log('price add to databse count = ',prices.length);}).catch(err=>{next(err);});}});res.send('price add to databse....');});console.log(__dirname);});priceRouter.route('/prices/service/:servicesId').get((req,res,next)=>{_models_1.Price.find({servicesId:mongoose_1.default.Types.ObjectId(req.params.servicesId)}).then(data=>{res.json(data);},err=>next(err)).catch(err=>next(err));});