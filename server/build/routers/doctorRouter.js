'use strict';var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;Object.defineProperty(o,k2,{enumerable:true,get:function(){return m[k];}});}:function(o,m,k,k2){if(k2===undefined)k2=k;o[k2]=m[k];});var __setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,'default',{enumerable:true,value:v});}:function(o,v){o['default']=v;});var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod)if(Object.hasOwnProperty.call(mod,k))__createBinding(result,mod,k);__setModuleDefault(result,mod);return result;};Object.defineProperty(exports,'__esModule',{value:true});exports.doctorRouter=void 0;const bodyParser=__importStar(require('body-parser'));const _models_1=require('../models');const express_1=require('express');const doctorRouter=express_1.Router();exports.doctorRouter=doctorRouter;doctorRouter.use(bodyParser.json());doctorRouter.route('/doctors/').get((req,res,next)=>{_models_1.Doctor.find({}).sort('sort').populate([{path:'marksId',model:_models_1.Mark},{path:'specializationsId',model:_models_1.Specialization},{path:'filesId',model:_models_1.File}]).then(doctor=>{res.json(doctor);},err=>next(err)).catch(err=>next(err));});doctorRouter.route('/doctors/:doctorId').get((req,res,next)=>{_models_1.Doctor.findById(req.params.doctorId).populate([{path:'marksId',model:_models_1.Mark},{path:'specializationsId',model:_models_1.Specialization},{path:'filesId',model:_models_1.File}]).then(doctor=>{res.json(doctor);},err=>next(err)).catch(err=>next(err));});