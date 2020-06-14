let http = require('http')
let context = require('./context')
let request = require('./request')
let response = require('./response')

/**
 * koa核心2点： 1. 中间件模式  2. 洋葱模型
 */
module.exports = class Application {
    constructor() {
        this.context = Object.create(context)
        this.request = Object.create(request)
        this.response = Object.create(response)
    }

    use (fn) {
        this.fn = fn // TODO：第二阶段，考虑洋葱模型实现
        return this
    }

    handleRequest(req, res) {
        let ctx = this.createContext(req, res) // 创建上下文
        this.fn(ctx)
    }

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

    listen (...args) {
        let server = http.createServer(this.handleRequest.bind(this))
        server.listen(...args)
    }
}