module.exports = {
  chainWebpack: config => {
    config.module
      .rule('worker')
      .test(/\.worker\.js$/)
      .use('worker')
      .loader('worker-loader')
  }
}
