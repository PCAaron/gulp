/**
 * descriptions:监听项目文件修改的构建流
 * author:aaron<1021048274@qq.com>
 * **/

const gulp=require('gulp');
const sequence=require('gulp-sequence');

const config=require('../config');

gulp.task('watch',()=>{
    gulp.watch(config.views.src,['fileinclude']);
    gulp.watch(config.styles.src,['styles']);
    gulp.watch(config.images.src,['images']);
    gulp.watch(config.library.src,['lib']);
    gulp.watch(config.js.src,['function']);
});