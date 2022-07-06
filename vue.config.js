module.exports = {
  devServer: {
    //跨域
    proxy: {
      '/api': {
        target: 'http://localhost:8080', //路径指向本地主机地址及端口号
        changOrigin: true, //准许跨域
        //路径重写
        pathRewrite: {
          '^/api': '' //路径转发代理
        }
      }
    }
  }
}
