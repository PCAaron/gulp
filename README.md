# 自定义通用gulp打包流程
> 自定义项目结构及gulp打包任务队列进行前端模块压缩打包

## gulp构建框架
````
.
├── Develop // 项目结构
│   └── common //通用静态模块
│       └── x.inc
│       └── ...
│   └── css //css样式
│       └── x.css
│       └── ...
│   └── images // 图片
│       └── ...
│   └── js // js文件
│       └── x.js
│       └── ...
│   └── library // 通用的js库及插件
│       └── x.js
│       └── ...
│   └── x.html // 页面模块
│   └── ....html
├── Production //目标文件 
├── gulp // gulp配置文件
│   └── config.js // 构建配置文件
│   └── tasks // 任务列表
│       └── build.js // 正式打包构建任务
│       └── clean.js // clean
│       └── connect.js // 静态服务任务
│       └── dev.js // 测试打包构建任务
│       └── fileinclude.js // 静态模块打包任务
│       └── function.js // js压缩，es6转换任务
│       └── images.js // 图片压缩任务
│       └── lib.js // js库压缩任务
│       └── styles.js // css样式压缩任务
│       └── views.js // 页面打包任务
│       └── watch.js // 动态监听任务 
├── package.json // npm 配置
├── gulpfile.js // 打包入口
````

## 构建 
``` bash
# 安装gulp依赖包    
npm install
    
# 进入gulpfile.js所在目录，命令行执行gulp脚本，进行生产环境的代码编译，
代码编辑在Develop文件夹下源码，预览在Production文件夹下访问
npm run dev
    
# 清空Production文件夹下文件
npm run clean
    
# 命令行执行gulpfile.js脚本，进行生产环境的前端模块的代码编译
npm run build

    
# 更多gulp脚本操作参考欢迎阅读gulp构建任务源码
```

