class Human {

    constructor(name, gender) {
        this.name = name
        this.gender = gender
    }

    canSpeak = () => {
        console.log('Hello Im human')
    }
}

const mike = new Human('Michael', 'male')
console.log(mike.name)
console.log(mike.gender)
mike.canSpeak()


function Alien(specie, planet) {
    this.specie = specie
    this.planet = planet
}

Alien.prototype.saySomething = function() {
    console.log('I come in peace')
}
const allen = new Alien('Martian', 'Mars')
console.log(allen.planet)
console.log(allen.specie)
allen.saySomething()


class Superman extends Human {
    constructor(name, gender, strength) {
        super(name, gender)
        this.strength = strength
    }

    canSpeak = () => {
        console.log('Im superhuman')
    }
}

const clark = new Superman('Clark Kent', 'male', 'super strength')

console.log('Hello i am ', clark.name, 'and i have ', clark.strength)
clark.canSpeak()