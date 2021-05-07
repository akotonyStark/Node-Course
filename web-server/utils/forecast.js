const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c39a95baf4607a00e0069234943f67e8&query=' + latitude + ',' + longitude + '&units=m'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather services', undefined)
        } else if (response.body.error) {
            callback('Unable to find location service', undefined)
        } else {
            callback(undefined, {
                current: response.body.current,
                location: response.body.location.name
            })
        }
    })

}

module.exports = forecast