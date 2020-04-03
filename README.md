# Koa 学习模板

> Koa 是下一代的 Node.js 的 Web 框架。由 Express 团队设计。旨在提供一个更小型、更富有表现力、更可靠的 Web 应用和 API 的开发基础。  
Koa可以通过生成器摆脱回调，极大地改进错误处理。Koa核心不绑定任何中间件，但提供了优雅的一组可以快速和愉悦地编写服务器应用的方法。


1. 启动一个最基础的server

```
   yarn add koa
```
```
//js代码
 const Koa = require('koa');

 const App = new Koa();

 App.use( async (ctx,next)=>{
    ctx.body = "hello koa!!"
 })

 App.listen(3000,()=>{
    console.log("App started on port: 3000")
 })
```

以上代码是一个最简单的web服务器的实现。通过node app.js启动程序，可以看到控制台输出 App started on port: 3000。

在浏览器中输入http://localhost:3000,网页上输出 hello koa!

2. koa路由中间件 koa-router
