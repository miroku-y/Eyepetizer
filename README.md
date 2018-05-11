# Eyepetizer

使用 wepy 开发的小程序 Demo

### 安装 wepy 命令行工具。

npm install wepy-cli -g

### 安装依赖包

npm install

### 实时编译

npm run dev

### 生产压缩

npm run build

### wepy 开发文档地址

https://tencent.github.io/wepy/

### 小程序文档地址

http://mp.weixin.qq.com/debug/wxadoc/dev/

### 开发使用说明(重要)

1、使用微信开发者工具-->添加项目，项目目录请选择 dist 目录。<br>
2、微信开发者工具-->项目-->关闭 ES6 转 ES5。 重要：漏掉此项会运行报错。<br>
3、微信开发者工具-->项目-->关闭上传代码时样式自动补全。 重要：某些情况下漏掉此项也会运行报错。<br>
4、微信开发者工具-->项目-->关闭代码压缩上传。 重要：开启后，会导致真机 computed, props.sync 等等属性失效。\<br>

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

![](https://github.com/yangdongMC/Eyepetizer/blob/master/src/assets/wechat12.png)
![](https://github.com/yangdongMC/Eyepetizer/blob/master/src/assets/wechat14.png)
![](https://github.com/yangdongMC/Eyepetizer/blob/master/src/assets/wechat13.png)
![](https://github.com/yangdongMC/Eyepetizer/blob/master/src/assets/wechat11.png)
![](https://github.com/yangdongMC/Eyepetizer/blob/master/src/assets/wechat15.png)

### 开发手记

首先，此 demo 为 wepy 框架练习手册，抱歉没有深入下去，项目间隙，花了点时间效仿了一下，<br>
  在这里要感谢 Eyepetizer 提供的外放 API,让我可以抓到真实数据<br>

1.同时打开两个文档 wepy,小程序，摸索式进行，滑动 tab 组件查看 zanUI 源码实现<br> 2.在调用接口时，看到了请求成功，但是 console 出来的数据一直是为 undefined，调试了好久，最后在 wepy 中的常见问题发现需要安装和引用 promise-polyfill<br> 3.组件化，抽出了 tabContent,达到了复用效果，参考了开眼视频的小程序，全部分类下，单个分类跳转的和 tab 切换跳转的页面，只是在 header 处有点不一样，于是 tabContent 诞生了，但 tabContent 不是一个纯组件，它是有状态的，在组件调用后进行请求获取内容，不是父组件传值而进行渲染<br> 4.像这样的抽离，就会衍生一系列的问题，组件中如何调用其他组件内的方法--$invoke，当然还有不同场景的不同方法；组件之间的通信，无论是方法间参数通信，还是 url 路径上参数通信<br> 5.增加了在video标签上显示指定图片的功能<br>
