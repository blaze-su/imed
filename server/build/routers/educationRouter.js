'use strict';var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod)if(Object.hasOwnProperty.call(mod,k))result[k]=mod[k];result['default']=mod;return result;};Object.defineProperty(exports,'__esModule',{value:true});const express_1=require('express');const bodyParser=__importStar(require('body-parser'));const _models_1=require('../models');const educationRouter=express_1.Router();exports.educationRouter=educationRouter;educationRouter.use(bodyParser.json());educationRouter.route('/educations/').get((req,res,next)=>{_models_1.Education.find({}).then(education=>{res.json(education);},err=>next(err)).catch(err=>next(err));}).post((req,res,next)=>{_models_1.Education.create(req.body).then(education=>{res.json(education);},err=>next(err)).catch(err=>next(err));});educationRouter.route('/educations/:educationsId').get((req,res,next)=>{_models_1.Education.findById(req.params.educationsId).then(education=>{res.json(education);},err=>next(err)).catch(err=>next(err));});