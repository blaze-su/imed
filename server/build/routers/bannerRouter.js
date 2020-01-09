'use strict';var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod)if(Object.hasOwnProperty.call(mod,k))result[k]=mod[k];result['default']=mod;return result;};Object.defineProperty(exports,'__esModule',{value:true});const express_1=require('express');const bodyParser=__importStar(require('body-parser'));const _models_1=require('../models');const bannerRouter=express_1.Router();exports.bannerRouter=bannerRouter;bannerRouter.use(bodyParser.json());bannerRouter.route('/banners/').get((req,res,next)=>{_models_1.Banner.find({}).then(banner=>{res.json(banner);},err=>next(err)).catch(err=>next(err));}).post((req,res,next)=>{_models_1.Banner.create(req.body).then(banner=>{res.json(banner);},err=>next(err)).catch(err=>next(err));});bannerRouter.route('/banners/:bannerId').get((req,res,next)=>{_models_1.Banner.findById(req.params.bannerId).then(banner=>{res.json(banner);},err=>next(err)).catch(err=>next(err));});