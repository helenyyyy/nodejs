//localhost:3000
const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('Request received');

    // console.log(req)
    console.log(req.url)
    console.log(req.method)

    res.setHeader('Content-Type','text/plain')
    res.write('Hello World')
    res.end()

    // res.setHeader('Content-Type','text/html')
    // res.write('<meta charset="UTF-8">')
    // res.write('<h1>Hello World</h1>')
    // res.write('<h2>你好</h2>')
    // res.end()
})

server.listen(3000,'localhost',()=>{
    console.log('server started!');
})