// 导入express包
const express = require('express')
// 创建exress的一个实例
const bodyParser = require('body-parser')
const app = express()
// app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/cd/test', (req, res) => {
    console.log(req.query.url);
    
    // res.json(data)
})

app.post('/abc', (req, res) => {
    console.log(req.body);
})

app.listen(3000, () => {
    console.log('server is running');
});