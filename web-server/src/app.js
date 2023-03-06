const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../views'));

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Enes'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Enes Kilic'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'how can i help you',
        name: 'Enes Kilic'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'the weather is raining',
        location : 'ankara'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})