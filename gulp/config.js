/**
 * descriptions:配置文件
 * author:aaron<1021048274@qq.com>
 * **/

const path=require('path');
const developDir=path.resolve(process.cwd(),'Develop');
const productionDir=path.resolve(process.cwd(),'Production');

module.exports={
    developDir:developDir,
    productionDir:productionDir,

    /*host设置*/
    host:{
        name:'commonGulp',
        path: productionDir,
        port: 8001,
        html: 'index.html',
        proxyTarget:''//代理接口
    },

    /*视图路径*/
    views:{
        src:developDir+'/**/*.html',
        dest:productionDir,
        baseinclude:developDir+'/common'
    },
    /*图片路径*/
    images:{
        src:developDir+'/images/*.{png,jpg,jpeg,gif}',
        dest:productionDir+'/images/'
    },
    /*样式路径*/
    styles:{
        src:developDir+'/css/**/*.css',
        dest:productionDir+'/css'
    },
    /*lib路径*/
    library:{
        src:developDir+'/library/**/*.js',
        dest:productionDir+'/library/'
    },
    /*自定义js路径*/
    js:{
        src:developDir+'/js/**/*.js',
        dest:productionDir+'/js'
    }
};