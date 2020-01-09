'use strict';var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod)if(Object.hasOwnProperty.call(mod,k))result[k]=mod[k];result['default']=mod;return result;};Object.defineProperty(exports,'__esModule',{value:true});const express_1=require('express');const bodyParser=__importStar(require('body-parser'));const _models_1=require('../models');const informationRouter=express_1.Router();exports.informationRouter=informationRouter;informationRouter.use(bodyParser.json(),bodyParser.urlencoded({extended:false}));informationRouter.route('/informations/').get((req,res,next)=>{_models_1.Information.find({}).then(information=>{res.json(information);},err=>next(err)).catch(err=>next(err));});informationRouter.route('/informations/:informationId').get((req,res,next)=>{_models_1.Information.findById(req.params.informationId).then(information=>{res.json(information);},err=>next(err)).catch(err=>next(err));});