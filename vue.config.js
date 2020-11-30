// vue.config.js
module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = '《今周刊》24周年專題：進步台灣'
                return args
            })
    },
    publicPath: process.env.NODE_ENV === 'production' ?
        '/lazyweb/project/advance_taiwan/' : './' // 正式
        // '/edm/dinoTest/advance_taiwan/' : './' // 測試
        // './' : './' // localhost
}