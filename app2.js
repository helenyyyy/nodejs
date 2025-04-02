//using ejs
const express = require('express')
const dayjs = require('dayjs')

const app = express()

app.use((req,res,next)=>{
    console.log(`New visitor: from${req.hostname} | Path: ${req.path}`)
    next()
})

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')
app.set('views','page2')

app.get('/',(req,res)=>{
    let articles = [
        {title : 'How to use NodeJs', author: 'helen'},
        {title : 'This is a NodeJs course', author: 'john'},
        {title : 'NodeJs is a backend language', author: 'jane'},
    ]
    let now = `The time now is ${dayjs().hour()}:${dayjs().minute()}:${dayjs().second()}`
    res.render('index',{
        courseName: 'NodeJs', 
        time : now,
        blogs : articles,
        title : 'Home'
    })
})

app.post('/',(req,res)=>{
    console.log(req.body)
    console.log(req.body.username)
    console.log(req.body.password)
})

app.get('/about',(req,res)=>{
    res.render('about',{title : 'About'})
})

//case must put at last
app.use((req,res)=>{
    res.status(404).render('404',{title : 'non existent lol'})
})

app.listen(3000)