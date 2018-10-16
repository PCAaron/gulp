/**
 * descriptions:通用模块的方法抽离的构建流
 * author:aaron<1021048274@qq.com>
 * **/

const gulp=require('gulp');
const fileinclude=require('gulp-file-include');

const config=require('../config').views;

gulp.task('fileinclude',['views'],()=>{
    return gulp.src(config.src)
        .pipe(fileinclude({
            prefix:'@@',//变量前缀 @@include
            basepath:config.baseinclude,//引用文件路径
            indent:true //保留文件的缩进
        }))
        .pipe(gulp.dest(config.dest))
});

gulp.task('build:fileinclude',['build:views'],()=>{
    return gulp.src(config.src)
        .pipe(fileinclude({
            prefix:'@@',//变量前缀 @@include
            basepath:config.baseinclude,//引用文件路径
            indent:true //保留文件的缩进
        }))
        .pipe(gulp.dest(config.dest))
});