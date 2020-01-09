'use strict';var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod)if(Object.hasOwnProperty.call(mod,k))result[k]=mod[k];result['default']=mod;return result;};Object.defineProperty(exports,'__esModule',{value:true});const mongoose=__importStar(require('mongoose'));const articleSchema=new mongoose.Schema({title:{required:true,type:String,text:true},preview:{type:String,required:true,text:true},chaptersId:{type:[mongoose.Schema.Types.ObjectId],ref:'Chapter'},contrsId:{type:mongoose.Schema.Types.ObjectId,ref:'Contr'},photo:{type:String},marksId:{type:[mongoose.Schema.Types.ObjectId],ref:'Mark'},pricesId:{type:[mongoose.Schema.Types.ObjectId],ref:'Price'}});exports.Article=mongoose.model('Article',articleSchema);