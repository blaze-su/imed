'use strict';var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod)if(Object.hasOwnProperty.call(mod,k))result[k]=mod[k];result['default']=mod;return result;};Object.defineProperty(exports,'__esModule',{value:true});const express_1=require('express');const bodyParser=__importStar(require('body-parser'));const _models_1=require('../models');const reviewRouter=express_1.Router();exports.reviewRouter=reviewRouter;reviewRouter.use(bodyParser.json());reviewRouter.route('/reviews/').get((req,res,next)=>{_models_1.Review.find({}).then(review=>{res.json(review);},err=>next(err)).catch(err=>next(err));}).post((req,res,next)=>{_models_1.Review.create(req.body).then(review=>{console.log('Фотография добавлена');res.json(review);},err=>next(err)).catch(err=>next(err));}).put((req,res)=>{res.status(403).end('PUT не поддерживается на /reviews');}).delete((req,res,next)=>{_models_1.Review.remove({}).then(resp=>{res.json(resp);},err=>next(err)).catch(err=>next(err));});reviewRouter.route('/reviews/:reviewId').get((req,res,next)=>{_models_1.Review.findById(req.params.reviewId).then(review=>{res.json(review);},err=>next(err)).catch(err=>next(err));}).post((req,res)=>{res.status(403).end('POST не поддерживается на /reviews/'+req.params.reviewId);}).put((req,res,next)=>{_models_1.Review.findByIdAndUpdate(req.params.reviewId,{$set:req.body},{new:true}).then(review=>{res.json(review);},err=>next(err)).catch(err=>next(err));}).delete((req,res,next)=>{_models_1.Review.findByIdAndRemove(req.params.reviewId).then(resp=>{res.json({message:'удалена'});},err=>next(err)).catch(err=>next(err));});