'use strict';var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;Object.defineProperty(o,k2,{enumerable:true,get:function(){return m[k];}});}:function(o,m,k,k2){if(k2===undefined)k2=k;o[k2]=m[k];});var __setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,'default',{enumerable:true,value:v});}:function(o,v){o['default']=v;});var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod)if(Object.hasOwnProperty.call(mod,k))__createBinding(result,mod,k);__setModuleDefault(result,mod);return result;};Object.defineProperty(exports,'__esModule',{value:true});exports.photoRouter=void 0;const path=__importStar(require('path'));const express=__importStar(require('express'));const fs=__importStar(require('fs'));const photoRouter=express.Router();exports.photoRouter=photoRouter;const dirpath='./about';photoRouter.route('/photos').get((req,res,next)=>{fs.readdir(dirpath,(err,files)=>{if(err){next(err);}const photos=files.reduce((arr,file)=>{arr.push('http://localhost:8001/photos/'+file);return arr;},[]);res.json(photos);});});photoRouter.route('/photos/:id').get((req,res)=>{res.sendFile(path.join(__dirname,'../../about/'+req.params.id));}).delete((req,res)=>{const deletepath=dirpath+'/'+req.params.id;fs.unlinkSync(deletepath);res.json('Успешно удаленно');});