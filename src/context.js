proto = {}

// ctx.url
Object.defineProperty(proto, 'url', { // 在ctx中直接定义属性
    get () {
        return this.request.url // this为ctx
    }
})
Object.defineProperty(proto, 'path', {
    get () {
        return this.request.path // this为ctx
    }
})

module.exports = proto