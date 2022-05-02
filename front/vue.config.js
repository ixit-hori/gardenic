module.exports = {
  publicPath: './',  // 相対パス設定
  css: {
    extract: {
      ignoreOrder: true
    },
    loaderOptions: {
      scss: {   // 共通Scss設定
        prependData: `@import "@/scss/variables.scss";`,  // Vueファイル全てに共通CSSを読み込み
        // prependData: `@import "@/scss/common.scss"; \
        //               @import "@/scss/mixin.scss";`,  // Vueファイル全てに共通CSSを読み込み
      }
    }
  },
  configureWebpack: {
    devServer: {
      watchOptions: {
        poll: true  // hot-reload設定
      }
    }
  }
}
