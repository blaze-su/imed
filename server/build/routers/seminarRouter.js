'use strict';var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;Object.defineProperty(o,k2,{enumerable:true,get:function(){return m[k];}});}:function(o,m,k,k2){if(k2===undefined)k2=k;o[k2]=m[k];});var __setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,'default',{enumerable:true,value:v});}:function(o,v){o['default']=v;});var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod)if(Object.hasOwnProperty.call(mod,k))__createBinding(result,mod,k);__setModuleDefault(result,mod);return result;};Object.defineProperty(exports,'__esModule',{value:true});exports.seminarRouter=void 0;const express_1=require('express');const bodyParser=__importStar(require('body-parser'));const _models_1=require('../models');const seminarRouter=express_1.Router();exports.seminarRouter=seminarRouter;seminarRouter.use(bodyParser.json());seminarRouter.route('/seminars/').get((req,res,next)=>{_models_1.Seminar.find({}).then(seminar=>{res.json(seminar);},err=>next(err)).catch(err=>next(err));}).post((req,res,next)=>{_models_1.Seminar.create(req.body).then(seminar=>{console.log('Фотография добавлена');res.json(seminar);},err=>next(err)).catch(err=>next(err));}).put((req,res)=>{res.status(403).end('PUT не поддерживается на /seminars');}).delete((req,res,next)=>{_models_1.Seminar.remove({}).then(resp=>{res.json(resp);},err=>next(err)).catch(err=>next(err));});seminarRouter.route('/seminars/:seminarId').get((req,res,next)=>{_models_1.Seminar.findById(req.params.seminarId).then(seminar=>{res.json(seminar);},err=>next(err)).catch(err=>next(err));}).post((req,res)=>{res.status(403).end('POST не поддерживается на /seminars/'+req.params.seminarId);}).put((req,res,next)=>{_models_1.Seminar.findByIdAndUpdate(req.params.seminarId,{$set:req.body},{new:true}).then(seminar=>{res.json(seminar);},err=>next(err)).catch(err=>next(err));}).delete((req,res,next)=>{_models_1.Seminar.findByIdAndRemove(req.params.seminarId).then(resp=>{res.json({message:'удалена'});},err=>next(err)).catch(err=>next(err));});