/**
 * descriptions:样式文件处理：css hack，css压缩的构建流
 * author:aaron<1021048274@qq.com>
 * **/

const gulp=require('gulp');
const cssmin=require('gulp-clean-css');
const autoprefixer=require('gulp-autoprefixer');
const clean=require('gulp-clean');

const config=require('../config').styles;

gulp.task('styles',()=>{
    return gulp.src(config.src)
        .pipe(autoprefixer({
            browsers:['last 2 versions','>2%'],
            cascade:true
        }))
        .pipe(gulp.dest(config.dest))
});

gulp.task('build:styles',()=>{
    return gulp.src(config.src)
        .pipe(autoprefixer({
            browsers:['last 2 versions','>2%'],
            cascade:true
        }))
        .pipe(cssmin({
            advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: '*',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: true,//类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*'
            //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        }))
        .pipe(gulp.dest(config.dest))
});

gulp.task('clean:styles',()=>{
    return gulp.src([config.dest], {read: false})
        .pipe(clean({force: true}))
});