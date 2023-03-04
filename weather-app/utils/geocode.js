const request = require('request')

const geocode = (address, callback) => {
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${address}&appid={YOUR_API_ID}&units=metric`

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (response.body.length === 0) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.coord.lat,
                longitude: response.body.coord.lon,
                location: response.body.name + ' ' + response.body.sys.country
            })
        }
    })
}

module.exports = geocode