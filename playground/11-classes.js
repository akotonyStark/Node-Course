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