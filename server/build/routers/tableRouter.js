'use strict';var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod)if(Object.hasOwnProperty.call(mod,k))result[k]=mod[k];result['default']=mod;return result;};Object.defineProperty(exports,'__esModule',{value:true});const express_1=require('express');const bodyParser=__importStar(require('body-parser'));const _models_1=require('../models');const tableRouter=express_1.Router();exports.tableRouter=tableRouter;tableRouter.use(bodyParser.json());tableRouter.route('/tables/').get((req,res,next)=>{_models_1.Table.find({}).then(table=>{res.json(table);},err=>next(err)).catch(err=>next(err));}).post((req,res,next)=>{_models_1.Table.create(req.body).then(table=>{res.json(table);},err=>next(err)).catch(err=>next(err));});tableRouter.route('/tables/:tablesId').get((req,res,next)=>{_models_1.Table.findById(req.params.tablesId).then(table=>{res.json(table);},err=>next(err)).catch(err=>next(err));});