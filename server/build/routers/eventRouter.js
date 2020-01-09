'use strict';var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod)if(Object.hasOwnProperty.call(mod,k))result[k]=mod[k];result['default']=mod;return result;};Object.defineProperty(exports,'__esModule',{value:true});const express_1=require('express');const bodyParser=__importStar(require('body-parser'));const _models_1=require('../models');const eventRouter=express_1.Router();exports.eventRouter=eventRouter;eventRouter.use(bodyParser.json());eventRouter.route('/events/').get((req,res,next)=>{_models_1.Event.find({}).populate([{path:'doctorsId',model:_models_1.Doctor,populate:[{path:'marksId',model:_models_1.Mark},{path:'specializationsId',model:_models_1.Specialization}]},{path:'tablesId',model:_models_1.Table},{path:'describesId',model:_models_1.Describe}]).then(event=>{res.json(event);},err=>next(err)).catch(err=>next(err));}).post((req,res,next)=>{_models_1.Event.create(req.body).then(event=>{res.json(event);},err=>next(err)).catch(err=>next(err));});eventRouter.route('/events/:eventsId').get((req,res,next)=>{_models_1.Event.findById(req.params.eventsId).populate([{path:'doctorsId',model:_models_1.Doctor,populate:[{path:'marksId',model:_models_1.Mark},{path:'specializationsId',model:_models_1.Specialization}]},{path:'tablesId',model:_models_1.Table},{path:'describesId',model:_models_1.Describe}]).then(event=>{res.json(event);},err=>next(err)).catch(err=>next(err));});