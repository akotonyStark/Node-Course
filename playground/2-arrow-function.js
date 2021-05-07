// const square = function(x) {
//     return x * x
// }

//rewritten as 

// const square = (x) => {
//     return x * x
// }

//rewritten again as
const square = (x) => x * x
console.log(square(9))

const events = {
    name: 'Birthday Party',
    printGuestList: function() {
        console.log('Guest list for ', this.name)
    }
}

//can be rewritten as
const event = {
    name: 'Birthday Party',
    guestList: ['Jamie', 'John', 'Jane', 'Jolly'],
    printGuestList() {
        //const that = this
        console.log('Guest list for ', this.name)
        this.guestList.forEach((value) => {
            console.log(value, ' is attending', this.name)
        })
    }
}

//using arrow function - however this will not work cos arrow functions dont bind their own this values
const holidays = {
    name: 'Independence Day',
    printGuestList: () => {
        console.log('Guest list for ', this.name)
    }
}



event.printGuestList()
holidays.printGuestList()