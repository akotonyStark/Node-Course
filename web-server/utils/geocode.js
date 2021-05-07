const request = require('request')


const geocode = (address, callback) => {
    const mapboxURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYWtvdG9ueXN0YXJrIiwiYSI6ImNrbzhxaXRlZDI4MjYycGx5dHE5MGRjNnEifQ.vt_ljOnWu6AzwpQIh-G_aQ'
    request({ url: mapboxURL, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services.', undefined)
        } else if (response.body.features.length == 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitute: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode