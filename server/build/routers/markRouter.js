'use strict';var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;Object.defineProperty(o,k2,{enumerable:true,get:function(){return m[k];}});}:function(o,m,k,k2){if(k2===undefined)k2=k;o[k2]=m[k];});var __setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,'default',{enumerable:true,value:v});}:function(o,v){o['default']=v;});var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod)if(k!=='default'&&Object.hasOwnProperty.call(mod,k))__createBinding(result,mod,k);__setModuleDefault(result,mod);return result;};Object.defineProperty(exports,'__esModule',{value:true});exports.markRouter=void 0;const express_1=require('express');const bodyParser=__importStar(require('body-parser'));const _models_1=require('../models');const markRouter=express_1.Router();exports.markRouter=markRouter;markRouter.use(bodyParser.json());markRouter.route('/marks/').get((req,res,next)=>{_models_1.Mark.find({}).then(mark=>{res.json(mark);},err=>next(err)).catch(err=>next(err));});markRouter.route('/marks/:markId').get((req,res,next)=>{_models_1.Mark.findById(req.params.markId).then(mark=>{res.json(mark);},err=>next(err)).catch(err=>next(err));});