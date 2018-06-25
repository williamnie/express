// 导入express包
const express = require('express')
const { router, router1 } = require('./router')
// 创建exress的一个实例
const app = express()
app.set('trust proxy','loopback')
app.use(function (err,req, res, next) {

    let ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress || req.ip || req.ips || '';
       
    ip = ip.match(/\d+.\d+.\d+.\d+/)
    ip = ip ? ip.join('.') : null
    console.log(ip);
    next();
});
app.use('/', router);
app.use('/abc', router1)
app.listen(3000, () => {
    console.log('server is running');
});