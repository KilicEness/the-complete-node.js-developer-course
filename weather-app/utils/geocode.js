const request = require('request')

const geocode = (address, callback) => {
    const url = ''

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (response) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                
            })
        }
    })
}

module.exports = geocode