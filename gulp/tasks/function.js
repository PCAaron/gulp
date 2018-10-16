/**
 * descriptions:js模块的方法ES6编译，代码压缩的构建流
 * author:aaron<1021048274@qq.com>
 * **/

const gulp=require('gulp');
const uglify=require('gulp-uglify');
const clean=require('gulp-clean');
const babel=require('gulp-babel');

const config=require('../config').js;

gulp.task('function', ()=> {
    return gulp.src(config.src)
        .pipe(babel({
            presets:['env']
        }))
        .pipe(gulp.dest(config.dest))
});

gulp.task('build:function', ()=> {
    return gulp.src(config.src)
        .pipe(babel({
            presets:['env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest(config.dest))
});

gulp.task('clean:function',()=> {
    return gulp.src(config.dest, {read: false})
        .pipe(clean({force: true}))
});