const Koa = require('koa');

const App = new Koa();

App.use( async (ctx,next)=>{
    ctx.body = "hello kao!!"
})

App.listen(3000,()=>{
    console.log("App started on port: 3000")
})