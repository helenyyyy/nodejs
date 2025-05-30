//localhost:3000
const http = require('http')
const fs = require('fs').promises
var dayjs = require('dayjs')

//install nodemon and dayjs
//npm install (will install package.json all dependencies)
console.log(dayjs().year())
console.log(dayjs().hour())
console.log(dayjs().minute())
console.log(dayjs().second())

const server = http.createServer(async (req, res) => {

    let path = './page/'
    // let statusCode = 200

    switch (req.url) {
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
            res.setHeader('Location', '/about')
            res.end()
            break;
        default:
            path += '404.html'
            statusCode = 404
            break;
    }

    console.log(path);
    // res.statusCode = statusCode
    res.setHeader('Content-Type', 'text/html')

    // serveFile(path, res)
// })

//     fs.readFile(path, (error, data) => {
//         if (error) {
//             console.log(error)
//         } else {
//             res.write(data)
//         }
//         res.end()
//     });
// })

// function serveFile(filePath, res) {
//     fs.readFile(filePath, (err, data) => {
//         if (err) {
//             console.log(err)
//             res.write('<h1>Server Error</h1>')
//         } else {
//             res.write(data)
//         }
//         endResponse(res)
//     })
// }

// function endResponse(res) {
//     res.end()
// }

try {
    const data = await fs.readFile(path)
    res.write(data)
} catch (error) {
    console.log(error)
    res.write('<h1>Server error</h1>')
}

    res.end()
})

server.listen(32852, 'localhost', () => {
    console.log('server started!');
})