'use strict';var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod)if(Object.hasOwnProperty.call(mod,k))result[k]=mod[k];result['default']=mod;return result;};Object.defineProperty(exports,'__esModule',{value:true});const express_1=require('express');const bodyParser=__importStar(require('body-parser'));const _models_1=require('../models');const vacancyRouter=express_1.Router();exports.vacancyRouter=vacancyRouter;vacancyRouter.use(bodyParser.json());vacancyRouter.route('/vacancies/').get((req,res,next)=>{_models_1.Vacancy.find({}).then(vacancy=>{res.json(vacancy);},err=>next(err)).catch(err=>next(err));}).post((req,res,next)=>{_models_1.Vacancy.create(req.body).then(vacancy=>{console.log('Фотография добавлена');res.json(vacancy);},err=>next(err)).catch(err=>next(err));}).put((req,res)=>{res.status(403).end('PUT не поддерживается на /vacancies');}).delete((req,res,next)=>{_models_1.Vacancy.remove({}).then(resp=>{res.json(resp);},err=>next(err)).catch(err=>next(err));});vacancyRouter.route('/vacancies/:vacancyId').get((req,res,next)=>{_models_1.Vacancy.findById(req.params.vacancyId).then(vacancy=>{res.json(vacancy);},err=>next(err)).catch(err=>next(err));}).post((req,res)=>{res.status(403).end('POST не поддерживается на /vacancies/'+req.params.vacancyId);}).put((req,res,next)=>{_models_1.Vacancy.findByIdAndUpdate(req.params.vacancyId,{$set:req.body},{new:true}).then(vacancy=>{res.json(vacancy);},err=>next(err)).catch(err=>next(err));}).delete((req,res,next)=>{_models_1.Vacancy.findByIdAndRemove(req.params.vacancyId).then(resp=>{res.json({message:'удалена'});},err=>next(err)).catch(err=>next(err));});