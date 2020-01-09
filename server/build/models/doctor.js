'use strict';var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod)if(Object.hasOwnProperty.call(mod,k))result[k]=mod[k];result['default']=mod;return result;};Object.defineProperty(exports,'__esModule',{value:true});const mongoose=__importStar(require('mongoose'));const doctorSchema=new mongoose.Schema({name:{required:true,type:String,text:true},describe:{type:String,text:true,required:true},education:{type:[String],required:true,text:true},experience:{type:String,required:true,text:true},marksId:{type:[mongoose.Schema.Types.ObjectId],ref:'Mark'},specializationsId:{type:[mongoose.Schema.Types.ObjectId],ref:'Specialization'},filesId:{type:[mongoose.Schema.Types.ObjectId],ref:'File',required:true},description:{type:[String],required:true,text:true}});exports.Doctor=mongoose.model('Doctor',doctorSchema);