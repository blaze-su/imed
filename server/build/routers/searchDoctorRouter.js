'use strict';var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod)if(Object.hasOwnProperty.call(mod,k))result[k]=mod[k];result['default']=mod;return result;};Object.defineProperty(exports,'__esModule',{value:true});const express_1=require('express');const bodyParser=__importStar(require('body-parser'));const _models_1=require('../models');const searchDoctorRouter=express_1.Router();exports.searchDoctorRouter=searchDoctorRouter;searchDoctorRouter.use(bodyParser.json());searchDoctorRouter.route('/searchDoctor/:searchDoctorId').get((req,res,next)=>{_models_1.Doctor.find({$text:{$search:req.params.searchDoctorId}}).populate({path:'specializationsId',model:_models_1.Specialization}).then(doctor=>{res.json(doctor);},err=>next(err)).catch(err=>next(err));});