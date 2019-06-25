const Koa = require('koa')
const next = require('next')
const Router = require('koa-router');


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router();
  router.get("/aa", async ctx => {
    console.log('aa.js');
    await app.render(ctx.req, ctx.res, "/login", ctx.query);
    
    ctx.respond = false;
  });
  router.get("/login", async ctx => {
    await app.render(ctx.req, ctx.res, "/login", ctx.query);
    console.log('server.js');
    ctx.respond = false;
  });

  // server.use(async (ctx, next) => {
  //   await handle(ctx.req, ctx.res)
  //   console.log('2222');
  //   ctx.respond = false
  // })
  server.use(router.routes())
  server.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
  })
})
