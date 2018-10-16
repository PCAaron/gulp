/**
 * descriptions:测试服构建方法的统一调用
 * author:aaron<1021048274@qq.com>
 * **/

const gulp=require('gulp');
const sequence = require('gulp-sequence');

//开发环境构建，
//顺序执行clean，views任务，接下来并行执行dev任务
gulp.task('default', sequence(
    'clean',
    'fileinclude', [
        'styles',
        'images',
        'lib',
        'function',
        /*'fileinclude',*/
        'watch'
    ]
));


