const fetch = require('node-fetch')
const getData = async() => {

    let data = await fetch("https://sleek-collections-api.herokuapp.com/products")
    console.log(data.body)
}


getData()