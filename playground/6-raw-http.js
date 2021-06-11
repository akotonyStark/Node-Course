const https = require('https')

const url = 'http://api.weatherstack.com/current?access_key=c39a95baf4607a00e0069234943f67e8&query=5.7831,-0.12486&units=m'
const URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWtvdG9ueXN0YXJrIiwiYSI6ImNrbzhxaXRlZDI4MjYycGx5dHE5MGRjNnEifQ.vt_ljOnWu6AzwpQIh-G_aQ'
''
const sleekURL = 'https://sleek-collections-api.herokuapp.com/products'

const request = https.request(sleekURL, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
            //console.log(chunk)
    })
    response.on('end', () => {
        console.log(data)
    })
    response.on('error', (error) => {
        console.log("Error:", error)
    })
})
request.end()