/**
 * descriptions:图片文件压缩处理的构建流
 * author:aaron<1021048274@qq.com>
 * **/

const gulp=require('gulp');
const imagemin=require('gulp-imagemin');
const clean=require('gulp-clean');

const config=require('../config').images;

gulp.task('images',()=>{
    return gulp.src(config.src)
        .pipe(imagemin())
        .pipe(gulp.dest(config.dest))
});

gulp.task('build:images',['images']);

gulp.task('clean:images',()=>{
    return gulp.src(config.dest, {read: false})
        .pipe(clean({force: true}))
});