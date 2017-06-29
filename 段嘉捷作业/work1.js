/**
 * Created by Administrator on 2017/6/29.
 */
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    var url = req.url;
    switch (url) {
        case "/index.html": // 处理 index.html的请求
            fs.readFile("index.html","utf-8",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                    res.end(data)
                }
            })
            break;
        case "/logo.html": // 处理 log.html的请求

            fs.readFile("logo.html","utf-8",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                    res.end(data)
                }
            })


            break;
        case "/img.css":// 处理图片的请求

            fs.readFile("img.css", "utf-8", function (err, data) {
                if (err) {
                    console.log(err)
                    console.log("读取失败")
                } else {
                    res.writeHead(200, {"content-type": "text/css;charest=utf-8"})
                    res.end(data)
                }
            })
            break;
        case "/img.js":// 处理图片的请求

            fs.readFile("img.js", "utf-8", function (err, data) {
                if (err) {
                    console.log(err)
                    console.log("读取失败")
                } else {
                    res.writeHead(200, {"content-type": "text/javascript;charest=utf-8"})
                    res.end(data)
                }
            })
            break;
        case "/img.html": // 处理 img.html的请求
            fs.readFile("img.html","utf-8",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                    res.end(data)
                }
            })
            break;
        case "/a.jpg":// 处理图片的请求

            fs.readFile("a.jpg",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    console.log(data)

                    res.writeHead(200,{"content-type": "image/jpeg;charset=utf8"})
                    res.end(data)
                }
            })
            break
        default: //其他请求
            //res.end("404 没有找到此内容")
            fs.readFile("cw.html","utf-8",function (err, data) {
                if (err){
                    console.log("读取失败");
                    console.log(err)
                }else {
                    res.writeHead(200,{"content-type":"text/html;charset=utf8"})
                    res.end(data)
                }
            })
            break;
    }
}).listen(8080);
console.log("localhost:8080")