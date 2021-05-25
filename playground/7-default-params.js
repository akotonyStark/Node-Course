const greeter = (name = 'Unnamed User', age) => {
    console.log("Hello ", name)
    console.log("You must be ", age, " years old to use this site")
}

greeter('Augustine', 18)
greeter()