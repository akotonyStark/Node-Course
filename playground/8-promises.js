const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 3, 5])
            //reject('Things went wrong')
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Success: ', result)
}).catch((error) => {
    console.log(error)
})

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// add(1, 2).then((result) => {
//     console.log(result)

//     //nested calls
//     add(result, 60).then((new_sum) => {
//         console.log(new_sum)
//     }).catch((error) => {
//         console.log(error)
//     })
// }).catch((error) => {
//     console.log(error)
// })


//now lets try promise chaining where we return the next promise from the then callback
add(1, 2).then((sum) => {
    console.log(sum)
    return add(sum, 30)
}).then((new_sum) => {
    console.log(new_sum)
}).catch((e) => {
    console.log(e)
})