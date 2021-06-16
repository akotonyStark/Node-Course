const numbers = [2,5,7,9,1,4,6,-1,0]

const filtered = numbers.filter(n => n>=0)

console.log(filtered)

const squares = filtered.map(n => n*n)
console.log(squares)

const dummyOBJs = filtered.map(n => {
  const obj = {value : n}
  return obj
})

//rewritten as
const dummyOBJs = filtered.map(n =>  ({value : n}))

console.log(dummyOBJs)
