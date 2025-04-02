const express = require('express')

const app = express()

//200 --> 304 no need request agn for server

app.get('/',(req,res)=>{
    res.send('<h1>Home</h1>')
    res.sendFile('./page/index.html',{root:__dirname})
})

app.get('/about',(req,res)=>{
    res.sendFile('./page/about.html',{root:__dirname})
})

app.get('/aboutus',(req,res)=>{
    res.redirect('/about')
})

//case must put at last
app.use((req,res)=>{
    res.status(404).sendFile('./page/404.html',{root:__dirname})
})

app.listen(3000)