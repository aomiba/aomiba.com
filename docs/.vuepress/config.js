module.exports = {
    title: 'aomiba.com',
    description: 'fe utils',
    base: '/',
    markdown: {
        lineNumbers: true
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@dd': './' // 这里配置失败， 回头看看原因
            }
        }
    }
}