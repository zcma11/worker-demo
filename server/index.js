const Koa = require('koa');
const app = new Koa();
const fs = require('fs');

app.use(async ctx => {
  console.log(ctx.url)
  // const file = fs.readFileSync(path)
  switch(ctx.url) {
    case '/':
      ctx.type = 'html'
      ctx.body = fs.readFileSync('./dist/index.html')
      return
  }

  if (ctx.url.endsWith('css')) {
    ctx.type = 'text/css'
  } else if (ctx.url.endsWith('js')) {
    ctx.type = 'application/javascript'
  } else if (ctx.url.endsWith('png')) {
    ctx.type = 'image/png'
  }
  ctx.body = fs.readFileSync(`dist${ctx.url}`)
});

app.listen(3000, () => {
  console.log('连接成功')
});