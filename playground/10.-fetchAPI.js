const fetch = require('node-fetch')
const getData = async() => {
    let data = ''
    let { res } = await fetch("https://sleek-collections-api.herokuapp.com/products")
    console.log(res)
}


getData()