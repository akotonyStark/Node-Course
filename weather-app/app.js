// console.log('Starting...')


// setTimeout(() => {
//     console.log('2 seconds timer')
// }, 2000)

// setTimeout(() => {
//     console.log('0 second timer')
// }, 0)
// console.log('Stopping')


//making HTTP API request
const request = require('request')

//const url = 'http://api.weatherstack.com/current?access_key=c39a95baf4607a00e0069234943f67e8&query=37.8267,-122.4233&units=f'
const urlGH = 'http://api.weatherstack.com/current?access_key=c39a95baf4607a00e0069234943f67e8&query=5.7831,-0.12486&units=m'

// request({ url: url }, (error, response) => {
//     const data = JSON.parse(response.body)
//         //console.log(data)
//     console.log(data.current)
// })


// request({ url: urlGH, json: true }, (error, response) => {

//     if (error) {
//         console.log('Unable to connect to location services')
//     } else {
//         const data = (response.body)
//         console.log(data.current)
//     }

// })


// Task
// 1. Fire off a new request to the URL explored in mapbox
// 2. Have the request module pass it as JSON
// 3. Print both the latitude and longitude
// 4. test your work

// const mapboxURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWtvdG9ueXN0YXJrIiwiYSI6ImNrbzhxaXRlZDI4MjYycGx5dHE5MGRjNnEifQ.vt_ljOnWu6AzwpQIh-G_aQ'

// request({ url: mapboxURL, json: true }, (error, response) => {

//     if (error) {
//         console.log(error)
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         const data = (response)
//             //console.log(data.body.features)

//         const long = data.body.features[0].center[1]
//         const lat = data.body.features[0].center[0]

//         console.log(lat, long)
//     }

// })


/* rewritting all the codes above using callback functions */

// const geocode = (address, callback) => {
//     const mapboxURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYWtvdG9ueXN0YXJrIiwiYSI6ImNrbzhxaXRlZDI4MjYycGx5dHE5MGRjNnEifQ.vt_ljOnWu6AzwpQIh-G_aQ'
//     request({ url: mapboxURL, json: true }, (error, response) => {
//         if (error) {
//             callback('Unable to connect to location services.', undefined)
//         } else if (response.body.features.length == 0) {
//             callback('Unable to find location. Try another search', undefined)
//         } else {
//             callback(undefined, {
//                 latitude: response.body.features[0].center[0],
//                 longitute: response.body.features[0].center[1],
//                 location: response.body.features[0].place_name
//             })
//         }
//     })
// }

const forecast = require('./utitls/geocode')
const geocode = require('./utitls/geocode')

// geocode('Accra', (error, data) => {
//     console.log('Location Error', error)
//     console.log('Location Data', data)
// })


// forecast(5.7831, -0.12486, (error, data) => {
//     console.log('Forecast Error: ', error)
//     console.log('Forecast Data ', data)
// })

//now lets try callback chaining

// geocode('Accra', (error, data) => {
//     if (error) {
//         return console.log('Geocode Error:', error)
//     }

//     forecast(data.latitude, data.longitude, (error, forecastData) => {
//         if (error) {
//             return console.log('Forecast Error: ', error)
//         }

//         console.log(forecastData.location)
//         console.log('Forecast Data ', forecastData)
//     })
// })

const address = process.argv[2]
    //console.log(address)

// if (!address) {
//     console.log('Please provide an address')
// } else {
//     geocode(address, (error, data) => {
//         if (error) {
//             return console.log('Geocode Error:', error)
//         }

//         forecast(data.latitude, data.longitude, (error, forecastData) => {
//             if (error) {
//                 return console.log('Forecast Error: ', error)
//             }

//             console.log(forecastData.location)
//             console.log('Forecast Data ', forecastData)
//         })
//     })
// }


//destructuring the objects
if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log('Geocode Error:', error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log('Forecast Error: ', error)
            }

            console.log(location)
            console.log('Forecast Data ', forecastData)
        })
    })
}