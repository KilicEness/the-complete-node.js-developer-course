const request = require('request')

const forecast = (lat, lon, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={Your_api_id}&units=metric`

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect service', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.weather[0].description + '. It is currently ' + response.body.main.temp + '. Feels like ' + response.body.main.feels_like)
        }
    })
}

module.exports = forecast
