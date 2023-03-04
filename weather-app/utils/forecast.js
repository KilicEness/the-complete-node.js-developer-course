const request = require('request')

const forecast = (lat, lon, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=apiKey&units=metric`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.weather[0].description + '. It is currently ' + body.main.temp + '. Feels like ' + body.main.feels_like)
        }
    })
}

module.exports = forecast
