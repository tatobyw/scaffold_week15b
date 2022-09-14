const express = require('express')
const http = require('http')
const app = express()
const morgan = require('morgan')

const PORT = process.env.PORT || 4000
const server = http.createServer(app)

app.use(morgan('dev'))
//Static file: making public directory as static directory
app.use(express.static('plubic'))

//Set view pug template engine
app.set('views','./views')
app.set('view engine','ejs')

//register route:http://localhost:4000
app.get('/',(req,res)=>{
    res.status(200).sendFile(__dirname + '/index.html')
})

app.get('/welcome',(req,res)=>{
    res.status.render('welcome',{title:'Welcome Page'})
})

app.get('/welcome',(req,res)=>{
    res.status.render('about',{title:'About Page'})
})

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost${PORT}`)
})
