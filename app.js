const Koa = require('koa');
const Router = require('koa-router');

const App = new Koa();
const router = new Router();

//定义不同的请求
router.get("/home", async (ctx, next) => {
    ctx.response.status = 200;
    ctx.body = 'home'
})

router.post("/form", async (ctx, next) => {
    ctx.response.status = 200;
    ctx.body = 'form'
})

App.use(router.routes()).use(router.allowedMethods);

App.use(async (ctx, next) => {
    ctx.body = "hello kao!!"
})

App.listen(3000, () => {
    console.log("App started on port: 3000")
})