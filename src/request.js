let url = require('url')
module.exports = {
    get url() {
        return this.req.url // this 指向调用者：ctx.request（ = this.request）
    },
    get path() {
        let { pathname } = url.parse(this.url, true)
        return pathname
    },
    get query() {
        let { query } = url.parse(this.url, true)
        return query
    }
}