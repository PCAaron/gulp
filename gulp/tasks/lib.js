/**
 * descriptions:引入文件的的构建流
 * author:aaron<1021048274@qq.com>
 * **/

const gulp=require('gulp');
const uglify=require('gulp-uglify');
const clean=require('gulp-clean');

const config=require('../config').library;

gulp.task('lib',()=>{
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest))
});

gulp.task('build:lib',()=>{
    return gulp.src(config.src)
        .pipe(uglify())
        .pipe(gulp.dest(config.dest))
});

gulp.task('clean:lib',()=>{
    return gulp.src([config.dest], {read: false})
        .pipe(clean({force: true}))
});
