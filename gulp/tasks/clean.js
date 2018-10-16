/**
 * descriptions:清除构建中间文件方法的统一调用
 * author:aaron<1021048274@qq.com>
 * **/

const gulp=require('gulp');

/*清除构建文件*/
gulp.task('clean',[
    'clean:views',
    'clean:styles',
    'clean:images',
    'clean:lib',
    'clean:function'
]);