
var port_env = require('./config/pro.env');  // 生产环境
var dev_env = require('./config/dev.env');  // 测试环境
const env = process.env.NODE_ENV;

const path = require('path')

if (env == "development") {//本地
    var hosturl = dev_env.API_ROOT
} else {
    var hosturl = port_env.API_ROOT
}

module.exports = {
    // publicPath: process.env.NODE_ENV === 'production' ? '/crm_page_test/' : '/',
    publicPath: process.env.NODE_ENV === 'production' ? '/crm_page/' : '/',
    //不打包map文件
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
    //代理接口
    devServer: {
        host: 'localhost',
        // host: '192.168.20.101',// 配置端口
        port: 8080,
        proxy: null,
        // proxy: {
        //   '/apin': {
        //     target: 'http://fuliapi.yangguangqicai.com',    // 目标 API 地址
        //     ws: true,                               // 是否代理 websockets
        //     changOrigin: true,                      // 跨域配置
        //     pathRewrite: rewriten
        //   }
        // }
    },
    lintOnSave: false, // 取消 eslint 验证

   
};

