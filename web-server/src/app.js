const path = require('path')
const express = require('express')
const hbs = require('hbs');
const { response } = require('express');
const geocode = require('../utils/geocode')
const forecast = require('../utils/forecast')


//console.log(__dirname)
//console.log(__filename)

//console.log(path.join(__dirname, '../public'))
const app = express()

/*
define paths for express config
stores the root dir to allow visiting static html pages
*/

const publicDirPath = path.join(__dirname, '../public');
//view path
const viewsPath = path.join(__dirname, '../templates/views');
//partials path
const partialsPath = path.join(__dirname, '../templates/partials')


//tell express which templating engine to install
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirPath))

//we tell our express app what exactly it should do
app.get('', (req, res) => {
    // res.send('Hello express')
    res.render('index', {
        title: 'Weather App',
        name: 'Augustine Akoto',
        company: 'Akwaaba Evolution Inc'
    })
})


app.get('/index', (req, res) => {
    // res.send('Hello express')
    res.render('index', {
        title: 'Weather App',
        name: 'Augustine Akoto',
        company: 'Akwaaba Evolution Inc'
    })
})

app.get('/help', (req, resp) => {
    //resp.send('Help Page')
    //we can also send back json object
    resp.send({
        name: 'Augustine',
        company: 'Akwaaba Evolution Inc',
        job: 'Software Developer'
    })
})

app.get('/about', (req, resp) => {
    //resp.send('About Page')
    //resp.send('<h1>About Page</h1>')
    resp.render('about', {
        title: 'About Me',
        company: 'Akwaaba Evolution Inc',
        name: 'Augustine Akoto'
    })
});



app.get('/weather', (req, resp) => {
    if (!req.query.address) {
        return resp.send({
            error: 'Address not provided'
        })
    }

    const address = req.query.address
    geocode(address, (error, data) => {
        if (error) {
            return resp.send({
                error: error
            });
        } else {
            forecast(data.latitude, data.longitude, (error, forecastData) => {
                if (error) {
                    return resp.send({
                        error: error
                    });
                }

                resp.send({
                    location: data.location,
                    forcast: forecastData,
                    address: address
                });
            })

        }
    });

    // resp.send({
    //     forecast: 'it is sunny',
    //     location: req.query.address
    // })
});

app.get('/products', (req, resp) => {

    if (!req.query.search) {
        return resp.send({
            error: 'You must provide a search query'
        })
    } else {
        console.log(req.query.search)
        resp.send({
            products: []
        })
    }

})

//handles any page that doesnt match what has been defined
app.get('/help/*', (req, response) => {
    //response.send('<h1>Help article not found</h1>')
    response.render('404', {
        title: '404',
        name: 'Augustine Akoto',
        company: 'Akwaaba Evolution Inc',
        errorMessage: 'Help article not found'
    })
});



//handles any page that doesnt match what has been defined
app.get('*', (req, response) => {
    //response.send('<h1>My 404 Page</h1>')
    response.render('404', {
        title: '404',
        name: 'Augustine Akoto',
        company: 'Akwaaba Evolution Inc',
        errorMessage: '404 page not found'
    })
});

//to start the server up
app.listen(3000, () => {
    console.log('server is up on port 3000')
})