const request = require('request')

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=39.207233&lon=33.191018&appid=9e89611818623bc7428b1e27629313e3&units=metric'

request({ url: url, json: true}, (error, response) => {
    //ı need help for acces to weather description
    console.log(response.body.weather.description + ' It is currently ' + response.body.main.temp + ' feels like ' + response.body.main.feels_like)
})