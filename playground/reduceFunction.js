const ages = [21,4,6,24,78,1044,8,99]

const maxAge = ages.reduce((max, age) => {
  if(age > max){
    console.log(`${age} > ${max} = ${age > max}`)
    return age
  }
  else{
    return max
  }
})

console.log("maxAge", maxAge)
