const express = require('express')
const app = express()
const fs = require('fs');
const path = require('path');
const multiparty = require('multiparty');

app.get('/',(req,res)=>{
    res.sendfile('./index.html')
})

app.post('/file-upload', function(req, res) {

    // console.log(req);
    var form = new multiparty.Form();
    //设置文件存储路径
    form.uploadDir = "./public";
    //设置单文件大小限制
    form.maxFilesSize = 2 * 1024 * 1024;
    //form.maxFields = 1000;  设置所以文件的大小总和
    //解析表单数据
    form.parse(req, function(err, fields, files) {
        //fields:非文件内容；files：文件内容
        // console.log(files.content[0]);
        const{content} = files
        console.log(content);

        console.log(files.originalFilename);
        console.log(files.path);
    
    });
 })

 app.listen(3000, () => {
    console.log('server is running');
});