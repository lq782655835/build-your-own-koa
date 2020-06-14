# build-your-own-koa

koa核心2点： 1. 中间件模式  2. 洋葱模型

## 中间件模式

中间件ctx实现核心：

``` js
createContext(req, res) {
    let ctx = this.context
    // 原生req/res
    ctx.req = req // ctx.req.url
    ctx.res = res

    ctx.request = this.request // ctx.request.url
    ctx.response = this.response

    ctx.request.req = req // ctx.request.req.url
    ctx.response.res = res

    return ctx
}
```

## 洋葱模型

待更新compose
