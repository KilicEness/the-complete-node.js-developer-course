const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${address}&appid={api_key}&units=metric`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (body.length === 0) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                latitude: body.coord.lat,
                longitude: body.coord.lon,
                location: body.name + ' ' + body.sys.country
            })
        }
    })
}

module.exports = geocode