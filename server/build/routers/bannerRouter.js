'use strict';var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;Object.defineProperty(o,k2,{enumerable:true,get:function(){return m[k];}});}:function(o,m,k,k2){if(k2===undefined)k2=k;o[k2]=m[k];});var __setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,'default',{enumerable:true,value:v});}:function(o,v){o['default']=v;});var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod)if(Object.hasOwnProperty.call(mod,k))__createBinding(result,mod,k);__setModuleDefault(result,mod);return result;};Object.defineProperty(exports,'__esModule',{value:true});exports.bannerRouter=void 0;const express_1=require('express');const bodyParser=__importStar(require('body-parser'));const _models_1=require('../models');const bannerRouter=express_1.Router();exports.bannerRouter=bannerRouter;bannerRouter.use(bodyParser.json());bannerRouter.route('/banners/').get((req,res,next)=>{_models_1.Banner.find({}).then(banner=>{res.json(banner);},err=>next(err)).catch(err=>next(err));}).post((req,res,next)=>{_models_1.Banner.create(req.body).then(banner=>{res.json(banner);},err=>next(err)).catch(err=>next(err));});bannerRouter.route('/banners/:bannerId').get((req,res,next)=>{_models_1.Banner.findById(req.params.bannerId).then(banner=>{res.json(banner);},err=>next(err)).catch(err=>next(err));});