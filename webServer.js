//localhost:3000
const http = require('http')
const fs = require('fs')
var dayjs = require('dayjs')

//install nodemon and dayjs
//npm install (will install package.json all dependencies)
console.log(dayjs().year())
console.log(dayjs().hour())
console.log(dayjs().minute())
console.log(dayjs().second())

const server = http.createServer((req,res)=>{
    
    let path = './page/'
    switch(req.url)
    {
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break;
        case '/aboutus':
            res.statusCode = 301
            res.setHeader('Location','/about')
            res.end()
            break;
        default:
            path += '404.html'
            res.statusCode = 404
            break;
    }

    console.log(path);

    res.setHeader('Content-Type','text/html')

    fs.readFile(path,(error,data)=>{
        if(error)
            console.log(error)
        else
            res.write(data)

        res.end()
    })
    // res.end()
})

server.listen(3000,'localhost',()=>{
    console.log('server started!');
})