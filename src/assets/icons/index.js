/**
 * @file:   文件描述
 * @author: lzc
 * @date:   2019-03-02
 */

const requireAll = ctx => ctx.keys().map(ctx)

const req = require.context('./svg', false, /\.svg$/)

export default requireAll(req)
