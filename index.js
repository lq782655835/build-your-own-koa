// let Koa = require('koa')
let Koa = require('./src/application')

let app = new Koa()

app.use(function(ctx) {
    console.log(ctx.req.url)
    console.log(ctx.request.req.url)
    console.log(ctx.request.url)
    console.log(ctx.url)
    ctx.body = 'hello'
})

app.listen(3000)