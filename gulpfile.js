/**
 * descriptions:gulp构建工具编译入口
 * author:aaron<1021048274@qq.com>
 * **/

const requireDir = require('require-dir');

// 递归引入gulp/tasks目录下的文件
requireDir('./gulp/tasks', { recurse: true });