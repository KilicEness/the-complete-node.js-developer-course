const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
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
        helpText: 'How can i help you',
        title: 'Help',
        name: 'Enes Kilic'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'The weather is raining',
        location : 'Ankara'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Enes Kilic',
        errorMessage: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Enes Kilic',
        errorMessage: 'Page not found'
    })
})
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})