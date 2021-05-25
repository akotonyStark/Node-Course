console.log('client side js file is loaded')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data.puzzle);
    });
})


//fecthing weather api
// const url = 'http://api.weatherstack.com/current?access_key=c39a95baf4607a00e0069234943f67e8&query=5.7831,-0.12486&units=m'
// fetch(url).then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             console.log(data.error)
//         } else {
//             console.log(data)
//         }
//     });
// })

//since we already have our weather api endpoint
// const url = 'http://localhost:3000/weather?address=boston'
// fetch(url).then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             console.log(data.error)
//         } else {
//             console.log(data)
//         }
//     });
// })

const weatherForm = document.querySelector('form');
const search = document.querySelector('input')
const weather_descriptions = document.querySelector('#weather')
const error_message = document.querySelector('#error_message')

weatherForm.addEventListener('submit', (e) => {
    //prevent the browser from refreshing after event
    e.preventDefault()

    const location = search.value;
    console.log(location)

    //loading message
    weather_descriptions.textContent = 'loading...'
    error_message.textContent = ''

    //const url = 'http://localhost:3000/weather?address=' + location;
    const URL = '/weather?address=' + location;
    fetch(URL).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
                error_message.textContent = data.error
                weather_descriptions.textContent = ''
            } else {
                console.log(data.forcast.current)
                weather_descriptions.textContent = data.forcast.current.weather_descriptions[0]
            }
        });
    })
})