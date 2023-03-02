const request = require('request')

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=39.207233&lon=33.191018&appid={YourAPI}&units=metric'

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather app')
    } else if (response.body.error) {
        console.log('Unable to find location')
    } else {
        console.log(response.body.weather[0].description + ' It is currently ' + response.body.main.temp + ' feels like ' + response.body.main.feels_like)
    }
})