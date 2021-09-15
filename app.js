const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const generatePassword = require('./generate_password')
const port = 3000

// const bodyParser = require('body-parser')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
// setting body-parser
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    // res.send('This is a password generator')
    res.render('index')
})

app.post('/', (req, res) => {
    // console.log('req.body', req.body)
    const options = req.body
    const password = generatePassword(options)
    res.render('index', {password : password, options : options})
})

app.listen(port, () => {
    console.log(`Express is listen on http://localhost:${port}`)
})