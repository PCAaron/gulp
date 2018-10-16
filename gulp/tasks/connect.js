/**
 * descriptions:本地启动静态服务器及构建方法的统一调用
 * author:aaron<1021048274@qq.com>
 * **/

const gulp=require('gulp');
const sequence = require('gulp-sequence');
const connect=require('gulp-connect');
const proxy=require('http-proxy-middleware');//easy-mock代理接口：sharedhome/123456

const config=require('../config').host;

gulp.task('server',()=>{
    connect.server({
        name:config.name,
        root:config.path,
        port:config.port,
        host:'0.0.0.0',
        livereload:true,
        middleware:(connect,opt)=>{
            return [
                proxy('/api',{
                    //target:'https://www.easy-mock.com/mock/5b0cc3cc6224f3257a8f240c/',
                    target:config.proxyTarget,
                    changeOrigin:true
                })
            ]
        }
    })
});

//本地开发模拟环境构建，
//顺序执行clean，view任务，接下来并行执行相关任务并启动本地静态服务
gulp.task('connect', sequence(
    'clean',
    'fileinclude', [
        'styles',
        'images',
        'lib',
        'function',
        /*'fileinclude',*/
        'server',
        'watch'
    ])
);
