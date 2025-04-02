const express = require('express')

const app = express()

// app.set('view engine','ejs')
// app.set('views','page')

//200 --> 304 no need request agn for server

app.get('/',(req,res)=>{
    res.send('<h1>Home</h1>')
    res.sendFile('./page/index.html',{root:__dirname})
    // let now = 'The time now is${dayjs().hour()}h${dayjs().minute()}m${dayjs().second()}s'
    // res.render('index',{courseName: 'NodeJs', time : now})
})

app.get('/about',(req,res)=>{
    res.sendFile('./page/about.html',{root:__dirname})
    // res.render('about')
})

app.get('/aboutus',(req,res)=>{
    res.redirect('/about')
})

//case must put at last
app.use((req,res)=>{
    res.status(404).sendFile('./page/404.html',{root:__dirname})
    // res.status(404).render('404')
})

app.listen(3000)