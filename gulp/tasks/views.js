/**
 * descriptions:视图文件html的构建流
 * author:aaron<1021048274@qq.com>
 * **/

const gulp=require('gulp');
const htmlmin=require('gulp-htmlmin');
const clean=require('gulp-clean');

const config=require('../config').views;

gulp.task('views',()=>{
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest))
});

gulp.task('build:views',()=>{
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: false,//压缩HTML
        collapseBooleanAttributes: false,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    return gulp.src(config.src)
        .pipe(htmlmin(options))
        .pipe(gulp.dest(config.dest))
});

gulp.task('clean:views',()=>{
    return gulp.src([config.dest+'/*.html'],
        {read:false})
        .pipe(clean({force: true}));
});

