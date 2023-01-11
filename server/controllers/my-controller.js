'use strict'

module.exports = {
    index(ctx) {
        ctx.body = strapi
            .plugin('strapi-plugin-feedback')
            .service('myService')
            .getWelcomeMessage()
    },
}
