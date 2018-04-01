# Eyepetizer
使用 wepy 开发的小程序Demo

### 安装 wepy 命令行工具。
npm install wepy-cli -g

### 安装依赖包
npm install 

### 实时编译
npm run dev

### 生产压缩
npm run build

### wepy开发文档地址
https://tencent.github.io/wepy/
### 小程序文档地址
http://mp.weixin.qq.com/debug/wxadoc/dev/

### 开发使用说明(重要)
1、使用微信开发者工具-->添加项目，项目目录请选择dist目录。<br> 
2、微信开发者工具-->项目-->关闭ES6转ES5。 重要：漏掉此项会运行报错。<br> 
3、微信开发者工具-->项目-->关闭上传代码时样式自动补全。 重要：某些情况下漏掉此项也会运行报错。<br> 
4、微信开发者工具-->项目-->关闭代码压缩上传。 重要：开启后，会导致真机computed, props.sync 等等属性失效。\<br> 

### 目录结构
```
├── api
│   └── api.js             //接口
├── app.wpy                 //入口文件
├── components          //组件
│   ├── tab.wpy            //滑动导航栏组件
│   ├── tabContent.wpy     //滑动导航栏对应内容组件
│   ├── 。。。.wpy         // wepy-cli 集成练习基础组件
├── assets                 //图片文件夹
├── pages               //页面
│   ├── home.wpy          //首页
│   ├── index.wpy         //wepy-cli集成首页
│   ├── follow.wpy        //关注
│   ├── my.wpy            //个人中心
│   ├── classify.wpy      //单个分类首页
├── store                  //redux 数据流
│   ├── actions
│   ├── reducers
│   ├── types           
│   └── index.js
└── utils                //工具类
     ├── md5.js             //md5
     ├── tip.js             //提示弹框组件
     ├── util.js            //工具
     └── wxRequest.js       //ajax请求
 ```    
 ## Demo 截图
 
