/**
 * descriptions:正式服构建方法的统一调用
 * author:aaron<1021048274@qq.com>
 * **/

const gulp=require('gulp');
const sequence = require('gulp-sequence');

//生产环境构建，
//顺序执行clean，views任务，接下来并行执行build任务
gulp.task('build', sequence(
    'clean',
    'build:fileinclude', [
        'build:styles',
        'build:images',
        'build:lib',
        'build:function',
        /*'fileinclude'*/
    ]
));
